import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						© {(new Date().getFullYear())} iamaditya.dev.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
