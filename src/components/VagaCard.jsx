import { Link } from "react-router"
function VagaCard({
        id,
        empresa ,
        cargo,
        salario,
        modelo,
        area,
        publicada,
}) {
    return(
                <div className="card">
                    <div className="card__avatar">
                        {empresa.charAt(0).toUpperCase()}
                    </div>
                    <div className="card__text">
                        <p>{empresa}</p>
                        <h3 className="card__title">{cargo}</h3>
                        <span className="card__badge">{salario}</span>
                        <span className="card__badge">{modelo}</span>
                    </div>
                    <div className="card__actions">
                        <span>{area}</span>
                        <Link to={`/vaga/${id}`}>Candidatar-se</Link>
                    </div>
                </div>
    )
}

export default VagaCard;