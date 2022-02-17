import react, { useState } from "react";
import photoFrame from "../QuotesFrame.png";
const Frame = <img src={photoFrame}></img>;
const InputQuotes = () => {
  // defining the state for each element
  let [show, showQuote] = useState(false);
  let [changed, setChange] = useState(0);

  // setting up our quotes array
  let quotesArray = ["Artur", "Ouail", "Hussan", "test"];

  // displaying or hiding the quotes using the state we created that targets the quotes
  const DisplayQuotes = () => showQuote(!show);

  // change the quotes and we update our DOM by using the state we created for it (changed state)
  const changeQuote = () => setChange(1);

  const myQuotes = quotesArray.map((quote, index) => (
    <div key={index}>
      {show ? (
        <div className="myDiv">
          <p id="quotes-place">{quote}</p>{" "}
          <button onClick={() => console.log(quote)}>Awesome Button</button>
        </div>
      ) : (
        ""
      )}
    </div>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <label>Favourite Quote</label>
        <br />
        <button id="quote-btn" onClick={DisplayQuotes}>
          {/* Using IF else logic to check of the state is showing or no and input the text depending on it  */}
          {show ? "Hide quotes" : "Display Quotes"}
        </button>

        {/* we are checking if the show state is true in order to show our change button */}
        {/* {show ? (
          <button id="quote-btn" onClick={changeQuote}>
            Change Quote
          </button>
        ) : (
          ""
        )} */}

        {myQuotes}
      </header>
    </div>
  );
};

export default InputQuotes;
