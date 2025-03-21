import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'
import { useEffect } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from './Features'
import { Button } from '../ui/button'
import AOS from 'aos'
import 'aos/dist/aos.css'

function HomepageHeader() {
  useEffect(() => {
    AOS.init()
  }, [])

  return (
    <header
      className='w-full object-cover px-3 py-36 text-left text-white lg:h-screen'
      style={{
        backgroundImage: `url('/img/bg-hero.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: 'center',
        backgroundPositionX: 'right'
      }}
    >
      <div className='container flex h-full w-full flex-col items-center justify-center text-center'>
        <Heading
          as='h1'
          className='mb-4 text-3xl font-bold md:text-3xl lg:text-6xl'
          data-aos='zoom-in'
          data-aos-delay='50'
          data-aos-duration='1000'
        >
          Selamat Datang di <br />
        </Heading>
        <Heading
          as='h1'
          className='mb-4 text-3xl font-bold md:text-3xl lg:text-6xl'
          data-aos='zoom-in'
          data-aos-delay='1200'
          data-aos-duration='1000'
        >
          Praktikum Struktur Data dan Algoritma
        </Heading>

        <div data-aos='zoom-out' data-aos-delay='2000' data-aos-duration='1500'>
          <p className='mb-4 text-justify text-sm sm:text-center md:text-xl'>
            <span className='mb-1 block font-semibold'>
              Website ini merupakan website yang berisi materi, tugas, dan informasi untuk Praktikum
              SDA di Informatika UNS. <br className='hidden sm:inline' /> Praktikum Struktur Data
              dan Algoritma ini menggunakan bahasa pemrograman Java.{' '}
              <br className='hidden sm:inline' />
              Materi praktikum dapat di akses melalui <i>link</i> di bawah ini.
            </span>
          </p>

          <Button
            asChild
            className='border-2 border-white bg-white text-black transition-all duration-300 hover:bg-transparent hover:text-white'
          >
            <Link to='/docs/materi/intro' className='hover:bg-transparent hover:text-white'>
              🚀 Materi Praktikum
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default function Home({ homePageBlogMetadata, recentPosts }) {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title={`${siteConfig.title}`}
      description='Website ini merupakan tempat untuk belajar Struktur Data dan Algoritma di Informatika UNS'
    >
      <main>
        <HomepageHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
