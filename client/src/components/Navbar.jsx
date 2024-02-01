import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-color2 flex justify-between px-20 py-4">
      <Link to="/" className="text-white font-bold">
        <h1>React MySQL</h1>
      </Link>

      <ul className="flex gap-x-1">
        <li>
          <Link to="/" className="bg-color3 px-2 py-1 rounded-sm">Home</Link>
        </li>
        <li>
          <Link to="/new" className="bg-color3 px-2 py-1 rounded-sm">Create Task</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
