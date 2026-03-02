import { useEffect, useState } from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import "./Projects.css";
import github from "../../services/github";

interface RepoData {
    name: string,
    html_url: string,
    description: string,
    topics: string[]
}

export default function Projects() {
    const [projects, setProjects] = useState<RepoData[] | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await github<RepoData[]>("/users/gabrielhamdan/repos");

                setProjects(response.data?.filter(repo => repo.topics.includes("portfolio")));
            } catch (e) {
                console.error(e);
            }
        }

        fetchProjects();
    }, []);

    return (
        <div className="projects-grid">
            {
                projects?.map(project => (
                    <ProjectCard link={project.html_url} stack={project.topics.filter(s => s !== "portfolio")} title={project.name} description={project.description} />
                ))
            }
        </div>
    );
}