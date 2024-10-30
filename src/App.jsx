import { useState } from 'react'
import NavBar from './components/Navbar/NavBar'
import Search  from './components/SearchDiv/Search'
import Jobs from './components/JobDiv/Jobs'
import Value from './components/ValueDiv/Value'
import Footer from './components/FooterDiv/Footer'
function App() {

  return (
    <>
      <div className="w-[85%] m-auto bg-white">
        <NavBar/>
        <Search/>
        <Jobs/>
        <Value/>
        <Footer/>
      </div>
    </>
  )
}

export default App
