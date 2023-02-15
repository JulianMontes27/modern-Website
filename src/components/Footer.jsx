import React from 'react';
import styles from '../styles';
import { logo } from '../assets';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col `}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex flex-1 flex-col justify-start mr-10'>
         <img src={logo} alt="logo" className='w-[266px] h-[72px] object-contain' /> 
         <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti...
         </p>
        </div>
        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {
            footerLinks.map((footerLink, index)=>(
              <div key={index} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
                <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                  {
                    footerLink.title
                  }
                </h4>

                <ul className='list-none mt-4'>
                  {
                    footerLink.links.map((link, index)=>(
                      <li key={link.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${index !== footerLink.links.length -1 ? 'mb-4' : 'mb-0'}`}>
                        {link.name}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
      <div>
        <p>
          
        </p>
      </div>
    </section>
  )
}

export default Footer
