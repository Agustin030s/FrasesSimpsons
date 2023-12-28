import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import logo from "./assets/logosimpson.png";
import Frase from "./components/Frase";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [personaje, setPersonaje] = useState({});

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes"
      );
      const dato = await respuesta.json();
      console.log(dato);
      setPersonaje(dato[0]);
    } catch (error) {
      console.log('Hubo un error intente más tarde', error);
    }
  };

  return (
    <>
      <Container className="my-5 text-center">
        <img src={logo} alt="Logo de los simpsons" className="img-fluid" />
        <Frase personaje={personaje}></Frase>
        <Button className="btnFrase">Obtener Frase</Button>
      </Container>
    </>
  );
}

export default App;
