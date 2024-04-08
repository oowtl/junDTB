import Header from "../components/blocks/Header";
import Footer from "../components/blocks/Footer";
import Sidebar from "../components/blocks/Sidebar";
import PostList from "../components/blocks/PostBoxList";

// dummy data
import dummy from "../articles/dummy.json";

export default function Posts() {
  const { posts } = JSON.parse(JSON.stringify(dummy));
  return (
    <div>
      <Header />
      <main>
        <Sidebar postsData={posts} />
        <PostList postsData={posts} />
      </main>
      <Footer />
    </div>
  );
}
