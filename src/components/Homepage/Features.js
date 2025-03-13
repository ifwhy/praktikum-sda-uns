import { GithubIcon, Instagram } from 'lucide-react'

const FeatureList = [
  {
    title: 'Moh Ferdinand Ramdhani',
    img: 'https://github.com/mferdinandr.png',
    ig: 'https://www.instagram.com/m.ferdinram/',
    github: 'https://github.com/mferdindr',
    description: <>Informatika UNS 2023</>
  },
  {
    title: 'Ivan Wahyu Nugroho',
    img: 'https://github.com/ifwhy.png',
    ig: 'https://www.instagram.com/ifwhy._/',
    github: 'https://github.com/ifwhy',
    description: <>Informatika UNS 2023</>
  },
  {
    title: 'Mohammad Nazhiif Al-Ghoniy',
    img: 'https://github.com/nazuhifu.png',
    ig: 'https://www.instagram.com/nazuhifu',
    github: 'https://github.com/nazuhifu',
    description: <>Informatika UNS 2023</>
  }
]

function Feature({ img, title, description, ig, github }) {
  return (
    <div>
      <div className='text--center'>
        <img src={img} alt={title} className='h-32 w-32 rounded-full' />
      </div>
      <div className='text--center padding-horiz--md'>
        <div className='flex justify-center gap-3'>
          <a
            href={ig}
            className='text-2xl text-black hover:text-blue-500 dark:text-white'
            target='_blank'
            rel='noreferrer noopener'
          >
            <Instagram />
          </a>
          <a
            href={github}
            className='text-2xl text-black hover:text-blue-500 dark:text-white'
            target='_blank'
            rel='noreferrer noopener'
          >
            <GithubIcon />
          </a>
        </div>
        <p className='mb-2 text-center text-lg font-bold sm:text-xl'>{title}</p>

        <p className='mx-auto max-w-sm'>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className='py-10 dark:bg-[#010816]'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='text-center text-2xl font-bold sm:text-3xl'>Tim Asisten Praktikum</h2>
        <div className='flex w-full flex-wrap justify-center gap-5'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
