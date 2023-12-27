import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container } from "react-bootstrap";
import logo from "./assets/logosimpson.png";
import Frase from "./components/Frase";
import './App.css'

function App() {
  return (
    <>
      <Container className="my-5">
        <div className="text-center">
          <img src={logo} alt="Logo de los simpsons" className="img-fluid" />
        </div>
        <Frase></Frase>
        <div className="text-center">
        <Button className="btnFrase">Obtener Frase</Button>
        </div>
      </Container>
    </>
  );
}

export default App;
