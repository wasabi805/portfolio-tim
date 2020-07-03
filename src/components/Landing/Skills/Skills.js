import React from "react";
import { sectionStyle } from "../../Common/Section/SectionContainer.styles";

const Skills = ()=>{
    return(
        <section id="skills-section" className={ sectionStyle } >
            <div style={{position: 'relative'}}>
                <h2 style={{
                    textAlign: 'right',
                }}> | Skills |</h2>

                <h4>Stuff</h4>

                <div style={{display: 'flex' , color: 'white'}}>
                    <div style={{padding: '0 2rem'}}>
                        Languages
                        <ul>
                            <li>JavaScript</li>
                            <li>Html</li>
                            <li>Css</li>
                        </ul>

                        <div>
                            FrameWorks
                            <ul>
                                <li>React</li>
                                <li>Handlebars</li>
                                <li>Jest </li>
                                <li>Enzyme</li>
                            </ul>
                        </div>

                        <div>
                            State Mgmt
                            <ul>
                                <li>
                                    Redux
                                </li>
                                <li>
                                    Thunk
                                </li>
                                <li>
                                    Saga
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div style={{padding: '0 2rem'}}>
                        Tech_N'_Tools
                        <ul>
                            <li>JQuery</li>
                            <li>API</li>
                            <li>JSON</li>
                            <li>OOP</li>
                        </ul>
                    </div>

                    <div style={{padding: '0 2rem'}}>
                        Style_N'_Things
                        <ul>
                            <li>Sass</li>
                            <li>Emotion</li>
                            <li>Styled Components</li>
                            <li>BootStrap</li>
                            <li>Material UI</li>
                        </ul>
                    </div>

                    <div>
                        Skills Blurb : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Skills