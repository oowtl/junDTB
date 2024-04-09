import { Link, useLocation } from "react-router-dom";

/**
 *
 * @param {string} path url
 * @param {string} name destination name
 *
 */
export default function NaviButton({ path, name }) {
  const { pathname: curLocation } = useLocation();
  const isMatched = curLocation.includes(path);

  return (
    <li
      className={`flex items-center border-y-8 border-transparent ${isMatched && "border-b-black"}`}>
      <Link to={path} className={`text-2xl ${isMatched && "font-bold"}`}>
        {name}
      </Link>
    </li>
  );
}
