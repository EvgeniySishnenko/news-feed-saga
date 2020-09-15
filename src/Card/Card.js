import React from "react";
import { Card, Image } from "react-bootstrap";
import moment from "moment";
import "moment/locale/ru";
import Heart from "../Heart/Heart";
import Chat from "../Chat/Chat";
import Reply from "../Reply/Reply";
import Eye from "../Eye/Eye";
function Cards({ item }) {
  console.log(item);
  return (
    <Card key={item.id} style={{ width: "30rem", margin: "20px auto 0" }}>
      <Card.Body className="d-flex">
        <Image src="http://placehold.it/50x50/b0b0b0" roundedCircle />

        <Card.Text className="ml-3">
          <div>Title</div>
          <div>{moment(item.date).format("d MM, h:mm")}</div>
        </Card.Text>
      </Card.Body>

      <Card.Img variant="top" src={item.attachments} />
      <Card.Body>
        <Card.Text>{item.text}</Card.Text>
        <Card.Body className="d-flex justify-content-between">
          <Card.Text className="d-flex">
            <Heart val={item.likes.count} />
            <Chat val={item.comments.count} />
            <Reply val={item.reposts.count} />
          </Card.Text>

          <Eye val={item.views.count} />
        </Card.Body>
      </Card.Body>
    </Card>
  );
}
export default Cards;
