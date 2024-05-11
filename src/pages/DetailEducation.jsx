import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import DiplomaIcon from '../assets/icons/diploma.svg'
import EducationAnimation from '../assets/animations/education.json'

const DetailEducation = () => {
  return (
    <main className="flex flex-col justify-center items-center gap-10 bg-black h-screen">
      <nav className='max-w-4xl container mx-auto flex justify-between items-center px-10 md:px-5'>
        <Link to={`/`} className='text-white hover:text-sky-300 space-x-2 text-sm'>
          <i className="fa-solid fa-arrow-left"></i>
          <span>Back</span>
        </Link>
        <Link to={`/`} className='text-white hover:text-sky-300 space-x-2 text-sm'>
          <span>Portofolio</span>
          <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </nav>
      <section className='max-w-4xl container mx-auto px-10 md:px-5'>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className='space-y-5'>
            <div className='space-y-2'>
              <h2 className='flex items-end gap-2 text-2xl font-bold'>
                <img src={DiplomaIcon} alt="" className='w-8 h-8' />
                <span className='text-white'>Education</span>
              </h2>
              <p className='text-gray-300 text-sm'>
              "Education is not the learning of facts, but the training of the mind to think." - Albert Einstein
              </p>
            </div>
            <ul className='list-disc space-y-1 ml-5'>
              <li className='text-gray-200 text-sm'>Politeknik LP3I . (A.Md.Kom) D3 Manajemen Informatika</li>
              <li className='text-gray-200 text-sm'>SMK Manangga Pratama . Teknik Kendaran Ringan</li>
              <li className='text-red-500 text-sm'>International Open University . (BSc) Bachelor of Science IT (<span className='italic'>InsyaAllah</span>)</li>
              <li className='text-red-500 text-sm'>International Open University . (BA) Bachelor of Arts Islamic Studies (<span className='italic'>InsyaAllah</span>)</li>
              <li className='text-red-500 text-sm'>Universitas Terbuka . (S.SI.) S1 Sistem Informasi (<span className='italic'>InsyaAllah</span>)</li>
            </ul>
          </div>
          <div className='flex justify-center items-center'>
            <Lottie animationData={EducationAnimation} className='w-60 h-60' loop={true} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default DetailEducation