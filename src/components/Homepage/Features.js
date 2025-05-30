import { GithubIcon, Instagram } from 'lucide-react'

const FeatureList = [
  {
    title: 'Moh Ferdinand Ramdhani',
    img: 'https://github.com/mferdinandr.png',
    ig: 'https://www.instagram.com/m.ferdinram/',
    github: 'https://github.com/mferdinandr',
    delay: 500,
    description: <>Informatika UNS 2023</>
  },
  {
    title: 'Ivan Wahyu Nugroho',
    img: 'https://github.com/ifwhy.png',
    ig: 'https://www.instagram.com/ifwhy._/',
    github: 'https://github.com/ifwhy',
    delay: 1000,
    description: <>Informatika UNS 2023</>
  },
  {
    title: 'Mohammad Nazhiif Al-Ghoniy',
    img: 'https://github.com/nazuhifu.png',
    delay: 1500,
    ig: 'https://www.instagram.com/nazuhifu',
    github: 'https://github.com/nazuhifu',
    description: <>Informatika UNS 2023</>
  },
  {
    title: 'Muhammad Rafli Werizky',
    img: 'https://github.com/raaflii.png',
    delay: 2000,
    ig: 'https://www.instagram.com/m.rafli02',
    github: 'https://github.com/raaflii',
    description: <>Informatika UNS 2023</>
  }
]

function Feature({ img, title, description, ig, github, delay }) {
  return (
    <div data-aos='zoom-in' data-aos-delay={delay} data-aos-duration='1000' data-aos-once='true'>
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
        <p className='mb-2 text-center text-lg font-bold text-black sm:text-xl dark:text-white'>
          {title}
        </p>

        <p className='mx-auto max-w-sm font-semibold text-black dark:text-white'>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className='py-10 dark:bg-[#010816]'>
      <div className='mx-auto max-w-7xl py-10'>
        <h2
          className='text-center text-2xl font-bold sm:text-3xl'
          data-aos='zoom-in'
          data-aos-delay='50'
          data-aos-duration='500'
          data-aos-once='true'
        >
          Tim Asisten Praktikum
        </h2>
        <div className='flex w-full flex-wrap justify-center gap-5'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
