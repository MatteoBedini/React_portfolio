const Section = ({title,content})=>{
    
    return (
        <section>

            <h2 className="mt-3">{title}</h2>
            <p>{content}</p>
        </section>
    );
}

export default Section;