import { Link, useLocation } from "react-router-dom";

/**
 *
 * @param {string} path url
 * @param {string} name destination name
 * @param {'list'} elemType element type
 *
 */
export default function NaviButton({ path, name, elemType }) {
  let { pathname: curLocation } = useLocation();

  const matchLocation = curLocation === path;

  return (
    <>
      {elemType === "list" && (
        <li
          className={`flex items-center border-y-8 border-transparent ${matchLocation && "border-b-black"}`}>
          <Link
            to={path}
            className={`text-2xl ${matchLocation && "font-bold"}`}>
            {name}
          </Link>
        </li>
      )}
    </>
  );
}
