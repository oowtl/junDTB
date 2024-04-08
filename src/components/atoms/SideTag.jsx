import { Link, useParams } from "react-router-dom";

/**
 *
 * @param {string} tagName
 * @param {number} tagQuantity
 * @param {selectPath}
 * @returns
 */
export default function SideTag({
  tagName,
  tagQuantity,
  elemType,
  selectPath,
}) {
  const { tagName: paramTagName } = useParams();

  const isMatched =
    paramTagName === "posts" ? tagName === "total" : paramTagName === tagName;

  return (
    <>
      {elemType === "list" && (
        <li>
          <Link
            to={selectPath ? selectPath : `posts/${tagName}`}
            className={`${isMatched && "font-bold text-green-500"}`}>
            {tagName} ({tagQuantity})
          </Link>
        </li>
      )}
    </>
  );
}
