import { GithubIcon, Instagram } from 'lucide-react'

const FeatureList = [
  {
    title: 'Moh Ferdinand Ramdhani',
    img: 'https://github.com/mferdinandr.png',
    ig: 'https://www.instagram.com/m.ferdinram/',
    github: 'https://github.com/mferdindr',
    description: <>Mahasiswa Informatika UNS 2023</>
  },
  {
    title: 'Ivan Wahyu Nugroho',
    img: 'https://github.com/ifwhy.png',
    ig: 'https://www.instagram.com/ifwhy._/',
    github: 'https://github.com/ifwhy',
    description: <>Mahasiswa Informatika UNS 2023</>
  }
]

function Feature({ img, title, description, ig }) {
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
            href={ig}
            className='text-2xl text-black hover:text-blue-500 dark:text-white'
            target='_blank'
            rel='noreferrer noopener'
          >
            <GithubIcon />
          </a>
        </div>
        <p className='mb-2 text-center text-xl font-bold'>{title}</p>

        <p className='mx-auto max-w-sm'>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className='py-10'>
      <div className='mx-auto max-w-7xl'>
        <h2 className='text-center text-3xl font-bold'>Tim Asisten Praktikum</h2>
        <div className='flex w-full justify-center gap-5'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
