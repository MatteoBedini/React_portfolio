import './style.css';
const Section = ({title,content,classe})=>{
    
    return (
        <section className="my-4">

            <h2 className="mt-3">{title}</h2>
            <p className={classe}>{content}</p>
        </section>
    );
}

export default Section;

