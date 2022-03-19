import React from "react";
import style from "./editText.module.css";

export default function EditText({ text }) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [currentText, setCurrentText] = React.useState(text);

  React.useEffect(
    function () {
      setCurrentText(text);
    },
    [text]
  );

  function changeEditing() {
    setIsEditing(!isEditing);
  }

  function changeCurrentText(e) {
    setCurrentText(e.target.value);
  }

  return (
    <div>
      {isEditing === true && (
        <input
          className={style.textbox}
          value={currentText}
          onChange={changeCurrentText}
        ></input>
      )}
      {isEditing === false && <span>{currentText}</span>}
      <button className={style.button} onClick={changeEditing}>
        {isEditing === true ? "Save" : "Edit"}
      </button>
    </div>
  );
}
