function VagaCard({
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
                        V
                    </div>
                    <div className="card__text">
                        <p>{empresa}</p>
                        <h3 className="card__title">{cargo}</h3>
                        <span className="card__badge">{salario}</span>
                        <span className="card__badge">{modelo}</span>
                    </div>
                    <div className="card__actions">
                        <span>{area}</span>
                        <a href="">{publicada}</a>
                    </div>
                </div>
    )
}

export default VagaCard