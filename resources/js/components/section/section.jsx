import './style.css';
const Section = ({title,content,classe,classetitle})=>{
    
    return (
        <section className="my-4">

            <h2 className={`mt-3 ${classetitle}`}>{title}</h2>
            <div className={classe}>{content}</div>
        </section>
    );
}

export default Section;

