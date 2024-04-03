import React, { useState } from 'react';

const DoubleClickInput = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(props.text);


  const funkcja = (param) => {
    props.func(param.target.value)
  }
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    change(e);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  return (
    <>
      {isEditing ? (
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          onKeyPress={handleInputKeyPress}
          autoFocus
        />
      ) : (
        <div onDoubleClick={funkcja}>{text || 'Double click to edit'}</div>
      )}
    </>
  );
};

export default DoubleClickInput;
