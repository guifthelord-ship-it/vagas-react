import { useParams } from "react-router";
import vagaList from "../data/vagas.js";
function VagaDetalhe() {
    const {id} = useParams();

    console.log("vagaList", vagaList)
    
    const vagasloop = vagaList.filter(item => {
        console.log("item", item)
        return item.id === Number(id) 
    });
    
    if (vagasloop.length===0){
        return (
            <div>
                <h1>Vaga co o ID {id} não encontrada</h1>
            </div>
        )
    }

    const vagaSelecionada =vagasloop[0];

    
    return(
        <div>
            <h1>Detalhes da Vaga {id}</h1>
            <h3>{vagaSelecionada.cargo}</h3>
            <h4>{vagaSelecionada.empresa}</h4>
            <p>{vagaSelecionada.area}</p>
            <p>{vagaSelecionada.modelo}</p>
            <p>R$ {vagaSelecionada.salario}</p>
        </div>
    )
}

export default VagaDetalhe;