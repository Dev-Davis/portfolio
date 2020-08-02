import React from 'react'

import projectData from '../../helpers/data/projectsData'
import ProjectCard from '../ProjectCards/ProjectsCard';
import './Projects.css'

class Projects extends React.Component {
    state = {
        projects: [],
    }

    getProjects = () => {
        projectData.getProjects()
            .then(projects => this.setState({ projects }))
            .catch(err => console.error('could not get projects', err));
    }

    componentDidMount = () => {
        this.getProjects();
    }

    render() {
        const cards = this.state.projects.map(project => (
            <ProjectCard
                key={project.id}
                project={project}
            />
        ))
        return (
            <div className="Projects col-12">
                <h1>Projects</h1>
                <div>
                    <div className="col-3">
                        {cards}
                    </div>

                </div>
            </div>
        )
    }
}

export default Projects