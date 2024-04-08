import Header from "../components/blocks/Header";
import Footer from "../components/blocks/Footer";
import Sidebar from "../components/blocks/Sidebar";
import PostList from "../components/blocks/PostBoxList";

// dummy data
import dummy from "../articles/dummy.json";

export default function Home() {
  const { posts } = JSON.parse(JSON.stringify(dummy));
  return (
    <div>
      <Header />
      <main className="flex justify-between">
        <Sidebar postsData={posts} />
        <PostList postsData={posts} />
        <div></div>
      </main>
      <Footer />
    </div>
  );
}
