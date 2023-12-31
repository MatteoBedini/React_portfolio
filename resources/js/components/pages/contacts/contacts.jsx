import './style.css'
import Header from '../../../components/header/header';
import Link from '../../../components/link/link';
import Section from '../../../components/section/section';
const Contacts = () => {
    return (
        <> <div className="px-4">
            <Header title="Contatti" />
            <Section
                classe="expand"
                title="Telefono"
                content={<a href="tel:+393926002542" className='clickable'>+39 3926002542</a>} />
            <Section
                classe="expand"
                title="Email"
                content={<a href="mailto:matteo.bedini.94@gmail.com" className='clickable'>matteo.bedini.94@gmail.com</a>} />

            <Link
                title="Linkedin"
                classe="clickable expand"
                content="https://www.linkedin.com/in/matteo-bedini-31aa27196/"
                link="https://www.linkedin.com/in/matteo-bedini-31aa27196/" />

            <div className="spacecus"></div>
            </div>


        </>
    );
}

export default Contacts;