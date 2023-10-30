import './style.css';
const Link = ({title,content,classe,link})=>{
    
    return (
        <section>

            <h2 className="mt-3">{title}</h2>
            <a className={classe} href={link}>{content}</a>
        </section>
    );
}

export default Link;