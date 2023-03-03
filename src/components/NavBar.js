import { Container } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const navBar = (Projects) => {
  return (
    <Container>
      <Navbar expand="sm" variant="dark" fixed="top" className="navBar">
       <a href="https://www.linkedin.com/in/federico-ezequiel-espi%C3%B1eyra-8a769417b/" target="_blank">
         <img  className="imgButton" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV6qyxxtDWMKPz5kvvEGfUKfwW6misupxwL5Jc0oITh-uilJSPerIb-7TKB0I4Pxyzdn0&usqp=CAU"/>
        </a>
        <a href="https://github.com/FedericoEspi" target="_blank">
         <img  className="imgButton" src="https://www.genexus.com/media/images/github-logo-2-imagen.jpg?timestamp=20190527124425"/>
        </a>
        <a href="https://www.instagram.com/fede_feezes/" target="_blank">
         <img  className="imgButton" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1280px-Instagram_logo.svg.png"/>
        </a>
      </Navbar>
    </Container>
  );
};

export default navBar;
