import Link from "next/link";
import style from "./navbar.module.css";
import AvatarUsers from "../avatar/avatar";

export default function Navbar() {
  return (
    <div className={style.navbar_container}>
      <div className={style.navbar_logo}>
        <Link href="/" className={style.navbar_link}>
          Kanban Board
        </Link>
      </div>
      <div className={style.navbar_link_container}>
        <Link href="/about" className={style.navbar_link}>
          About
        </Link>
        <Link href="/blog" className={style.navbar_link}>
          Blog
        </Link>
      </div>
      <AvatarUsers />
    </div>
  );
}
