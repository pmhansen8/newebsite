import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Catpage} from "./cat_page";
import {Home} from "./home";


function App() {
    document.title = "Portfolio"
    return (
        <Router>
            <Routes>
                <Route path ="/" element={<Home />}/>
                <Route path ="/catpage" element={<Catpage />}/>
            </Routes>
        </Router>
    );
}

export default App;
