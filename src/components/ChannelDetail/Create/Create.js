import React from 'react';
import PropTypes from 'prop-types';
import { ChannelPropTypes } from '../../commons/BoardPropTypes';
import './Create.css';

class Create extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      content: ''
    };

    this.handleCreate = this.handleCreate.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleContentChange(e) {
    this.setState({ content: e.target.value });
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleCreate() {
    const { name, content } = this.state;
    const { channel, onCreate } = this.props;
    const trimmedName = name.trim();
    const trimmedContent = content.trim();

    if (trimmedName.length > 0 && trimmedContent.length > 0) {
      const message = { name: trimmedName, content: trimmedContent };
      onCreate(channel, message);
      this.setState({ name: '', content: '' });
    }
  }

  render() {
    const { name, content } = this.state;
    return (
      <div className="create">
        <input
          placeholder="Name"
          className="create-name"
          value={name}
          onChange={this.handleNameChange}
        />
        <input
          placeholder="Message"
          className="create-message"
          value={content}
          onChange={this.handleContentChange}
        />
        <div
          className="create-button"
          onClick={this.handleCreate}
        >
          Create message
        </div>
      </div>
    );
  }
}

Create.propTypes = {
  channel: ChannelPropTypes,
  onCreate: PropTypes.func.isRequired
};

export default Create;
