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
    <aside>
      <p className="text-lg">태그목록</p>
      <ul>
        <SideTag
          tagName="total"
          tagQuantity={totalLength}
          elemType="list"
          selectPath="/posts"
        />
        {Object.keys(tagData).map((tagName, idx) => (
          <SideTag
            tagName={tagName}
            tagQuantity={tagData[tagName]}
            elemType="list"
            key={idx}
          />
        ))}
      </ul>
    </aside>
  );
}
