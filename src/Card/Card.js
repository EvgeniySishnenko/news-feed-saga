import React from "react";
import { Card, Image } from "react-bootstrap";
import Heart from "../Heart/Heart";
import Chat from "../Chat/Chat";
import Reply from "../Reply/Reply";
import Eye from "../Eye/Eye";
function Cards() {
  return (
    <Card style={{ width: "30rem" }}>
      <Card.Body className="d-flex">
        <Image src="holder.js/171x180" roundedCircle />

        <Card.Text>
          <Card.Title>Card Title</Card.Title>
          Some quick
        </Card.Text>
      </Card.Body>

      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body className="d-flex justify-content-between">
        <Card.Text className="d-flex">
          <Heart />
          <Chat />
          <Reply />
        </Card.Text>

        <Eye />
      </Card.Body>
    </Card>
  );
}
export default Cards;
