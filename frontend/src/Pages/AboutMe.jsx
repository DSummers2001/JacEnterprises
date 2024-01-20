import DillonsImage from './DillonsPic.jpg';
import IsabelsImage from './Isabel.jpg';
import CodysImage from './CodysPic.jpg';
import NextButton from './Next.gif';
import React, { useState } from 'react';

const AboutMe = () => {
    const [profiles, setProfile] = useState(1);
    const [codyIsVisible, setCodyIsVisible] = useState(true);
    const [sarahIsVisible, setSarahIsVisible] = useState(false);
    const [isabelIsVisible, setIsabelIsVisible] = useState(false);
    const [dillonIsVisible, setDillonIsVisible] = useState(false);

    const toggleVisibility = () => {
      if (profiles>=4){
        setProfile(1);
      }
      else{
        setProfile(profiles+1);
      }
      switch (profiles){
        case 1:
            setCodyIsVisible(true);
            setSarahIsVisible(false);
            setIsabelIsVisible(false);
            setDillonIsVisible(false);
            break;
        case 2:
            setCodyIsVisible(false);
            setSarahIsVisible(true);
            setIsabelIsVisible(false);
            setDillonIsVisible(false);
            break;
        case 3:
            setCodyIsVisible(false);
            setSarahIsVisible(false);
            setIsabelIsVisible(true);
            setDillonIsVisible(false);
            break;
        case 4:
            setCodyIsVisible(false);
            setSarahIsVisible(false);
            setIsabelIsVisible(false);
            setDillonIsVisible(true);
            break;
        }
    };
  
    const CProfile = codyIsVisible ? 'CProfileVisible' : 'CProfileHidden';
    const SProfile = sarahIsVisible ? 'SProfileVisible' : 'SProfileHidden';
    const IProfile = isabelIsVisible ? 'IProfileVisible' : 'IProfileHidden';
    const DProfile = dillonIsVisible ? 'DProfileVisible' : 'DProfileHidden';

    return (
    <div>
    <h1>About The Team</h1>
    <button onClick={toggleVisibility}><img id = "NextButton"src={NextButton} alt="Next Button" /></button>
    <div className={CProfile}>
        <h2>Cody Pattison</h2>
        <img src={CodysImage} alt="Codys' Profile Picture" />
        <h3>Bio</h3>
        <p>Dedicated and results-driven professional with a proven track record in leadership, project
            management, and business development. Managed up to 18 personnel in the Marine Corps utilizing
            excellent interpersonal skills to manage customer relationships, interface with vendors and clients,
            and collaborate with cross-functional teams. Proven aptitude for driving new business, revenue, and
            consistently achieving company and client objectives. Known for driving successful initiatives,
            increasing sales, and fostering positive customer relationships. Currently transitioning to a dynamic
            career in software engineering, combining technical aptitude with a strong foundation in strategic
            planning and team management. Looking for an exciting new career where I can develop my skills
            and be part of a team of professionals who share my passion for technology</p>
            <h3>Contact</h3>
            <p>Email: Codypattison86@gmail.com</p>
            <p><a href="https://github.com/cpattison86/cpattison86.github.io">Github</a> | <a href="https://www.linkedin.com/in/cody-pattison/">LinkedIn</a></p>
    </div>
    <div className={IProfile}>
        <h2>Isabel Santiago</h2>
        <img src={IsabelsImage} alt="Isabels' Profile Picture" />
        <h3>Bio</h3>
        <p>System Administrator with six years of experience in design, implementation, and maintenance of 
        network architecture and security. Earned the distinguished 2023 Women of Color STEM Technology Rising Star award 
        for exemplary work in the field, remediating critical vulnerabilities across 20 sites, 6 networks, 
        and thousands of assets, resulting in a notable 50% reduction in vulnerabilities and enhanced risk management. 
        Leveraged automation tools (SCCM, Ansible) and programming languages (PowerShell, Python, Bash) to streamline system processes, 
        resulting in a substantial reduction in manual effort and saving an average of 20 hours per week.</p>
            <h3>Contact</h3>
            <p>Email: Isabel.santiagolewis@gmail.com</p>
            <p><a href="https://github.com/isabel-santiagolewis">Github</a> | <a href="https://www.linkedin.com/in/isabel-santiago-lewis-00b76b1b8/">LinkedIn</a></p>
    </div>
    <div className={SProfile}>
        <h2>Sarah Fought</h2>
        <img src="" alt="Sarahs' Profile Picture" />
        <h3>Bio</h3>
        <p>placeholder text</p>
            <h3>Contact</h3>
            <p>Email: Placeholder@gmail.com</p>
            <p><a href="">Github</a> | <a href="">LinkedIn</a></p>
    </div>
    <div className={DProfile}>
        <h2>Dillon Summers</h2>
        <img src={DillonsImage} alt="Dillons' Profile Picture" />
        <h3>Bio</h3>
        <p>As a recent graduate from the WeCanCodeIT boot camp, I am an enthusiastic and dedicated Junior Full Stack Java Software 
            Developer seeking an opportunity to apply my skills and knowledge in a dynamic work environment. With a solid foundation 
            in Java programming and hands-on experience in front-end and back-end development, I am eager to contribute to innovative projects, 
            collaborate with talented teams, and continue my growth as a professional developer.</p>
            <h3>Contact</h3>
            <p>Email: Dillon.summers2001@gmail.com</p>
            <p><a href="https://github.com/DSummers2001/DSummers2001.github.io">Github</a> | <a href="https://www.linkedin.com/in/dillon-summers/">LinkedIn</a></p>
    </div>
</div>
    )
}

export default AboutMe;