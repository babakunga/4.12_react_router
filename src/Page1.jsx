import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];
  return (
    <div>
      <h1>Page1</h1>
      <Link to={{ pathname: "/page1/detaila", state: arr }}>DetailA</Link>
      <br />
      <Link to="/page1/detailb">DetailB</Link>
    </div>
  );
};
