import React, { useState } from 'react';
import "./rename.scss";

const Rename = ({ initialName, onUpdate, onClose }) => {
  const [editedName, setEditedName] = useState("Deck presentation 01");

  const handleUpdate = () => {
    onUpdate(editedName);
  };

  return (
    <div className="sub-modal">
      <h3>Rename</h3>
      <input
        type="text"
        value={editedName}
        onChange={(e) => setEditedName(e.target.value)}
      />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={onClose}>close</button>
    </div>
  );
};

export default Rename;
