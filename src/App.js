import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { searchNewsSuccess } from "./actions/actionCreators";

import Newsfeed from "./Newsfeed/Newsfeed";
function App() {
  const { items, loading, error, search } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchNewsSuccess());
  }, []);
  function btnMore(e) {
    e.preventDefault();
    // dispatch(moreNewsFiled());
  }
  return (
    <div className="App">
      <Container>
        <h1 className="text-center mt-2">News feed</h1>
        <Row className="justify-content-center mt-5">
          <Newsfeed />
        </Row>
        <Row className="justify-content-center mt-5">
          <button onClick={btnMore} type="button" className="btn btn-success">
            Еще
          </button>
        </Row>
      </Container>
    </div>
  );
}

export default App;
