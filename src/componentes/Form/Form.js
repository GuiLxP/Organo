import "./Form.css";
import CampoTexto from "../CampoTexto";
import Button from "../Button";
import ListaSuspensa from "../ListaSuspensa";

export const Form = () => {
	const times = [
		"Programação",
		"Front-End",
		"Data Science",
		"DevOps",
		"Ux e Design",
		"Mobile",
		"Inovação e Gestão",
	];

	return (
		<section className="formulario">
			<form>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<CampoTexto label="Nome" placeholder="Digite o seu nome" />
				<CampoTexto label="Cargo" placeholder="Digite o seu cargo" />
				<CampoTexto
					label="Imagem"
					placeholder="Digite o endereço da imagem"
				/>
				<ListaSuspensa label="Time" item={times} />
				<Button />
			</form>
		</section>
	);
};
