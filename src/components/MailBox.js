import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export const MailBox = () => {


  return (
    <div className="divForm">
        <h2>¡Contactame por mail!</h2>
      <Form action="https://formsubmit.co/federicoezequiel.e@hotmail.com" method="POST">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label><b>Email address</b></Form.Label>
          <Form.Control type="email" placeholder="name@example.com" name="fromEmail"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label><b>Subject</b></Form.Label>
          <Form.Control type="text" placeholder="I need you on my team urgently!" name="subject"/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label><b>Message</b></Form.Label>
          <Form.Control as="textarea" rows={3} name="messange"/>
        </Form.Group>
        <Button type="submit" variant="dark" className="proyectButton">
          Submit
        </Button>
      </Form>
    </div>
  );
};
