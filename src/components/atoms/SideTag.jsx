import { Link, useParams, useMatch } from "react-router-dom";

/**
 *
 * @param {string} tagName
 * @param {number} tagQuantity
 * @param {string} selectPath
 * @returns
 */
export default function SideTag({ tagName, tagQuantity, selectPath }) {
  const { tagName: paramTagName } = useParams();

  const matchPostsTagName = useMatch("/posts/:tagName");
  const matchTotalByTagName = tagName === "total";
  const matchParamTagNameByTagName = tagName === paramTagName;

  // root, /post, etc => total
  // post/:tagName => 일치할 때 Active
  const isActive = matchPostsTagName
    ? matchParamTagNameByTagName
    : matchTotalByTagName;

  return (
    <Link
      to={selectPath ? selectPath : `/posts/${tagName}`}
      className={`${isActive && "font-bold text-green-500"}`}>
      {tagName} ({tagQuantity})
    </Link>
  );
}
