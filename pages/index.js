// import type { NextPage } from 'next'

import Head from 'next/head'
import Image from 'next/image'
import { PostCard, Categories, PostWidget, Header } from '../components'
import { getPosts } from '../services'

const Home = ({ posts }) => {

  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Tips For Developers</title>
        <link rel="icon" href="/images/author_1.jpeg" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 '>
        <div className='lg:col-span-8 col-span-1 '>
          {posts.map((post) => <PostCard post={post.node} key={post.node.title} />)}
        </div>

        <div className='lg:col-span-4 col-span-1'>
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

    </div>
  )
}


export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts }
  }
}

export default Home