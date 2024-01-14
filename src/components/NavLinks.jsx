import links from "../utils/links";
import { HashLink } from "react-router-hash-link";

const NavLinks = () => {
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path } = link;
        return (
          <HashLink smooth to={path} key={text} className="nav-link">
            {text}
          </HashLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
