import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Spinner } from "react-bootstrap";
import logo from "./assets/logosimpson.png";
import Frase from "./components/Frase";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});
  const [mostrarFrase, setMostrarFrase] = useState(false);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    setMostrarFrase(false);
    try {
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      setPersonaje(dato[0]);
      setMostrarFrase(true);
    } catch (error) {
      console.log("Hubo un error intente más tarde", error);
    }
  };

  const mostrarComponente = mostrarFrase ? (
    <Frase personaje={personaje}></Frase>
  ) : (
    <div className="my-5">
      <Spinner animation="grow" variant="warning" />
    </div>
  );

  return (
    <>
      <Container className="my-5 text-center">
        <img src={logo} alt="Logo de los simpsons" className="img-fluid" />
        {mostrarComponente}
        <Button className="btnFrase" onClick={consultarAPI}>
          Obtener Frase
        </Button>
      </Container>
    </>
  );
}

export default App;
