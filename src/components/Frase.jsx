const Frase = ({personaje}) => {
    return (
        <section className="card my-4">
            <div className="card-body text-center">
                <h2>{personaje.character}</h2>
                <hr />
                <img src={personaje.image} alt={personaje.character} className="img-fluid"/>
                <div className="my-4 p-4 frase">
                    <p>{personaje.quote}</p>
                </div>
            </div>
        </section>
    );
};

export default Frase;