import React from "react";
import Navbar from "./Navbar";
import { DriveDesign } from "../../styles/Style-Dashboard";
import { Container } from "react-bootstrap";
import AddButton from "./AddButton";
import { useFolder } from "../hooks/useFolder";
import Folder from "./Folder";
import { useParams, useLocation } from "react-router-dom";
import FolderBreadcrumbs from "./FolderBreadcrumbs";

function Drive() {
  const { folderId } = useParams();
  // const { state = {} } = useLocation();
  const { folder, childFolders } = useFolder(folderId);

  return (
    <>
      <Navbar />
      <DriveDesign>
        <Container fluid>
          <div className="d-flex align-items-center">
            <FolderBreadcrumbs currentFolder={folder} />
            <AddButton currentFolder={folder} />
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
