import { useState } from "react";
import { Link } from "react-router-dom";
import InputMask from 'react-input-mask';

const Contato = () => {
    const [nome, setNome] = useState(null);
    const [email, setEmail] = useState(null);
    const [telefone, setTelefone] = useState(null);
    const [assunto, setAssunto] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    const [emailValido, setEmailValido] = useState(true);
    const [mensagemEnviada, setMensagemEnviada] = useState(false);

    const enviarFormulario = async (e) => {
        e.preventDefault();

        const emailRegex = /^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            setEmailValido(false);
            return false;
        }

        setEmailValido(true);

        const url = "/api/enviar-mensagem";

        const novaMensagem = {
            nome,
            email,
            telefone,
            assunto,
            mensagem,
        };

        const res = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(novaMensagem)
        });

        const data = await res.json();

        if (data.data.success) {
            setNome("");
            setEmail("");
            setTelefone("");
            setAssunto("");
            setMensagem("");
            setMensagemEnviada(true);
        }
    }

    return (
        <div className="container div-sobre">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                    <h3>Contato</h3>
                    {mensagemEnviada && <div className="mensagem-enviada">
                        <h3>Mensagem enviada com sucesso! Em breve entrarei em contato. Obrigado!</h3>
                    </div>}
                </div>
            </div>
            <div className="row">
                <form className="form-horizontal form-variavel form-head" onSubmit={enviarFormulario}>
                    <div className="form-group">
                        <div className="col-md-12">
                            <input
                                type="text"
                                className="input form-control"
                                placeholder="Digite seu Nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)} 
                                required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <input
                                type="text"
                                className="input form-control"
                                placeholder="Digite seu E-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                            {!emailValido && <span className="email-invalido">Email inválido</span>}
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <InputMask
                                mask="(99) 99999-9999"
                                className="input form-control"
                                placeholder="Digite seu Telefone"
                                value={telefone}
                                onChange={(e) => setTelefone(e.target.value)} />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <input
                                type="text"
                                className="input form-control"
                                placeholder="Assunto"
                                value={assunto}
                                onChange={(e) => setAssunto(e.target.value)}
                                required />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-12">
                            <textarea
                                name="mensagem"
                                className="input form-control"
                                placeholder="Mensagem"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                required >
                            </textarea>
                        </div>
                    </div>

                    <div className="div-voltar">
                        <Link to="/"><button type="button" className="btn waves-effect waves-light btn-voltar">Voltar</button></Link>
                        <button type="submit" className="btn waves-effect btn-success waves-light btn-voltar">Enviar Mensagem</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contato; 