import Post from "./PostBox";
import Sidebar from "./Sidebar";

export default function PostList({ postsData }) {
  return (
    <section className="max-w-screen-md mx-auto relative">
      {postsData.map((post, idx) => {
        return (
          <Post
            key={idx}
            title={post.title}
            content={post.content}
            imageUrl={post.imageUrl}
            tags={post.tags}
            createdAt={post.createdAt}
          />
        );
      })}

      <Sidebar postsData={postsData} />
    </section>
  );
}
