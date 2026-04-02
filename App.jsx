import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx"
import Page from "./404-pg.jsx"
import Home from "./Home.jsx"
import Contact from './Contact.jsx';



function App() {
  return ( 
  <BrowserRouter>
<Routes>
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
      <Route path='Contact' element={<Contact />} />
    <Route path='*' element={<Page />} />
  </Route>
  </Routes>
</BrowserRouter>
   );
}

export default App;