import React from "react";
import Navbar from "./Navbar";
import { DriveDesign } from "../../styles/Style-Dashboard";
import { Container } from "react-bootstrap";
import AddButton from "./AddButton";

function Drive() {
  return (
    <>
      <Navbar />
      <DriveDesign>
        <Container fluid>
          <AddButton />
        </Container>
      </DriveDesign>
    </>
  );
}

export default Drive;
