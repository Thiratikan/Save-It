import React, { useEffect, useReducer } from "react";
import { database } from "../../firebase";
import { useAuth } from "../contexts/AuthContext";

const ACTIONS = {
  SELECT_FOLDER: "select-folder",
  UPDATE_FOLDER: "update-folder",
  SET_CHILD_FOLDERS: "set-child-folders",
};

// create root objects and mimic database
// path is empty. path creats things that are before but in this case there is no thing that omes before the root folder
export const ROOT_FOLDER = { name: "Root", id: null, path: [] };

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SELECT_FOLDER:
      return {
        folderId: payload.folderId,
        folder: payload.folder,
        childFiles: [],
        childFolders: [],
      };

    // take current state and then update to payload
    case ACTIONS.UPDATE_FOLDER:
      return {
        ...state,
        folder: payload.folder,
      };
    case ACTIONS.SET_CHILD_FOLDERS:
      return {
        ...state,
        childFolders: payload.childFolders,
      };
    default:
      return state;
  }
}

export function useFolder(folderId = null, folder = null) {
  const [state, dispatch] = useReducer(reducer, {
    folderId,
    folder,
    childFolders: [],
    childFiles: [],
  });
  const { currentUser } = useAuth();

  //when foldderId and folder itself change, then reset defult state

  useEffect(() => {
    dispatch({ type: ACTIONS.SELECT_FOLDER, payload: { folderId, folder } });
  }, [folderId, folder]);

  // it will change when the only the folderID changes
  useEffect(() => {
    // if we are not in the folder, then we will call the root folder because we don't have the folderId yet

    if (folderId == null) {
      return dispatch({
        type: ACTIONS.UPDATE_FOLDER,
        payload: { folder: ROOT_FOLDER },
      });
    }

    // get single document from .doc(folderId) and . get to get that docment after that it will return the promise by doing .then and pass the doc
    // if there is an error . catch if you don't have to permission to access the folder you did not create
    // then we wanna set folder to the root folder by doing dispath to update the root folder

    database.folders
      .doc(folderId)
      .get()
      .then((doc) => {
        dispatch({
          type: ACTIONS.UPDATE_FOLDER,
          // convert doc to format ID
          payload: { folder: database.formatDoc(doc) },
        });
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: ROOT_FOLDER },
        });
      });
  }, [folderId]);

  // cleanup listener

  // do the search where parentId is equal to folderId (the property you want to check that item)
  // it's how firebase works
  // parentId is the property you want to search for
  // == equal to is check
  useEffect(() => {
    return database.folders
      .where("parentId", "==", folderId)
      .where("userId", "==", currentUser.uid)
      .orderBy("createdAt")
      .onSnapshot((snapshot) => {
        dispatch({
          type: ACTIONS.SET_CHILD_FOLDERS,
          payload: { childFolders: snapshot.docs.map(database.formatDoc) },
        });
      });
  }, [folderId, currentUser]);

  return state;
}
