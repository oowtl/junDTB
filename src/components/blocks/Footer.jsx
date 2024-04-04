import { FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="mt-8">
      <div className="flex justify-center">
        <a href="https://github.com/oowtl">
          <FaGithub className="min-w-7 min-h-7" />
        </a>
      </div>
      <p className="text-center">Jun Develop &middot; 2024</p>
    </footer>
  );
}
