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
        backgroundImage: `url('https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/PDaTSuJ/videoblocks-4k-2779-blue_smvurnutd_thumbnail-1080_01.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPositionY: 'bottom',
        backgroundPositionX: 'right'
      }}
    >
      <div className='container flex h-full w-full flex-col items-center justify-center text-center'>
        <Heading as='h1' className='mb-4 text-2xl font-bold md:text-3xl lg:text-6xl'>
          Selamat Datang di <br />
        </Heading>
        <Heading as='h1' className='mb-4 text-2xl font-bold md:text-3xl lg:text-6xl'>
          Praktikum Struktur Data dan Algoritma
        </Heading>

        <p className='mb-4 text-justify text-sm sm:text-center md:text-xl'>
          <span className='mb-1 block font-semibold'>
            Website ini merupakan website yang berisi materi, tugas, dan informasi untuk Praktikum
            SDA di Informatika UNS. <br className='hidden sm:inline' /> Praktikum Struktur Data dan
            Algoritma ini menggunakan bahasa pemrograman Java. <br className='hidden sm:inline' />
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
