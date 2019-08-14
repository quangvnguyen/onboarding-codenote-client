import React, { Component } from 'react';
import { API } from 'aws-amplify';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import LoaderButton from '../../components/LoaderButton';
import config from '../../config';
import { s3Upload } from '../../libs/awsLib';
import { INoteNewProps, INoteNewState } from './types';
import './index.css'; 

class NoteNew extends Component<INoteNewProps, INoteNewState> {
  file = null;

  state = {
    isLoading: null,
    note: {
      attachment: null,
    },
    content: "",
    attachmentURL: null
  };

  createNote = (note) => {
    return API.post("notes", "/notes", {
      body: note
    });
  }

  validateForm = () => {
    const { content } = this.state;
    return content.length > 0;
  }

  formatFilename = (str) => {
    return str.replace(/^\w+-/, "");
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  }

  handleFileChange = event => {
    this.file = event.target.files[0];
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { content, note } = this.state;
    const { history } = this.props;
    let attachment;

    if (this.file && this.file.size > config.MAX_ATTACHMENT_SIZE) {
      alert(`Please pick a file smaller than ${config.MAX_ATTACHMENT_SIZE/1000000} MB.`);
      return;
    }

    this.setState({ isLoading: true });

    try {
      if (this.file) {
        attachment = await s3Upload(this.file);
      }

      await this.createNote({
        content,
        attachment: attachment || note.attachment
      })

      history.push("/");
    } catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  render() {
    const { note, content, attachmentURL, isLoading } = this.state;

    return (
      <div className="NoteNew">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="newContent">
            <FormControl
              onChange={this.handleChange('content')}
              value={content}
              componentClass="textarea"
            />
          </FormGroup>
          {note.attachment &&
            <FormGroup>
              <ControlLabel>Attachment</ControlLabel>
              <FormControl.Static>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={attachmentURL}
                >
                  {this.formatFilename(note.attachment)}
                </a>
              </FormControl.Static>
            </FormGroup>}
          <FormGroup controlId="newFile">
            {!note.attachment &&
              <ControlLabel>Attachment</ControlLabel>}
            <FormControl onChange={this.handleFileChange} type="file" />
          </FormGroup>
          <LoaderButton
            block
            bsStyle="primary"
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={isLoading}
            text="Create"
            loadingText="Creating…"
          />
        </form>
      </div>
    );
  }
}

export default NoteNew;
