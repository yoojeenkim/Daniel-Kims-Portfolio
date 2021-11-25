import "./portfolio.scss"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio">
            <h1>My Projects</h1>
            <div className="container">
                <div className="item">
                    <img src="https://via.placeholder.com/140x100" alt="placeholder"/>
                    <h3>Pet App</h3>
                </div>
                <div className="item">
                    <img src="https://via.placeholder.com/140x100" alt="placeholder"/>
                    <h3>Peer Publishing App</h3>
                </div>
                <div className="item">
                    <img src="https://via.placeholder.com/140x100" alt="placeholder"/>
                    <h3>E-Commerce App</h3>
                </div>
                <div className="item">
                    <img src="https://via.placeholder.com/140x100" alt="placeholder"/>
                    <h3>App</h3>
                </div>
                <div className="item">
                    <img src="https://via.placeholder.com/140x100" alt="placeholder"/>
                    <h3>Another App</h3>
                </div>
                <div className="item">
                    <img src="https://via.placeholder.com/140x100" alt="placeholder"/>
                    <h3>Yet Another App</h3>
                </div>
            </div>
        </div>
    )
}
