
import { useParams, Link } from "react-router";
import { useState } from "react";
import vagaList from "../data/vagas.js";
import Header from "../components/Header";
import Footer from "../components/Footer";

function VagaDetalhe() {
    const {id} = useParams();

    const [candidatado, setCandidatado] = useState(false);

    console.log("vagaList", vagaList);

    const vagasloop = vagaList.filter(item => {
        console.log("item", item);
        return item.id === Number(id);
    });

    if (vagasloop.length === 0) {
        return (
            <div className="vaga-detalhe-pagina">
                <Header />

                <main className="vaga-detalhe-container">
                    <h1>Vaga com o ID {id} não encontrada</h1>

                    <Link to="/home">Voltar para vagas</Link>
                </main>

                <Footer />
            </div>
        );
    }

    const vagaSelecionada = vagasloop[0];

    function candidatar() {
        setCandidatado(true);
    }

    return (
        <div className="vaga-detalhe-pagina">
            <Header />

            <main className="vaga-detalhe-container">

                <Link to="/home" className="vaga-voltar">
                    ← Voltar para vagas
                </Link>

                <div className="vaga-detalhe-card">

                    <div className="vaga-detalhe-header">

                        <div className="vaga-detalhe-icone">
                            {vagaSelecionada.empresa.charAt(0).toUpperCase()}
                        </div>

                        <div>
                            <h1>{vagaSelecionada.cargo}</h1>
                            <h3>{vagaSelecionada.empresa}</h3>
                            <p>Publicada há {vagaSelecionada.publicada}</p>
                        </div>

                    </div>

                    <hr />

                    <h2>Informações da vaga</h2>

                    <div className="vaga-detalhe-info">

                        <div className="vaga-info-item">
                            <span>Área de atuação</span>
                            <strong>{vagaSelecionada.area}</strong>
                        </div>

                        <div className="vaga-info-item">
                            <span>Modelo de contratação</span>
                            <strong>{vagaSelecionada.modelo}</strong>
                        </div>

                        <div className="vaga-info-item">
                            <span>Salário</span>
                            <strong>{vagaSelecionada.salario}</strong>
                        </div>

                        <div className="vaga-info-item">
                            <span>Localização</span>
                             <strong>{vagaSelecionada.localizacao}</strong>
                        </div>

                    </div>

                    <hr />

                    <button
                        className="vaga-candidatar"
                        onClick={candidatar}
                        disabled={candidatado}
                    >
                        {candidatado
                            ? "Candidatura realizada"
                            : "Candidatar-se"}
                    </button>

                    {candidatado && (
                        <p className="vaga-confirmacao" role="status">
                            Candidatura realizada com sucesso!
                        </p>
                    )}

                </div>

            </main>

            <Footer />
        </div>
    );
}

export default VagaDetalhe;
