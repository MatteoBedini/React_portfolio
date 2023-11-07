import './style.css'
import Header from '../../../components/header/header';
import Section from '../../../components/section/section';

const CV = () => {
    return (

        <>
            <div className="presentazione-cus px-4">
                <Header title="Mi presento" />
                <Section
                    classe="my-3"
                    title=""
                    content={
                        <div className="py-3">
                            <i className="fa-solid fa-computer pe-4 "></i><span>Sono un Junior full stack developer, con conoscenze sia nel frontend che nel backend grazie al
                                conseguimento del certificato professionale del corso Aulab Hackademy dove ho ottenuto una
                                buona padronanza nei vari linguaggi e frameworks relativi alla professione, tra questi PHP ,Laravel, JavaScript, HTML, CSS e altri.</span><br></br><br></br>
                            <i className="fa-solid fa-gamepad pe-4"></i><span>Ho sempre avuto a che fare con l'informatica fin da bambino, con l'hobby della programmazione grazie al quale ho
                                ottenuto esperienza anche con linguaggi come Python e C++, con cui nel tempo libero mi divertivo a sviluppare ogni genere di videogioco e applicazione.
                                Il mondo dei computer è sempre stato per me motivo di grande interesse.</span><br></br><br></br>
                            <i className="fa-solid fa-graduation-cap pe-4"></i><span>Seguendo le orme dei miei genitori ho iniziato e completato il percorso di studi come agronomo, del quale vado molto orgoglioso,
                                qui ho appreso molto in ambito scientifico e tecnico, ma anche in ambito personale crescendo come individuo determinato a raggiungere un obiettivo impegnativo.
                                Dopo alcune esperienze lavorative nell'ambito ho però deciso di concentrarmi nella mia vera passione che è l'informatica e la programmazione motivo per il quale ho deciso di intraprendere la scuola di Aulab.</span><br></br><br></br>

                            <i className="fa-solid fa-volleyball pe-4"></i><span>La sera mi trasformo in un allenatore di pallavolo dove ad oggi mi trovo impegnato in più di 20 ore settimanali.
                                A questo sport devo gran parte della mia formazione personale, dellà esperienza lavorativa, delle mie abilità di problem solving e di lavoro di gruppo.</span>
                        </div>
                    }
                />
                <div className="arrow bounce">
                    <a className="" href="#competenze"><i className="fa-solid fa-arrow-down fa-2x"></i></a>
                </div>
            </div>
            <div className="div-comp-form px-4">
                <Header title="Competenze" id="competenze" />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-3">
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


                                        </ul >
                                    </>
                                }
                            />
                        </div>
                        <div className="col-6">
                            <Section
                                title=""
                                content={
                                    <>
                                        <ul>

                                            <li> GitHub </li>
                                            <li> Bootstrap </li>
                                            <li> Python </li>
                                            <li> Pygame</li>
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
                        </div>
                    </div>
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
            </div >
            <div className="px-4">
                <Header title="Training experience" />
                <Section

                    title="Presto.it Aulab.it 2023"
                    content={<>
                        <span >Link Github: </span>
                        <a href="https://github.com/MatteoBedini/Presto.it" className="mt-3">https://github.com/MatteoBedini/Presto.it</a><br />
                        <p>Una simulazione di un sito di e-commerce sviluppato insieme ai miei compagni di Aulab.it.
                            All'interno si può trovare:
                            <ul>
                                <li>Registrazione e login utente tramite laravel fortify</li>
                                <li>Le 4 operazioni CRUD per la gestioni degli annunci degli utenti</li>
                                <li>La possibilità di un utente di diventare revisore di annunci tramite invio automatico di mail all'admin del sito</li>
                                <li>Il pannello del revisore dove sono stati implementati vari strumenti come il crop di immagini, l'aggiunta di watermark e l'AI di Google Vision per ottenere dei tag e labels automatici sulle immagini in base a cosa rappresentano.</li>
                                <li>Tanto altro</li>
                            </ul>
                        </p>


                    </>}
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
            </div>
        </>
    );
}

export default CV;