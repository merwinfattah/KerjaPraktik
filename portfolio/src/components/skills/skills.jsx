import React from 'react'
import './skills.css'
import {FaCheckCircle} from 'react-icons/fa'

function skills() {
  return (
    <section className='skills_section'>
        <div>
            <h2>My Skills</h2>
            <div className='skills_container'>
                <div className='card_skills'>
                    <h3>Frontend Development</h3>
                    <div className='skills_content'>
                        <article className='skills_item'>
                            <FaCheckCircle />
                            <h4>HTML</h4>
                            <small>intermediate</small>
                        </article>
                        <article className='skills_item'>
                            <FaCheckCircle />
                            <h4>CSS</h4>
                            <small>intermediate</small>
                        </article>
                        <article className='skills_item'>
                            <FaCheckCircle />
                            <h4>JavaScript</h4>
                            <small>intermediate</small>
                        </article>
                        <article className='skills_item'>
                            <FaCheckCircle />
                            <h4>ReactJS</h4>
                            <small>intermediate</small>
                        </article>
                        <article className='skills_item'>
                            <FaCheckCircle />
                            <h4>React Native</h4>
                            <small>Beginner</small>
                        </article>
                        <article className='skills_item'>
                            <FaCheckCircle />
                            <h4>Bootstrap</h4>
                            <small>Beginner</small>
                        </article>
                    </div>
                </div>
            <div className='card_skills'>
                <h3>Backend Development</h3>
                <div className='skills_content'>
                        <article className='skills_item'>
                            <FaCheckCircle />
                            <h4>Python</h4>
                            <small>intermediate</small>
                        </article>
                        <article className='skills_item'>
                            <FaCheckCircle />
                            <h4>MySQL</h4>
                            <small>intermediate</small>
                        </article>
                        <article className='skills_item'>
                            <FaCheckCircle />
                            <h4>PostgreSQL</h4>
                            <small>intermediate</small>
                        </article>
                        <article className='skills_item'>
                            <FaCheckCircle />
                            <h4>FastAPI</h4>
                            <small>intermediate</small>
                        </article>
                        <article className='skills_item'>
                            <FaCheckCircle />
                            <h4>NodeJS</h4>
                            <small>Beginner</small>
                        </article>  
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default skills