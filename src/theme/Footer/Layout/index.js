import React from 'react'

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer className='bg-gray-100 dark:bg-[#010816]'>
      <div className='mx-auto max-w-7xl px-4 pt-10 pb-5'>
        {links}
        {(logo || copyright) && (
          <div className='footer__bottom text--center font-semibold'>
            {logo && <div className='margin-bottom--sm'>{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  )
}
