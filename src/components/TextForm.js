import React, { useState } from "react"; // useState is a hook

export default function TextForm(props) {
  // here we are using hooks to track the  application data , by using the current state and updated state.
  // text = it is a variable which store the current value of text and , setText() is a method(function), if we want to change in the text varible value it can be change by the setText() method.
  const [text, setText] = useState("");
  const [outputx, setoutput]=useState("");

  const handelClick = () => {
    let newText = text.toUpperCase(); // chnge existing text to uppercase
    //setText(newText); /// render the uppercase value
    setoutput(newText);
    props.showAlert("Converted to Uppercase", "Success");
  };

  const handelClicklower = () => {
    let newText = text.toLowerCase(); // chnge existing text to uppercase
    //setText(newText); /// render the Lowerrcase value
    setoutput(newText);
    props.showAlert("Converted to lowercase", "Success");
  };

  const handelClickclear = () => {
    let newText = ""; // clear text
    //setText(newText); ///
    window.location.reload();
    setoutput(newText);
    props.showAlert("Clear text", "Success");
  };
  const handelClickbold = () => {
    let newText = document.getElementById("inputtxt");
    let inputArea= newText;
    let outputArea= document.getElementById("outputtxt");
    outputArea.innerHTML=inputArea.value;
    outputArea.style.fontWeight="bold";
    setoutput(outputArea.value);
    props.showAlert("Bold style is applied", "Success");
  };

  const handelClickitalic = () => {
    let newText = document.getElementById("inputtxt");
    let inputArea=newText;
    let outputArea=document.getElementById("outputtxt");
    outputArea.innerHTML= inputArea.value;
    outputArea.style.fontStyle="italic";
    setoutput(outputArea.value);
    props.showAlert("Italic style is applied", "Success");
  };

  const handelClickcopy = () => {
    let newText = document.getElementById("inputtxt");
    newText.select(); // copy to clipboard
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Text is copied on clipboard", "Success");
  };

  const removeExtraSpace = () => {
    let rtext = text.split("  ");
    setoutput(rtext.join(""));
  };


  const handleChange = (event) => {
    setText(event.target.value); /// user can change the value in textarea
  };

  const wordLength = (para) => {
    para = para.trim();
    if (para === "") {
      return 0;
    }
    var t = para.split(/\s+/);
    return t.length;
  };

  const timeRequired = (totalCount) => {
    let time = totalCount / 150;
    return parseFloat(time.toFixed(2));
  };
  // apply font families
  

  // --------------------------------------------------------------------------------------
  return (
    <div
      className={`container my-0 mx-10 text-${
        props.mode === "dark" ? "light" : "dark"
      }`}
    >
      <div>
        <div className="form-group">
          <label htmlFor="inputtxt">
            <h5 className="mainHeading">Type or copy paste your example</h5>
          </label>
          <div className="row">
            <div className="col-lg-6">
              <textarea
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "rgb(45, 50, 70)" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                className="form-control w-65 mb-4"
                value={text}
                id="inputtxt"
                onChange={handleChange}
                rows="7"
                placeholder="Enter your text here..."
              ></textarea>
            </div>
            <div className="col-lg-6">
              <textarea
                style={{
                  backgroundColor:
                    props.mode === "dark" ? "rgb(45, 50, 70)" : "white",
                  color: props.mode === "dark" ? "white" : "black",
                }}
                className="form-control w-65 mb-4"
                value={outputx}
                id="outputtxt"
               // onChange={handleChange}
                rows="7"
                placeholder="Your output text is here"
              ></textarea>
            </div>
          </div>

          <button
            disabled={text.length === 0}
            type="button"
            id="uppercase"
            className="btn btn-primary py-0 btn-sm"
            onClick={handelClick}
          >
            UPPERCASE
          </button>

          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-primary py-0 mx-2 btn-sm "
            onClick={handelClicklower}
          >
            lowercase
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-danger py-0 mx-1 btn-sm"
            onClick={handelClickclear}
          >
            Clear
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-secondary py-0 mx-1 btn-sm"
            onClick={handelClickbold}
          >
            <strong>Bold</strong>
          </button>

          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-secondary py-0 mx-2 btn-sm "
            onClick={handelClickitalic}
          >
            <i>Italic</i>
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-secondary py-0 mx-2 btn-sm"
            onClick={handelClickcopy}
          >
            Copy-text
          </button>
          <button
            disabled={text.length === 0}
            type="button"
            className="btn btn-secondary py-0 mx-2 btn-sm"
            onClick={removeExtraSpace}
          >
            Remove-space
          </button>

          
        </div>

        <h5>Text Summary</h5>
        <p>
          Total Words-{wordLength(text)}, Characters {text.length}
          <br />
          Time required {timeRequired(wordLength(text))} Minutes
        </p>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------------
