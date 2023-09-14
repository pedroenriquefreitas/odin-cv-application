import '../styles/CV.css';

function CV({name, email, phone, school, title, year}){
    return(
        <div className="cv">
        <p className="name">{name}</p>
        <section className="contact">
            <p>{email}</p>
            <p>{phone}</p>
        </section>
        <hr></hr>
        <section className="education">
            <p>{school}</p>
            <p>{title}</p>
            <p>{year}</p>
        </section>
        </div>
    );
}
export default CV;