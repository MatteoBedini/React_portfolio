import './style.css'
import Header from '../../../components/header/header';
import Link from '../../../components/link/link';
import Section from '../../../components/section/section';
const Contacts = () => {
    return (
        <>
            <Header title="Contatti" />
            <Section

                title="Telefono"
                content="+39 3926002542" />
            <Section
                title="Email"
                content="matteo.bedini.94@gmail.com" />

            <Link
                title="Linkedin"
                classe="clickable"
                content="https://www.linkedin.com/in/matteo-bedini-9b3a1b1b7/"
                link="https://www.linkedin.com/in/matteo-bedini-9b3a1b1b7/" />

            <div className="spacecus"></div>


        </>
    );
}

export default Contacts;