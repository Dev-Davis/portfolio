import React from 'react'

import './About.css'

export default function About() {
    function press() {
        alert('clicked button')
    }
    return (
        <div className="about-container">
            <div id="one" className="fluid-container">
                <div className="row">
                    <div className="about-box">
                        <div className="col-lg-12 text-center">
                            <h1 className="text-center">Sean Davis</h1>
                            <img className="avi" src="https://i.ibb.co/fGp23sm/all-smiles.jpg" alt="all-smiles" border="0" />
                        </div>

                        <div className="col-lg-6">
                            <h1 className="about-title text-center" onClick={press}>About Me</h1>
                            <p className="bio text-center col-10 offset-1">Hello, I am Sean. I am an aspiring software developer
                            working at finding my niche in this industry. I really wanted to get into development because I realized
                            everything
                            electronic basically has to be programed, and you could create something that you have control over. My main
                            thing
                            when I first got into development was to make video games. I still want to, but there are so many
                            possibilities in this broad field of development. So, I'm trying to stay focused on one area for now.
                            Programming is a tedius task, but very rewarding once you figure it out. I love learning and working
                            problems
                            out. Unfamiliar territory can make you nervous, but you can't grow without healthy risks. Those are things I
                            love about development. The anxious/nervous feeling of learning new technologies and the feeling of success
                            when learning new technologies. Most of us will not start off good at the things we do, but practice makes
                            you good at what you do. You practice your interest and you become good at it. What makes a good developer
                            is practice. Writing code, breaking code (in a branch of course), and fixing the bugs. The final product
                            becomes your baby. You write it well and keep it updated. Put your heart into your code.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}