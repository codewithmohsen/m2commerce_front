'use client'

import ContainFirstPage from "./ContainFirstPage"
import Header from "./Header"

export default function Home() {
  return (
    <>
          <Header/>

    <main style={{marginTop:'130px'}}>
      <ContainFirstPage/>
      <h1>Home</h1>
    </main>
    </>
  )
}