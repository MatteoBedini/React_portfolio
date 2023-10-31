import './style.css'

import Header from '../../../components/header/header';
import Link from '../../../components/link/link';
import Section from '../../../components/section/section';
import changeColorOnHover from './cus';
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        changeColorOnHover();
      }, []);
    
    

    return (
        <>
            <Header title="Matteo Bedini" classe="name-title" />
            <Section title="Junior Full Stack Developer | Allenatore Fipav di secondo grado" />
            <div className="d-flex justify-content-center align-items-center social-media-cus">

                <Link
                    
                    classe="d-flex justify-content-around align-items-center text-decoration-none"
                    link="https://www.linkedin.com/in/matteo-bedini-31aa27196/"
                    content={
                        <>
                            <span className="icon-label">Linkedin</span>
                            <i className={`fa-brands fa-linkedin social-cus mx-5 icon fa-3x `}></i>



                        </>
                    }
                />
                <Link
                    
                    classe="d-flex justify-content-around align-items-center text-decoration-none"
                    link="https://github.com/MatteoBedini"
                    content={
                        <>
                            <span className="icon-label">Github</span>
                            <i className={`fa-brands fa-github social-cus mx-5 icon fa-3x `}></i>



                        </>
                    }
                />
            </div>
            <Section
                classe="my-5 d-flex justify-content-center align-items-center"
                content="Il sito è stato realizzando interamente in React per quanto riguarda la parte di frontend e laravel per la parte di backend" />


        </>
    );
}

export default Home;