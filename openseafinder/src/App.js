import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main.jsx";
import Detail from "./pages/detail/Detail.jsx";
import Detail_SW from "./pages/detail/Detail_SW.jsx";
import Demo from "./pages/demo/Demo.jsx";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/main" element={<Main />} />
                <Route exact path="/detail" element={<Detail />} />
                <Route exact path="/detail_SW" element={<Detail_SW />} />
            </Routes>
        </Router>
    );
}

export default App;
