function Footer({ links }) {
  return (
    <footer className="footer" id="footer-section">
      <div className="footer-main">
        {links.map((link) => {
          const { href, name } = link;

          return (
            <a className="link" href={href} key={name}>
              {name}
            </a>
          );
        })}
      </div>
    </footer>
  );
}
export default Footer;
