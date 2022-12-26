import React, { useState } from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import { storage, database } from "../../firebase";
import { useAuth } from "../contexts/AuthContext";
import { ROOT_FOLDER } from "../hooks/useFolder";
import { v4 as uuidV4 } from "uuid";
import { ProgressBar, Toast } from "react-bootstrap";
import { ref, uploadBytesResumable } from "firebase/storage";

export default function AddFileButton({ currentFolder }) {
  const [uploadingFiles, setUploadingFiles] = useState([]);
  const { currentUser } = useAuth();

  function handleUpload(e) {
    e.preventDefault();
    const file = e.target.files[0];
    console.log(file);
    // if current folder is equal to null or file is equal to null
    if (currentFolder == null || file == null) return;

    const id = uuidV4();
    setUploadingFiles((prevUploadingFiles) => [
      ...prevUploadingFiles,
      { id: id, name: file.name, progress: 0, error: false },
    ]);

    // if we are in the root folder then ignore currentFolder.name then take all the path combime them with / file name at the end
    // if we are not in the root folder then still need the path combime them with / currentFolder.name and then / file name at the end
    const filePath =
      currentFolder === ROOT_FOLDER
        ? `${currentFolder.path.join("/drive")}/${file.name}`
        : `${currentFolder.path.join("/drive")}/${currentFolder.name}/${
            file.name
          }`;

    // Manage upload inside firebase

    // const uploadTask = storage
    //   .ref(`drive/files/${currentUser.uid}/${filePath}`)
    //   .put(file);

    const upload = (file) => {
      const storageRef = ref(
        storage,
        `drive/files/${currentUser.uid}/${filePath}`
      );
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = snapshot.bytesTransferred / snapshot.totalBytes;
          setUploadingFiles((prevUploadingFiles) => {
            return prevUploadingFiles.map((uploadFile) => {
              if (uploadFile.id === id) {
                return { ...uploadFile, progress: progress };
              }

              return uploadFile;
            });
          });
        },
        () => {
          setUploadingFiles((prevUploadingFiles) => {
            return prevUploadingFiles.map((uploadFile) => {
              if (uploadFile.id === id) {
                return { ...uploadFile, error: true };
              }
              return uploadFile;
            });
          });
        },
        () => {
          setUploadingFiles((prevUploadingFiles) => {
            return prevUploadingFiles.filter((uploadFile) => {
              return uploadFile.id !== id;
            });
          });

          uploadTask.snapshot.ref.getDownloadURL().then((url) => {
            database.files
              .where("name", "==", file.name)
              .where("userId", "==", currentUser.uid)
              .where("folderId", "==", currentFolder.id)
              .get()
              .then((existingFiles) => {
                const existingFile = existingFiles.docs[0];
                if (existingFile) {
                  existingFile.ref.update({ url: url });
                } else {
                  database.files.add({
                    url: url,
                    name: file.name,
                    createdAt: database.getCurrentTimestamp(),
                    folderId: currentFolder.id,
                    userId: currentUser.uid,
                  });
                }
              });
          });
        }
      );
    };

    // to upload file to firebase database too
  }
  return (
    <>
      <label>
        <FontAwesomeIcon icon={faFileUpload} className="folder" />
        <input
          type="file"
          onChange={handleUpload}
          style={{ opacity: 0, position: "absolute", left: "-9999px" }}
        />
      </label>
      {uploadingFiles.length > 0 &&
        ReactDOM.createPortal(
          <div
            style={{
              position: "absolute",
              bottom: "1rem",
              right: "1rem",
              maxWidth: "250px",
            }}
          >
            {uploadingFiles.map((file) => (
              <Toast
                key={file.id}
                onClose={() => {
                  setUploadingFiles((prevUploadingFiles) => {
                    return prevUploadingFiles.filter((uploadFile) => {
                      return uploadFile.id !== file.id;
                    });
                  });
                }}
              >
                <Toast.Header
                  closeButton={file.error}
                  className="text-truncate w-100 d-block"
                >
                  {file.name}
                </Toast.Header>
                <Toast.Body>
                  <ProgressBar
                    animated={!file.error}
                    variant={file.error ? "danger" : "primary"}
                    now={file.error ? 100 : file.progress * 100}
                    label={
                      file.error
                        ? "Error"
                        : `${Math.round(file.progress * 100)}%`
                    }
                  />
                </Toast.Body>
              </Toast>
            ))}
          </div>,
          document.body
        )}
    </>
  );
}
