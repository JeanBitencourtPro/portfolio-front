import { Link } from "react-router-dom";

const Contato = () => {
    return (
        <div className="container div-sobre">
            <div className="div-contato">
                <Link to="/"><button className='btn'>Voltar</button></Link>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <ul className="info">
                        <li><span className="first-block">Nome:</span><span className="second-block"></span></li>
                        <li><span className="first-block">Telefone:</span><span className="second-block"></span></li>
                        <li><span className="first-block">Email:</span><span className="second-block"></span></li>
                        <li><span className="first-block">Site:</span><a href="https://jeanbitencourt.dev" target="blank"><span className="second-block"></span></a></li>
                        <li><span className="first-block">Endereço:</span><span className="second-block"></span></li>
                    </ul>
                </div>
                <div className="col-md-8"></div>
            </div>
        </div>
    );
};

export default Contato; 