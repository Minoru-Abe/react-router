import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

export const Page1 = () => {
    return (
        <div>
            <h1>Page1</h1>
            <Link to="/page1/detailA">detailA</Link>
            <br />
            <Link to="/page1/detailB">detailB</Link>
            <br />
        </div>
    )
};