import Logo from "../atoms/Logo";
import NaviButton from "../atoms/NaviButton";

export default function Header() {
  return (
    <nav className="flex justify-between">
      <Logo />
      <ul className="flex gap-5">
        <NaviButton path="/" name="POSTS" elemType="list" />
        <NaviButton path="/about" name="ABOUT" elemType="list" />
      </ul>
    </nav>
  );
}
