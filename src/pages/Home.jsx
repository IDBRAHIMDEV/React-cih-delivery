import React from 'react'
import SideBar from '../components/site/SideBar'
import Layout from '../components/site/Layout'
import Footer from '../components/site/Footer'

const Home = () => {

    let header = 'Home Page'
 
  return (
    <>
        <div className="row my-5">
            <h1>{ header }</h1>
        </div>
        <div className="row">
            <div className="col-9">
                <Layout />
            </div>
            <div className="col-3">
                <SideBar />
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <Footer />
            </div>
        </div>
    </>
  )
}

export default Home