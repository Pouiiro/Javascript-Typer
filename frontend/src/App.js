import react from "react"
import "./App.css"
import MyRoutes from "Components/routes/"
import AppProvider from "Provider/AppContext"
const App = () => {
  return (
    <AppProvider>
      <MyRoutes />
    </AppProvider>
  )
}

export default App
