
import './App.css';
import Header from './components/header/header';
import Section from './components/section/section';
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
              #home
              <Route path="/" element=
                {
                  <>
                    <Header title="React portfolio" />
                    <Section
                      title="Presentazione sito"
                      content="Il sito è stato realizzando interamente in React per quanto riguarda la parte di frontend e laravel per la parte di backend" />
                  </>
                } />

              <Route path="/testlink" element={<>  </>} />
              
              #curriculum vitae
              <Route path="/cv" element={
              <>
                <Header title="Curriculm vitae" />
                <Section
                  title="Chi sono"
                  content="Sono un Junior full stack developer, con conoscenze sia nel frontend che nel backend grazie al
                  conseguimento del certificato professionale da parte del corso Aulab.it dove ho ottenuto una
                  buona padronanza nei vari linguaggi e frameworks relativi alla professione.Ho sempre avuto a
                  che fare con l'informatica fin da bambino, con l'hobby della programmazione grazie ai quali ho
                  ottenuto esperienza anche con linguaggi come Python e C++,Il mondo dei computer è sempre
                  stata la mia passione. 
                  La sera mi trasformo in un giocatore e allenatore professionale di pallavolo
                  alla quale devo gran parte della mia esperienza relativa alla disciplina, al lavoro di squadra di
                  gruppo." /> 

                <Header title="Formazione" />
                <Section
                  title="Certificazione Aulab Full Stack Developer"
                  content="Corso di formazione Aulab.it" />
                <Section
                  title="Laurea in Scienze Agrarie"
                  content="Università di Pisa" />
                <Section
                  title="Diploma scientifico sperimentale"
                  content="Liceo scientifico Filippo Buonarroti" />

                <Header title="Competenze" />
                <Section
                  title=""
                  content="Html, Css, JavaScript, React, Mysql, Laravel, Git, GitHub, Bootstrap, Python, C++, Problem Solving, Scrum, Team work, Communication, Leadership" />
              </>
                } />

            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
