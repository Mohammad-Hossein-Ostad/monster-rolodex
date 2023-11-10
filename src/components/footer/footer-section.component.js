import './footer-section.styles.css';

const Footer = ({ currentDate, author, license }) => {
  return (
    <div className="footer-section">
    <footer>
    <p>&copy; {currentDate} {author}. {license}.</p>
    </footer>
    </div>
  );
}

export default Footer;
