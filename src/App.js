import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Intro from './components/landing-page/Intro';
import Navbar from './components/Navigation/navBar';
import logo from './logo.svg';


function App() {
   
  return( 
  <div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path ="" element={<Intro />}></Route>
        

        
      </Routes>
    
    </BrowserRouter>
  </div>
  
  )
}

export default App;
