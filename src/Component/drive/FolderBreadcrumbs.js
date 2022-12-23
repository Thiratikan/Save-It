import React from "react";
import { Breadcrumb } from "react-bootstrap";

export default function FolderBreadcrumbs({ currentFolder }) {
  return (
    <Breadcrumb
      className="flex-grow-1"
      listProps={{ className: "bg-white pl-0 m-0" }}
    >
      {/* render out folder as a breadcrumb item. First thing to render out cureent folder. If we have the cureent folder, we want to render out breadcrumb item*/}
      {currentFolder && (
        <Breadcrumb.Item
          className="text-truncate d-inline-block"
          style={{ maxWidth: "200px" }}
          active
        >
          {currentFolder.name}
        </Breadcrumb.Item>
      )}
    </Breadcrumb>
  );
}
