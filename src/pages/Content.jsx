import { MDXProvider } from "@mdx-js/react";

// COMPONENTS
import Header from "../components/blocks/Header";
import Footer from "../components/blocks/Footer";

// CONTENTS
import IIFEContent from "../articles/즉시실행함수를 사용할 때 주의해야할 점.mdx";

export default function Content() {
  console.log(1123);

  return (
    <div>
      <Header />
      <main className="prose">
        <MDXProvider>
          <IIFEContent />
        </MDXProvider>
      </main>
      <Footer />
    </div>
  );
}
