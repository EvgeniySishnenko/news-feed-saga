import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

import Newsfeed from "./Newsfeed/Newsfeed";
function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="text-center mt-2">News feed</h1>
        <Row className="justify-content-center mt-5">
          <Newsfeed />
        </Row>
      </Container>
    </div>
  );
}

export default App;
