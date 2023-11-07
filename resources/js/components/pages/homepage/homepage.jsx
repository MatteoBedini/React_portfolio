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
            
            <header  className="name-title mx-4"><span id="m">M</span>atteo Bedini</header>
            <Section title="Junior Full Stack Web Developer" classetitle="text-center text-red" />
            <div className="container-fluid ">
                <div className="row social-media-cus align-items-center justify-content-center">
                    <div className="col-3">

                        <Link

                            classe="d-flex justify-content-around align-items-center text-decoration-none"
                            link="https://www.linkedin.com/in/matteo-bedini-31aa27196/"
                            content={
                                <>
                                    <div>
                                        <span id="icon-label-linkedin">Linkedin</span>
                                        <i className={`fa-brands fa-linkedin social-cus mx-5 fa-3x `} id="icon-linkedin"></i>

                                    </div>

                                </>
                            }
                        />
                    </div>
                    <div className="col-3">
                        <Link
                            classe="d-flex justify-content-around align-items-center text-decoration-none"
                            link="https://github.com/MatteoBedini"
                            content={
                                <>
                                    <div>

                                        <span id="icon-label-github">Github</span>
                                        <i className={`fa-brands fa-github social-cus mx-5  fa-3x `} id="icon-github"></i>

                                    </div>


                                </>
                            }
                        />
                    </div>
                    <div className="col-3">
                        <Link
                            classe="d-flex justify-content-around align-items-center text-decoration-none"
                            link="https://github.com/MatteoBedini"
                            content={
                                <>
                                    <div>

                                        <span id="icon-label-facebook">Facebook</span>
                                        <i className={`fa-brands fa-facebook social-cus mx-5  fa-3x `} id="icon-facebook"></i>

                                    </div>


                                </>
                            }
                        />
                    </div>
                </div>
            </div>

            <Section
                classe="d-flex justify-content-center align-items-center footer-homepage"
                content="Il sito è stato realizzando interamente in React e Laravel" />


        </>
    );
}

export default Home;