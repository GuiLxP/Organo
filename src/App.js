import { useState } from "react";
import Banner from "./componentes/Banner";
import Form from "./componentes/Form";

function App() {
	const [colaboradores, setColaboradores] = useState([])
	const aoNovoColaboradorAdicionado= (colaborador) => {
		console.log(colaborador)
	}

	return (
		<div className="App">
			<Banner />
			<Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador) }/>
		</div>
	);
}

export default App;
