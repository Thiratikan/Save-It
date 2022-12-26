import React from "react";
import Navbar from "./Navbar";
import { DriveDesign } from "../../styles/Style-Dashboard";
import { Container } from "react-bootstrap";
import AddFolderButton from "./AddFolderButton";
import { useFolder } from "../hooks/useFolder";
import Folder from "./Folder";
import { useParams } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import AddFileButton from "./AddFileButton";

function Drive() {
  const { folderId } = useParams();
  const { folder, childFolders } = useFolder(folderId);

  return (
    <>
      <Navbar />
      <DriveDesign>
        <Container fluid className="p-4">
          <div className="d-flex align-items-center">
            <FolderBreadcrumbs currentFolder={folder} />
            <AddFileButton currentFolder={folder} />
            <AddFolderButton currentFolder={folder} />
          </div>
          {/* loop through child folders and then render them */}
          {/* childFolders.length > 0 means we have some folder */}
          {childFolders.length > 0 && (
            // this div contians child folders
            <div className="d-flex flex-wrap">
              {childFolders.map((childFolder) => (
                <div
                  key={childFolder.id}
                  style={{ maxWidth: "250px" }}
                  className="p-2"
                >
                  {/* it will shows childFolder in each section */}
                  <Folder folder={childFolder} />
                </div>
              ))}
            </div>
          )}
        </Container>
      </DriveDesign>
    </>
  );
}

export default Drive;
