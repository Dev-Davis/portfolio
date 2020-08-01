import React from 'react'
import { Container } from 'semantic-ui-react'

import './Technologies.css'

class Technologies extends React.Component {
    state = {
        display: false,
    }

    render() {
        return (
            <Container>
                <div id="two" className="fluid-container col-lg-10">
                    <div className="fluid-container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <h1 className="text-center titles"><button className="ui button tech-button">Technologies</button></h1>
                                <p className="nss-techs text-center">As a graduate of Nashville Software School, these are the technologies I've
                worked with.</p>
                                <p id="tech-display" className="my-technologies text-center">
                                    {/* <br /> */}
                                    <img className="tech-avi axios" src="https://i.ibb.co/W3ySZLc/axios.png" alt="axios" border="0" />
                                    <img className="tech-avi bootstrap" src="https://i.ibb.co/phRk2xt/bootstrap.png" alt="bootstrap" border="0" />
                                    <img className="tech-avi C#" src="https://i.ibb.co/89gSFJy/c-computer-programming-software-development-programmer-marklogic-coder.png" alt="C#" border="0" />
                                    <img className="tech-avi css" src="https://i.ibb.co/qpnnK1C/css.png" alt="css" border="0" />
                                    <img className="tech-avi entity-framework" src="https://i.ibb.co/Zh2b04Z/entity.png" alt="entity-framework" border="0" />
                                    <img className="tech-avi firebase" src="https://i.ibb.co/BBW9tr8/firebase.png" alt="firebase" border="0" />
                                    <img className="tech-avi github" src="https://i.ibb.co/C1JjPhG/github.png" alt="github" border="0" />
                                    <img className="tech-avi html" src="https://i.ibb.co/1v3LNhQ/html.png" alt="html" border="0" />
                                    <img className="tech-avi javascript" src="https://i.ibb.co/qdjQXKr/js.png" alt="javascript" border="0" />
                                    <img className="tech-avi" src="https://i.ibb.co/VxkXMGv/jquery.png" alt="jquery" border="0" />
                                    <img className="tech-avi jquery" src="https://i.ibb.co/WNrPnLG/logo-json.png" alt="logo-json" border="0" />
                                    <img className="tech-avi SQL" src="https://i.ibb.co/smK6z8V/Microsoft-SQL-Server-Logo.jpg" alt="SQL" border="0" />
                                    <img className="tech-avi net-core" src="https://i.ibb.co/VCLfPPG/net-core.png" alt="dotnet-core" border="0" />
                                    <img className="tech-avi react" src="https://i.ibb.co/pJMKJ1N/react.png" alt="react" border="0" />
                                    <img className="tech-avi reactstrap" src="https://i.ibb.co/m6gKQxR/reactstrap.png" alt="reactstrap" border="0" />
                                    <img className="tech-avi sass" src="https://i.ibb.co/4725s0d/sass.png" alt="sass" border="0" />
                                    <img className="tech-avi webpack" src="https://i.ibb.co/znw2HkZ/webpack.png" alt="webpack" border="0" />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        )
    }
}

export default Technologies