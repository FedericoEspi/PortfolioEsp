import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Proyectos from "../ProyectsOnGithub";

const Projects = ({title, img, text, button}) => {
  return Proyectos.map((proyecto) => {
    return (
      <div className="cardProject">
      <Card style={{ width: "18rem" }} key={proyecto.id} className="cardProyect">
        <Card.Img variant="top" src={proyecto.img} />
        <Card.Body className="proyectCardBody">
          <Card.Title>{proyecto.title}</Card.Title>
          <Card.Text>{proyecto.text}</Card.Text>
            <Button variant="dark" className="proyectButton" href={proyecto.button} target="_blank">
              GitHub
            </Button>
        </Card.Body>
      </Card>
  </div>
    );
  });
};

export default Projects;
