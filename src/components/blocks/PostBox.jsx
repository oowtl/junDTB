import { useNavigate } from "react-router-dom";

// COMPONENTS
import Thumbnail from "../atoms/Thumbnail";
import Tag from "../atoms/HashTag";

/**
 *
 * @param {string} title
 * @param {string} content
 * @param {string} imageUrl
 * @param {string[]} tags
 * @param {Date} createdAt
 * @returns
 */
export default function Post({ title, content, imageUrl, tags, createdAt }) {
  const navigate = useNavigate();
  const handleClickPost = (e, navigate, title) => {
    e.stopPropagation();
    navigate(`/content/${title}`);
  };

  return (
    <article
      onClick={(e) => {
        handleClickPost(e, navigate, title);
      }}>
      <Thumbnail title={title} imageUrl={imageUrl} />
      <h2>{title}</h2>
      <p>{content}</p>

      <ul className="flex gap-3">
        {tags.map((tagName, idx) => {
          return <Tag key={idx} tagName={tagName} />;
        })}
      </ul>

      <p className="text-gray-400 text-sm">
        <time>{createdAt}</time>
      </p>
    </article>
  );
}
