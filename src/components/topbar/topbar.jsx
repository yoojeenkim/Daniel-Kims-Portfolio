import "./topbar.scss"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#about"> </a>
                </div>
                <h1>Daniel Kim's Portfolio</h1>
                <div className="right">
                    <a className="resume" target="_blank" rel="noreferrer" href="https://youtube.com">Resume</a>
                </div>
            </div>
        </div>
    )
}