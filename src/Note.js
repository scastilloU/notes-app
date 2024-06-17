import React from 'react';

function Note(props) {
  return (
    <li className="note">
      {props.text}
    </li>
  );
}

export default Note;
