import React, { useEffect, useReducer } from "react";

const ACTIONS = {
  SELECT_FOLDER: "select folder",
  UPDATE_FOLDER: "update-folder",
};

// create root objects
// path creats things that are before but in this case there is no thing that omes before the root folder
const ROOT_FOLDER = { name: "root", id: null, path: [] };

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
      return { ...state, folder: payload.folder };
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
  }, [folderId]);
  return <></>;
}
