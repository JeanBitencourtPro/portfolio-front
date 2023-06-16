const Footer = () => {
    const anoAtual = new Date().getFullYear();

    return (
        <footer>
			<div className="container div-footer">
				<div className="row">
					<div className="col-md-12">
						<p>★ { anoAtual } - Desenvolvido por Jean Bitencourt</p>
					</div>
				</div>
			</div>
		</footer>
    );
}

export default Footer;