import React, { Component } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import Button from "@material-ui/core/Button";
import "./styles.css";

export default class DropzoneDialogExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      files: [],
    };
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  handleSave(files) {
    //Saving files to state for further use and closing Modal.
    this.setState({
      files: files,
      open: false,
    });
  }

  handleOpen() {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <div>
        <Button
          className="button"
          variant="contained"
          color="primary"
          onClick={this.handleOpen.bind(this)}
        >
          Adicione fotos do imóvel
        </Button>
        <DropzoneDialog
          dialogTitle={"Faça o upload das imagens"}
          dropzoneText={"Arraste para cima mermão"}
          cancelButtonText={"cancelar"}
          submitButtonText={"submeter"}
          filesLimit={12}
          open={this.state.open}
          onSave={this.handleSave.bind(this)}
          acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
          showPreviews={true}
          maxFileSize={5000000}
          onClose={this.handleClose.bind(this)}
        />
      </div>
    );
  }
}
