import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
    return(
        <div>
            <Hero title={props.title} />
            <Content>
                <p>Hello, my name is Hugo Lavergne, I'm a full stack developer with experience in <strong>Angular, Laravel, Symfony, Vue and ReactJs</strong></p>
                <p>I'm looking for all kind of projects to work on !
                    I'm constantly learning new things, currently those thing include gaining more experience with Laravel, ReactJs and Angular</p>
                <p>My latest project, TightR, is a back-office platform for social network influencers to add new sales products for their e-commerce site </p>
                <p>When I'm not learning something new chances are  I'm playing guitar or looking for inspiration</p>
            </Content>
        </div>
    );
}

export default AboutPage;