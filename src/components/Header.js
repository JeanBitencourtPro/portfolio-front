
import { CurriculoFetch } from "../hooks/curriculoFetch";

const Header = () => {
    const { curriculo, loading } = CurriculoFetch();
    let dadosCarregados = false;

    if (curriculo !== null) {
        dadosCarregados = true;
    }

    return (
        <header id="fh5co-header" className="fh5co-cover js-fullheight" role="banner" data-stellar-background-ratio="0.5">
            <div className="overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center">
                        <div className="display-t js-fullheight">
                            <div className="display-tc js-fullheight animate-box" data-animate-effect="fadeIn">
                                { loading && <h1><span>Carregando...</span></h1>}
                                { dadosCarregados &&
                                <div>
                                    <div className="profile-thumb"></div>
                                    <a href="https://jeanbitencourt.dev/login"><h1><span>{ curriculo.nome }</span></h1></a>
                                    <h3><span>{ curriculo.cargo }</span></h3>
                                    <ul className="fh5co-social-icons">
                                        <li title="Linkedin"><a href={ curriculo.linkedin } target="blank"><i className="icon-linkedin2"></i></a></li>
                                        <li title="GitHub"><a href={ curriculo.git } target="blank"><i className="icon-github2"></i></a></li>
                                        <li title="Instagram"><a href={ curriculo.insta } target="blank"><i className="icon-instagram2"></i></a></li>
                                        <li title="Facebook"><a href={ curriculo.face } target="blank"><i className="icon-facebook2"></i></a></li>
                                    </ul>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header; 