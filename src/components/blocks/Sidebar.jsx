// Components
import SideTag from "../atoms/SideTag";

export default function Sidebar({ postsData }) {
  const totalLength = postsData.length;
  const tagData = postsData
    .map((post) => post.tags)
    .reduce((tagObj, tags) => {
      tags.forEach((tag) => {
        if (tag in tagObj === false) {
          tagObj[tag] = 1;
        } else {
          tagObj[tag] = tagObj[tag] + 1;
        }
      });
      return tagObj;
    }, {});

  return (
    <aside className="absolute top-0 -left-40">
      <p className="text-lg mb-3 pb-2 border-b border-gray-400">태그 목록</p>
      <ul>
        <li className="mb-1">
          <SideTag
            tagName="total"
            tagQuantity={totalLength}
            elemType="list"
            selectPath="/posts"
          />
        </li>
        {Object.keys(tagData).map((tagName, idx) => (
          <li key={idx} className="mb-1">
            <SideTag
              tagName={tagName}
              tagQuantity={tagData[tagName]}
              elemType="list"
            />
          </li>
        ))}
      </ul>
    </aside>
  );
}
