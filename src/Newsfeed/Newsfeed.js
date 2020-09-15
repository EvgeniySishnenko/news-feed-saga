import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../Loader/Loader";
import Cards from "../Card/Card";
function Newsfeed() {
  const { items, loading, error } = useSelector((state) => state.news);
  return (
    <>{loading ? <Loader /> : items.map((item) => <Cards item={item} />)}</>
  );
}
export default Newsfeed;
