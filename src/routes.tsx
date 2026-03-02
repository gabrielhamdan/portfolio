import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                <Route index element={<Navigate to="about" replace />} />
                <Route path="about" element={<About />} />
                <Route path="projects" element={<Projects />} />
            </Route>
        </Routes>
    );
}