import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [originalText, setOrignalText] = useState("");
  const [count, setCount] = useState(0);
  const handleUpClick = () => {
    setText(text.toUpperCase());
    if (count === 0) {
      setOrignalText(text);
    }
    setCount(1);
  };
  const handleLowClick = () => {
    setText(text.toLowerCase());
    if (count === 0) {
      setOrignalText(text);
    }
    setCount(1);
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    setText("");
  };

  const handleOriginalClick = () => {
    setText(originalText);
  };
  return (
    <>
      <div className="container">
        <h1>{props.header}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handelOnChange}
            value={text}
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleUpClick}
          disabled={text.length === 0}
        >
          Convert to UpperCase
        </button>
        <button
          className="btn btn-primary mx-2 my-1"
          onClick={handleLowClick}
          disabled={text.length === 0}
        >
          Convert to LowerCase
        </button>
        <button
          className="btn btn-success mx-2 my-1"
          onClick={handleOriginalClick}
          disabled={text.length === 0}
        > 
          Original Text
        </button>
        <button
          className="btn btn-danger mx-2 my-1"
          onClick={handleClearClick}
          disabled={text.length === 0}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-4">
        <h2>Your Text summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <h2 className="my-2">Preview</h2>
        {text.length > 0 ? text : "Please Enter Something to preview"}
      </div>
    </>
  );
}
