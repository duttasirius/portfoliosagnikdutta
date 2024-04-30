import { Link } from "react-router-dom"
import { projects } from "../constants"

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I'm  <span className='text-purple-600 font-bold text2'>Projects</span>
      </h1>

      <div className='mt-5 flex-col gap-3 text-slate-500'>
        <p>FullStack Devloper Specializing in Backend & Frontend</p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
      { projects.map(project =>(
        <div className="lg:w-[400px] w-full" key={project.name}>
          <div className="block-container w-12 h-12 bg-blue-400">
            <div className={`btn-back rounded-xl${project.theme}`} />
            <div className="btn-front rounded-xl flex justify-center items-center">
              <img 
              src={project.iconUrl}
              alt="Project Icon"  
              className="w-1/12 h-1/2 object-contain"            
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col">
            <h4>
              {project.name}
            </h4>
            <p>
            {project.description}
            </p>
            <div>
              <Link to={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-blue-600"
              >
                https://github.com/dashboard
              </Link>
            </div>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Projects