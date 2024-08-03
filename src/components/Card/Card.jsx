import PreCode from "../PreCode/PreCode";

function Card() {
    return (
        <div className="card">
            <div className="card-body d-flex flex-column gap-3">
                <p className="d-flex gap-1">
                    <span className="badge text-bg-secondary">people</span>
                    <span className="badge text-bg-secondary">1</span>
                </p>
                <PreCode />
            </div>
        </div>
    )
}

export default Card;