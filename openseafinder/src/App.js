import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/main/Main.jsx";
import Detail from "./pages/detail/Detail.jsx";
import Demo from "./pages/demo/Demo.jsx";
import "./App.css";

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/main" element={<Main />} />
                <Route exact path="/detail" element={<Detail />} />
            </Routes>
        </Router>
    );
}

export default App;
