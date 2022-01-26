// import { useState } from "react";
import React, { useState } from "react";

export default function Textform(props) {
  function Uphandle() {
    if (text === text.toUpperCase()) {
      // alert("Text is in upper case");
      props.showAlert("Text is already in UpperCase !", "warning");
    } else {
      let newtext = text.toUpperCase();
      setText(newtext);
      props.showAlert("Text is converted to UpperCase !", "success");
    }
  }
  function Lwhandle() {
    if (text === text.toLowerCase()) {
      // alert("Text is in small case");
      props.showAlert("Text is already in SmallCase !", "warning");
    } else {
      let newtext = text.toLowerCase();
      setText(newtext);
      props.showAlert("Text is converted to SmallCase ! ", "success");
    }
  }
  function Chandle() {
    let CapitalizeWords = text[0].toUpperCase();
    for (let i = 1; i <= text.length - 1; i++) {
      let currentCharacter,
        previousCharacter = text[i - 1];
      if (previousCharacter === " ") {
        currentCharacter = text[i].toUpperCase();
      } else {
        currentCharacter = text[i];
      }
      CapitalizeWords = CapitalizeWords + currentCharacter;
    }
    setText(CapitalizeWords);
    props.showAlert("Text is Capitalised !", "success");
  }
  function whandle() {
    let newtxt = document.getElementById("mytxt");
    newtxt.select();
    navigator.clipboard.writeText(newtxt.value);
    props.showAlert("Text is Copied to Clipboard ! ", "success");
  }
  function rspace() {
    let newtxt = document.getElementById("mytxt").value;
    let strng = newtxt.replace(/\s+/g, " ").trim();
    setText(strng);
    props.showAlert("Extra Spaces removed !", "success");
  }
  function handleOnChange(event) {
    console.log("handkle fireds");
    setText(event.target.value);
  }
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container my-4"
        style={{
          color: props.mode === `light` ? `black` : `white`,
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="mytxt"
            rows="9"
            style={{
              backgroundColor:
                props.mode === `light` ? `white` : `rgb(31, 31, 31)`,
              color: props.mode === `light` ? `black` : `white`,
            }}
          >
            {text}
          </textarea>
        </div>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={Uphandle}
          className="btn btn-primary m-3"
        >
          Change to Uppercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={Lwhandle}
          className="btn btn-primary m-3"
        >
          Change to Lowercase
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={Chandle}
          className="btn btn-primary m-3"
        >
          Capitalise words
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={whandle}
          className="btn btn-primary m-3"
        >
          Copy to Clipboard
        </button>
        <button
          disabled={text.length === 0}
          type="button"
          onClick={rspace}
          className="btn btn-primary m-3"
        >
          Remove Extra Spaces
        </button>
        <h2 className="my-3">Text Summary</h2>
        <h4>
          {text.split(/\s+/).filter((element) => {
            return element.length !== 0;
          }).length + " "}
          Word and {text.replace(/\s/g, "").length} characters
        </h4>
      </div>
    </>
  );
}
