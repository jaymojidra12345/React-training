
import './App.css'
import SignUp from './firebase/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from './components/Notes';
import NoPageFound from './components/NoPageFound';
function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route index element={<SignUp />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='*' element={<NoPageFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
