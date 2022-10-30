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

	const aoSalvar = (evento) => {
		evento.preventDefault();
		console.log("Form foi submetido");
	};

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
				<CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
				<CampoTexto
					label="Imagem"
					placeholder="Digite o endereço da imagem"
				/>
				<ListaSuspensa obrigatorio={true} label="Time" item={times} />
				<Button>Criar card</Button>
			</form>
		</section>
	);
};
