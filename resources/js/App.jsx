
import './App.css';
/* import Header from './components/header/header';
import Section from './components/section/section';
import Link from './components/link/link'; */
import Navbar from './components/navbar/navbar';
import Contacts from './components/pages/contacts/contacts';
import CV from './components/pages/cv/cv';
import { Routes, Route } from "react-router-dom";
import Home from './components/pages/homepage/homepage';


function App() {
  return (
    <>
      <div className="App container-fluid">
        <div class="row justify-content-center">
          <div class="col-2 px-0">
            <Navbar />
          </div>
          <div class="col-10 px-5">

            <Routes>

              {/* home */}
              <Route path="/" element={<Home />} />

               {/* curriculum vitae */}
              <Route path="/cv" element={<CV />} />
             
              {/* contatti */}
              <Route path="/contact" element={<Contacts />} />

            </Routes>

          </div>
        </div>
      </div>
    </>
  );
}

                  


export default App;

    


                  

