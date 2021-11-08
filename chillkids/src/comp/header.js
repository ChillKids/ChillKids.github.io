import React from 'react';

function Header() {
  return (
    <header className="header">

			<div className="logo">
				<a href="./">
					<img className="logo-img" src="images/logo.png" alt="" />
					<span className="logo-lnk">Jack <br />Leung</span>
				</a>
			</div>

			<a href="./" className="menu-btn"><span></span></a>
				
			<a href="./" className="btn download-cv-btn">
				<span className="animated-button"><span>Download CV</span></span>
				<i className="icon fas fa-download"></i>
			</a>

			<div className="header-sidebar">

				<div className="top-menu">
					<div className="top-menu-nav">	
						<div className="menu-topmenu-container">
							<ul className="menu">
								<li className="menu-item current-menu-item">
									<a href="#section-started">
										<span className="animated-button"><span>Home</span></span>
									</a>
									
								</li>
								<li className="menu-item">
									<a href="#section-about">
										<span className="animated-button"><span>About</span></span>
									</a>
								</li>
								<li className="menu-item">
									<a href="#section-experience">
										<span className="animated-button"><span>Resume</span></span>
									</a>
								</li>
								<li className="menu-item">
									<a href="#section-portfolio">
										<span className="animated-button"><span>Portfolio</span></span>
									</a>
								</li>
								<li className="menu-item">
									<a href="#section-contacts">
										<span className="animated-button"><span>Contact</span></span>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

			</div>

		</header>
  );
}

export default Header;