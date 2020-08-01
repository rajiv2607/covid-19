import React from 'react'
import Navbar from './Navbar'
import  Search from './Search'
import Jumbo from './Jumbo'
import Stats from './Stats'
import Header from './Header'

export default function Dashboard() {
    return (
        <div>
            <div className='la'>
            </div>
            <Navbar/>
            <Jumbo/>
            <Search/>
            <Header/>
            <Stats/>
        </div>
    )
}