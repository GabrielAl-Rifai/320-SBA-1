import { Link } from "react-router-dom";

export default function Nav(props) {
  return (
    <div className="nav">
      <Link to="/">
        <div>Main</div>
      </Link>
      <Link to="/">
        <div>About</div>
      </Link>
      <Link to="/">
        <div>API</div>
      </Link>
      <Link to="/">
        <div>Meals</div>
      </Link>
    </div>
  );
}
