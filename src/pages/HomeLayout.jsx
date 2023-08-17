// import { Outlet } from 'react-router-dom'
import { Hero, Navbar, PopularCategories, BestOffers, Sidebar } from '../components'

export default function HomeLayout() {
    return <>
        <Navbar />
        <Hero />
        <PopularCategories />
        <BestOffers />
        <Sidebar />
    </>
}
