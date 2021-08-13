import Layout from "../components/Layout"
import {useRouter} from 'next/router'
import { useEffect } from "react"

function Datail() {
  
  return (
    <Layout title={router.pathname}>
      <h1>halaman detail</h1>
    </Layout>
  )
}

export default Datail
