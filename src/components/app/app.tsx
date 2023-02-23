// import './App.scss';
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from '../../pages/main';


function App() {
    return (
        <HashRouter>
            <Routes>
                <Route index element={<Main />} />
            </Routes>
        </HashRouter>
    );
}

export default App;