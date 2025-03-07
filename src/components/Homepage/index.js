import Layout from '@theme/Layout'
import Heading from '@theme/Heading'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import HomepageFeatures from './Features'
import { Button } from '../ui/button'

function HomepageHeader() {
  return (
    <header
      className='w-full object-cover px-3 py-36 text-left text-white lg:h-screen'
      style={{
        backgroundImage: `url('https://www.statcraft.in/UploadImages/76a4eccd-be26-43dd-99c1-c6544f5dbea3_banner.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: 'bottom',
        backgroundPositionX: 'right'
      }}
    >
      <div className='container'>
        <Heading as='h1' className='mb-4 text-2xl font-bold md:text-3xl lg:text-5xl'>
          Selamat Datang di <br />
        </Heading>
        <Heading as='h1' className='mb-4 text-2xl font-bold md:text-3xl lg:text-5xl'>
          Praktikum Struktur Data dan Algoritma
        </Heading>

        <p className='mb-4 text-sm md:text-xl lg:text-base'>
          <span className='mb-1 block font-semibold'>
            Website ini merupakan website yang berisi materi, tugas, dan informasi untuk Praktikum
            SDA di Informatika UNS. <br /> Praktikum Struktur Data dan Algoritma ini menggunakan
            bahasa pemrograman Java. <br />
            Materi praktikum dapat di akses melalui <i>link</i> di bawah ini.
          </span>
        </p>

        <Button
          asChild
          className='border-2 border-white bg-white text-black transition-all duration-300 hover:bg-transparent hover:text-white'
        >
          <Link to='/docs/materi/intro'>🚀 Materi Praktikum</Link>
        </Button>
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
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
