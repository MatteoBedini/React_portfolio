import './style.css'
import Header from '../../../components/header/header';
import Section from '../../../components/section/section';

const CV = () => {
    return (

        <>
            <div className="presentazione-cus">
            <Header title="Curriculm vitae" />
            <Section
                classe="my-3"
                title="Mi presento"
                content={
                    <p>
                        Sono un Junior full stack developer, con conoscenze sia nel frontend che nel backend grazie al
                        conseguimento del certificato professionale del corso Aulab Hackademy dove ho ottenuto una
                        buona padronanza nei vari linguaggi e frameworks relativi alla professione, tra questi PHP ,Laravel, JavaScript, HTML, CSS e altri.<br></br><br></br>
                        Ho sempre avuto a che fare con l'informatica fin da bambino, con l'hobby della programmazione grazie al quale ho
                        ottenuto esperienza anche con linguaggi come Python e C++, con cui nel tempo libero mi divertivo a sviluppare ogni genere di videogioco e applicazione.
                        Il mondo dei computer è sempre stato per me motivo di grande interesse.<br></br><br></br>
                        Seguendo le orme dei miei genitori ho iniziato e completato il percorso di studi come agronomo, del quale vado molto orgoglioso,
                        qui ho appreso molto in ambito scientifico e tecnico, ma anche in ambito personale crescendo come individuo determinato a raggiungere un obiettivo impegnativo.
                        Dopo alcune esperienze lavorative nell'ambito ho però deciso di concentrarmi nella mia vera passione che è l'informatica e la programmazione motivo per il quale ho deciso di intraprendere la scuola di Aulab.<br></br><br></br>

                        La sera mi trasformo in un giocatore e allenatore professionale di pallavolo dove ad oggi mi trovo impegnato in più di 20 ore settimanali.
                        A questo sport devo gran parte della mia formazione personale, dellà esperienza lavorativa, delle mie abilità di problem solving e di lavoro di gruppo.
                    </p>
                }
            />
            </div>

            <Header title="Formazione" />
            <Section
                title="Certificazione Aulab Full Stack Developer"
                content="Corso di formazione Aulab.it" />
            <Section
                title="Allenatore di secondo grado FIPAV"
                content="Corso ufficiale FIPAV" />
            <Section
                title="Laurea in Scienze Agrarie"
                content="Università di Pisa" />
            <Section
                title="Diploma scientifico sperimentale"
                content="Liceo scientifico Filippo Buonarroti" />

            <Header title="Competenze" />
            <Section
                title=""
                content={
                    <>
                        <ul>
                            <li>HTML </li>
                            <li>CSS </li>
                            <li>JavaScript</li>
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>React</li>
                            <li>Mysql</li>
                            <li>Laravel</li>
                            <li>Livewire</li>
                            <li> Git </li>
                            <li> GitHub </li>
                            <li> Bootstrap </li>
                            <li> Python </li>
                            <li> C++</li>
                            <li> Problem Solving</li>
                            <li> Scrum </li>
                            <li> Team work </li>
                            <li> Communication </li>
                            <li> Leadership</li>

                        </ul >
                    </>
                }
            />
            <Header title="Lingue" />
            <Section
                title="Italiano"
                content="Madrelingua"
            />
            <Section
                title="Inglese"
                content="Certificato inglese Cambridge B2"
            />
            <Section
                title="Francese/Spagnolo"
                content="Base"
            />
        </>
    );
}
export default CV;