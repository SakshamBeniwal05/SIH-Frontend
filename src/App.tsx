import { Android } from "./components/ui/android"
import './App.css'
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Android>
        <Outlet/>
      </Android>
    </>
  )
}

export default App
