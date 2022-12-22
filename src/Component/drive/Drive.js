import React from "react";
import Navbar from "./Navbar";
import { DriveDesign } from "../../styles/Style-Dashboard";
import { Container } from "react-bootstrap";
import AddButton from "./AddButton";
import { useFolder } from "../hooks/useFolder";
import Folder from "./Folder";
import { useParams } from "react-router-dom";

function Drive() {
  // const { folderId } = useParams();
  const { folder, childFolders } = useFolder("zcnsvJ9ol5QC4E1KnZVq");
  console.log(childFolders);

  return (
    <>
      <Navbar />
      <DriveDesign>
        <Container fluid>
          <div className="d-flex align-items-center">
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
