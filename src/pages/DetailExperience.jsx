import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DatabaseJSON from '../assets/data/database.json'

const DetailExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [tools, setTools] = useState([]);

  const getExperiences = async () => {
    setExperiences(DatabaseJSON.experiences);
    setTools(DatabaseJSON.tools);
  }

  useEffect(() => {
    getExperiences();
  }, []);

  return (
    <main className="flex flex-col justify-center items-center gap-10 bg-black pt-20">
      <nav className='container mx-auto flex justify-between items-center px-10 md:px-5'>
        <Link to={`/`} className='text-white hover:text-sky-300 space-x-2 text-sm'>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back</span>
        </Link>
        <Link to={`/`} className='text-white hover:text-sky-300 space-x-2 text-sm'>
          <span>Portofolio</span>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </nav>
      <section className='container mx-auto px-10 md:px-5'>
        {
          tools.length > 0 ? (
            <div className='flex flex-wrap items-center gap-5'>
              {
                tools.map((tool, key) =>
                  <div className='text-gray-300' key={key}>
                    <i className={`fa-brands ${tool.name} fa-5x`}></i>
                  </div>
                )
              }
            </div>
          ):(
            <p>Belum ada tools</p>
          )
        }
      </section>
      <section className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 px-10 md:px-5'>
        {
          experiences.length > 0 ? (
            experiences.map((experience, key) =>
              <div key={key}>
                <div className='bg-sky-600 h-52'></div>
                <div className='flex justify-between items-center bg-sky-900 px-5 py-3'>
                  <Link to={`/`} className='text-white hover:text-sky-200 text-sm'>{experience.name}</Link>
                  <div className='text-sky-200 space-x-2'>
                    {
                      experience.icons.map((icon, key) =>
                          <i key={key} className={`fa-brands ${icon.icon}`}></i>
                      )
                    }
                  </div>
                </div>
              </div>
            )
          ) : (
            <p>Belum ada pengalaman</p>
          )
        }
      </section>
      <footer className='py-5'>
        <p className='text-gray-400 text-xs'>Copyright © 2024 Lerian Febriana, A.Md.Kom</p>
      </footer>
    </main>
  )
}

export default DetailExperience