import './style.css'
import Header from '../../../components/header/header';

import Section from '../../../components/section/section';
const Contacts = () => {
    return (
        <>
            <div className="px-4">
                <Header title="Progetti" />
                <Section
                    classe="expand px-5"
                    title="Presto.it"
                    classetitle="text-red display-4 pt-5 px-5"
                    content={
                        <>


                            <img scr="" alt="Presto.it" className="presto-image img-fluid" /><br></br>
                            <div>
                                <span>Link GitHub: </span>
                                <a href="https://github.com/MatteoBedini/Presto.it" className='clickable'>https://github.com/MatteoBedini/Presto.it</a>
                            </div>
                        </>}
                />


                <div className="spacecus"></div>
            </div>


        </>
    );
}

export default Contacts;