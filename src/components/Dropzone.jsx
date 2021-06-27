import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

const SimpleDropzone = (props) => (
  <div>
    <DropzoneArea
      acceptedFiles={["image/*"]}
      dropzoneText={"Drag and drop an image here or click"}
      onChange={(files) => console.log("Files:", files)}
    />
  </div>
);

export default SimpleDropzone;
