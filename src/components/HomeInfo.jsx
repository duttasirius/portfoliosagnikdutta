import React from 'react'
import { Link } from 'react-router-dom';



const InfoBox = ({ text, link, btnText}) => (
    <div className="info-box">
        <p className="font-medium sm:text-xs text-center ">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            ➡️
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-1 px-1 text-white mx-5">Hi, i am <span className="font-semibold">Sagnik</span>👋🏻 <br /> A FullStack Devloper from India  </h1>
    ),
    2: (
       <InfoBox 
       text="Worked with many live projects & make plenty projects & learned many skill along the way" 
       link="/about"
       btnText="Learn more"
       />
    ),
    3: (
        <InfoBox
       text="Led multiple projects to success over the years. to know more" 
       link="/projects"
       btnText="Visit my portfolio"
       />
    ),
    4: (
        <InfoBox
       text="Need a projects done or looking for a dev ? i'm here" 
       link="/contact"
       btnText="Let's talk"
       />
    ),
}




const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
   
}

export default HomeInfo
