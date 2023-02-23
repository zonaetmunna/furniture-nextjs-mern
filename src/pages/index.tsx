import type { NextPage } from 'next'
import Head from 'next/head'
import { NavbarFirst } from '../components/main/navbarFirst'

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div>
      <NavbarFirst/>

    </div>
  )
};

export default IndexPage
