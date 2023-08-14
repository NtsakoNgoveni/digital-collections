
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h2>Contact Us</h2>
                    <p>Email: admin@digitalcallactions.com</p>
                    <p>Phone: +27 00 000 000</p>
                </div>
                <div className="footer-section">
                    <h2>Follow Us</h2>
                    <div className="social-icons">
                        <a href="#" className="social-icon">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="social-icon">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Digital CallActions. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
