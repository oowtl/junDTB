import { Link, useLocation, useParams } from "react-router-dom";

/**
 *
 * @param {string} tagName
 * @param {number} tagQuantity
 * @param {'list'} elemType
 * @param {string} selectPath
 * @returns
 */
export default function SideTag({
  tagName,
  tagQuantity,
  elemType,
  selectPath,
}) {
  const { tagName: paramTagName } = useParams();
  const { pathname } = useLocation();
  const isMatchedRoot = pathname === "/";

  const isMatchedPath =
    isMatchedRoot || paramTagName === "posts"
      ? tagName === "total"
      : paramTagName === tagName;

  return (
    <>
      {elemType === "list" && (
        <li className="mb-1">
          <Link
            to={selectPath ? selectPath : `posts/${tagName}`}
            className={`${isMatchedPath && "font-bold text-green-500"}`}>
            {tagName} ({tagQuantity})
          </Link>
        </li>
      )}
    </>
  );
}
