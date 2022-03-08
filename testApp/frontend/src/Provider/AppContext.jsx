import { createContext, useEffect, useState } from "react"

export const AppContext = createContext()

const ProviderV = ({ children }) => {
  const ArrayWithQuotes = ["wael"]
  const functiondummy = () => console.log("test")
  const [quotes, setQuotes] = useState(["quotes1", "quote2"])
  const quoteAPI = () => {
    fetch(`https://goquotes-api.herokuapp.com/api/v1/random?count=${4}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.quotes.map(
          (imercileQuotes, index) => imercileQuotes.text
        )
        setQuotes(results)
      })
  }

  useEffect(() => {
    quoteAPI()
  })

  const providerValue = { ArrayWithQuotes, functiondummy, quotes }
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}
export default ProviderV
