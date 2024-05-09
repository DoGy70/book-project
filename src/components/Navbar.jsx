function Navbar({ links }) {
  return (
    <div className="navbar-opt">
      <nav className="navbar">
        {links.map((link) => {
          const { href, name } = link;

          return (
            <a className="link" href={href} key={name}>
              {name}
            </a>
          );
        })}
      </nav>
    </div>
  );
}
export default Navbar;
