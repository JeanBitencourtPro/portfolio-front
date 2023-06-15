const Header = () => {
    return (
        <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div className="display-t js-fullheight">
                            <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                <div className="profile-thumb"></div>
                                <a href="https://jeanbitencourt.dev/login"><h1><span>Jean Bitencourt</span></h1></a>
                                <h3><span>Programador de Sistemas</span></h3>
                                <p>
									<ul className="fh5co-social-icons">
										<li title="Linkedin"><a href="https://www.linkedin.com/in/jean-bitencourt-23bb10ba/" target="_blank"><i className="icon-linkedin2"></i></a></li>
                                        <li title="GitHub"><a href="https://github.com/jeanbitencourtpro" target="_blank"><i className="icon-github2"></i></a></li>
                                        <li title="Instagram"><a href="https://www.instagram.com/jeanbitencourtp/" target="_blank"><i className="icon-instagram2"></i></a></li>
                                        <li title="Facebook"><a href="https://www.facebook.com/jean.bitencourt.7" target="_blank"><i className="icon-facebook2"></i></a></li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 