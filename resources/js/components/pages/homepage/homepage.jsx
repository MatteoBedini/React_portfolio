import './style.css'
import Header from '../../../components/header/header';
import Link from '../../../components/link/link';
import Section from '../../../components/section/section';
const Home = () => {
    return (
        <>
            <Header title="Matteo Bedini" />
            <Section title="Junior Full Stack Developer | Allenatore Fipav di secondo grado" />
            <div className="d-flex justify-content-center align-items-center social-media-cus">

                <Link
                    classe="d-flex justify-content-around align-items-center text-decoration-none"
                    link="https://www.linkedin.com/in/matteo-bedini-31aa27196/"
                    content={
                        <>
                            <i class="fa-brands fa-linkedin social-cus mx-5"></i>



                        </>
                    }
                />
                <Link
                    classe="d-flex justify-content-around align-items-center text-decoration-none"
                    link="https://github.com/MatteoBedini"
                    content={
                        <>
                            <i class="fa-brands fa-github social-cus mx-5"></i>



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