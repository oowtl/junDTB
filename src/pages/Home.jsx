import Header from "../components/blocks/Header";
import Footer from "../components/blocks/Footer";
import PostBoxList from "../components/blocks/PostBoxList";

// dummy data
import dummy from "../articles/dummy.json";

export default function Home() {
  const { posts } = JSON.parse(JSON.stringify(dummy));
  return (
    <div>
      <Header />
      <main>
        <PostBoxList postsData={posts} />
      </main>
      <Footer />
    </div>
  );
}
