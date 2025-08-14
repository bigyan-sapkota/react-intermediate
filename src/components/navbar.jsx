import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav className="flex justify-between px-10 py-2">
      {pages.map((item, index) => {
        return (
          <Link to={item.route} key={index} className="capitalize ">
            {item.text}
          </Link>
        );
      })}
    </nav>
  );
}

const pages = [
  { id: 1, text: "home", route: "/" },
  { id: 2, text: "about", route: "/about" },
  { id: 3, text: "bear counter", route: "/bear-counter" },
  { id: 4, text: "blogs", route: "/blogs" },
  { id: 5, text: "contact", route: "/contact" },
];
