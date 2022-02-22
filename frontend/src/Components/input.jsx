import react, { useState } from "react"
import photoFrame from "../QuotesFrame.png"
import SaveBtn from "./savedQuotes"

const Frame = <img src={photoFrame}></img>
let quotesDisplay = ""
const InputQuotes = () => {
  // defining the state for each element
  let [show, showQuote] = useState(false)
  let [changed, setChange] = useState(0)
  let [arrayAPI, setQuote] = useState([])
  let numberQ = 4
  // setting up our quotes array
  let quotesArray = ["Artur is great", "Ouail", "Hussan", "test"]

  const quoteAPI = () => {
    fetch(`https://goquotes-api.herokuapp.com/api/v1/random?count=${numberQ}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.quotes.map(
          (imercileQuotes, index) => imercileQuotes.text
        )
        // setQuote(arrayAPI.concat(results)); for adding new ones to it
        setQuote(results)
      })
  }
  // displaying or hiding the quotes using the state we created that targets the quotes
  const DisplayQuotes = () => showQuote(!show)

  // change the quotes and we update our DOM by using the state we created for it (changed state)
  const changeQuote = () => setChange(1)

  const myQuotes = arrayAPI.map((quote, index) => {
    console.log(quote)
    return (
      <div key={index}>
        {show ? (
          <div className='myDiv'>
            <p id='quotes-place'>{quote}</p>
            {/* <button onClick={() => console.log(quote)}>Awesome Button</button> */}
          </div>
        ) : (
          ""
        )}
      </div>
    )
  })

  return (
    <div className='App'>
      <header className='App-header'>
        <label>Favourite Quote</label>
        <br />
        <SaveBtn
          id='quote-btn'
          click={DisplayQuotes}
          btnName={quotesDisplay}
          link={"/"}>
          {/* Using IF else logic to check of the state is showing or no and input the text depending on it  */}
          {show
            ? (quotesDisplay = "Hide quotes")
            : (quotesDisplay = "Display Quotes")}
        </SaveBtn>

        <SaveBtn
          click={() => quoteAPI()}
          btnName='Get Quotes from API'
          link={"/"}></SaveBtn>
        <SaveBtn btnName='Favourite Quotes' link={"/FavouritesQuotes"} />
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
  )
}

export default InputQuotes
