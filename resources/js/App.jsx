
import './App.css';
import Header from './components/header/header';
import Section1 from './components/section-1/section-1';
import Navbar from './components/navbar/navbar';
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>

      <div className="App container-fluid">
        <div class="row justify-content-center">
          <div class="col-2 px-0">
            <Navbar />
          </div>
          <div class="col-10">


            <Routes>

              <Route path="/" element=
                {
                  <>
                    <Header />
                    <Section1 />
                  </>
                } />

              <Route path="/testlink" element={<>  </>} />
              
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
