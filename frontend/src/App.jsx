import './App.scss'
import { Outlet } from "react-router-dom";
import Footer from "./components/Layout/Footer.jsx";
import Header from "./components/Layout/Header.jsx";

function App() {

  return (
    <>
        <Header/>
        <main>
            <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default App
