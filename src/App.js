import Topbar from "./components/topbar/Topbar"
import About from "./components/about/About"
// import Portfolio from "./components/portfolio/Portfolio"
// import Contact from "./components/contact/Contact"
import "./app.scss"

function App() {
    return (
        <div className="app">
            <Topbar/>
            <div className="sections">
                <About/>
                {/* <Portfolio/> */}
                {/* <Contact/> */}
            </div>
        </div>
    );
}

export default App;
