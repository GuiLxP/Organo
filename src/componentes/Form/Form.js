import "./Form.css";
import CampoTexto from "../CampoTexto";
import Button from "../Button";
import ListaSuspensa from "../ListaSuspensa";
import { useState } from "react";

export const Form = (props) => {
	const times = [
		"Programação",
		"Front-End",
		"Data Science",
		"DevOps",
		"Ux e Design",
		"Mobile",
		"Inovação e Gestão",
	];

	const [nome, setNome] = useState("");
	const [cargo, setCargo] = useState("");
	const [imagem, setImagem] = useState("");
	const [time, setTime] = useState("");

	const aoSalvar = (evento) => {
		evento.preventDefault();
		props.aoColaboradorCadastrado({
			nome,
			cargo,
			imagem,
			time,
		});
	};

	return (
		<section className="formulario">
			<form onSubmit={aoSalvar}>
				<h2>Preencha os dados para criar o card do colaborador</h2>
				<CampoTexto
					obrigatorio={true}
					label="Nome"
					placeholder="Digite o seu nome"
					valor={nome}
					aoAlterar={(valor) => setNome(valor)}
				/>
				<CampoTexto
					obrigatorio={true}
					label="Cargo"
					placeholder="Digite o seu cargo"
					valor={cargo}
					aoAlterar={(valor) => setCargo(valor)}
				/>
				<CampoTexto
					label="Imagem"
					placeholder="Digite o endereço da imagem"
					valor={imagem}
					aoAlterar={(valor) => setImagem(valor)}
				/>
				<ListaSuspensa
					obrigatorio={true}
					label="Time"
					itens={times}
					valor={time}
					aoAlterar={(valor) => setTime(valor)}
				/>
				<Button>Criar card</Button>
			</form>
		</section>
	);
};
