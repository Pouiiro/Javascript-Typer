import { createContext, useEffect, useState } from "react"

 let defaultValue: any
export const AppContext = createContext(defaultValue)

interface forchildren{

    children: any

}

const ProviderV = ({ children }: forchildren) => {
  const ArrayWithQuotes = ["wael"]
  const functiondummy = () => console.log("test")
  const [quotes, setQuotes] = useState(["quotes1", "quote2"])
  const [favQ, setfavQ] = useState([])
  const quoteAPI = () => {
    fetch(`https://goquotes-api.herokuapp.com/api/v1/random?count=${4}`)
      .then((response) => response.json())
      .then((data) => {
        const results = data.quotes.map(
          (imercileQuotes: any , index: number) => imercileQuotes.text
        )
        setQuotes(results)
      })
  }

  useEffect(() => {
    quoteAPI()
  }, [])

  const providerValue = {
    ArrayWithQuotes,
    functiondummy,
    quotes,
    favQ,
    setfavQ,
  }
  return (
    <AppContext.Provider value={providerValue}>{children}</AppContext.Provider>
  )
}
export default ProviderV