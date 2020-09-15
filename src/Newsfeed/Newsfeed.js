import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Cards from "../Card/Card";
function Newsfeed() {
  const { items, loading, error } = useSelector((state) => state.news);
  console.log(items);
  return <Cards />;
}
export default Newsfeed;
