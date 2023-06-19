import { CurriculoFetch } from "../hooks/curriculoFetch";
import { Link } from "react-router-dom";

const Sobre = () => {
    const { curriculo, erro } = CurriculoFetch();
    let dadosCarregados = false;

    if (curriculo !== null && erro === null) {
        dadosCarregados = true;
    }

    return (
        <div className="container div-sobre">
            { dadosCarregados && <div className="row">
                <div className="col-md-4">
                    <ul className="info">
                        <li><span className="first-block">Nome:</span><span className="second-block">{ curriculo.nome }</span></li>
                        <li><span className="first-block">Telefone:</span><span className="second-block" dangerouslySetInnerHTML={{ __html: curriculo.celular }} /></li>
                        <li><span className="first-block">Email:</span><span className="second-block">{ curriculo.email }</span></li>
                        <li><span className="first-block">Site:</span><span className="second-block">{ curriculo.site }</span></li>
                        <li><span className="first-block">Endereço:</span><span className="second-block">{ curriculo.endereco }</span></li>
                    </ul>
                </div>
                <div className="col-md-8" dangerouslySetInnerHTML={{ __html: curriculo.descricao }} />
            </div>}
            <div className="div-contato">
                <Link to="/contato"><button className='btn'>Entrar em Contato</button></Link>
            </div>
        </div>
    );
};

export default Sobre; 