import React, { Component } from 'react';
import Note from './Note';

class NoteList extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      notes: [],
      newNote: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({ newNote: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.newNote.trim() === '') return;
    this.setState((state) => ({
      notes: [...state.notes, state.newNote],
      newNote: ''
    }));
  };

  render() {
    return (
      <div className="note-list">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a note"
            value={this.state.newNote}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">Add Note</button>
        </form>
        <ul>
          {this.state.notes.map((note, index) => (
            <Note key={index} text={note} />
          ))}
        </ul>
      </div>
    );
  }
}

export default NoteList;
