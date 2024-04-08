import Post from "./PostBox";

export default function PostList({ postsData }) {
  return (
    <section className="max-w-screen-md">
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
    </section>
  );
}
