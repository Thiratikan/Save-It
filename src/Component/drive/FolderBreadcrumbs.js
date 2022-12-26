import React from "react";
import { Breadcrumb } from "react-bootstrap";
import { ROOT_FOLDER } from "../hooks/useFolder";
import { Link } from "react-router-dom";

export default function FolderBreadcrumbs({ currentFolder }) {
  // if we are in the the root folder we don't have a path because we are ion root folder otherwise our path will start with the root folder because we don't want to save root folder in firebase folder manually
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) path = [...path, ...currentFolder.path];
  return (
    <Breadcrumb
      className="flex-grow-1"
      listProps={{ className: "bg-white pl-0 m-0" }}
    >
      {path.map((folder, index) => (
        <Breadcrumb.Item
          key={folder.id}
          linkAs={Link}
          // passing state along with route . In the state has an object which contains cureent folder (...folder) and adding path on it that everythin on the first element until the current index that click on
          linkProps={{
            to: {
              pathname: folder.id ? `/drive/folder/${folder.id}` : "/drive",
              state: { folder: { ...folder, path: path.slice(1, index) } },
            },
          }}
          className="text-truncate d-inline-block"
          style={{ maxWidth: "150px" }}
        >
          {folder.name}
        </Breadcrumb.Item>
      ))}
      {/* render out folder as a breadcrumb item. First thing to render out current folder. If we have the current folder, we want to render out breadcrumb item*/}
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
