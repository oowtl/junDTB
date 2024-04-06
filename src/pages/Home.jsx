import Header from "../components/blocks/Header";
import Footer from "../components/blocks/Footer";
import PostList from "../components/blocks/PostList";

// dummy data
import dummy from "../articles/dummy.json";

export default function Home() {
  const { posts } = JSON.parse(JSON.stringify(dummy));
  return (
    <div>
      <Header />
      <main>
        <PostList postsData={posts} />
      </main>
      <Footer />
    </div>
  );
}
