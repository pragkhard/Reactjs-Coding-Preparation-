import { Routes, Route } from "react-router-dom";

function Reactrouting() {

    return (
        <>
            <h1>Reactrouting - </h1>
            <Routes>
                <Route path="/" element={<div>I am in Home page</div>}/>
                <Route path="/contact" element={<div>I am in Home page</div>}/>
                <Route path="/about" element={<div>I am in Home page</div>}/>
            </Routes>

        </>
    );
}

export default Reactrouting;
