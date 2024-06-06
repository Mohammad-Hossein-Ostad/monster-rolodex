import "./footer-section.styles.css";

type FooterProps = {
  author: string;
  license: string;
  currentDate: number;
}

  const Footer = ({ currentDate, author, license }: FooterProps) => {
    return (
      <div className="footer-section">
        <footer>
          <p>
            &copy; {currentDate} {author}. {license}.
          </p>
        </footer>
      </div>
    );
  };

export default Footer;
