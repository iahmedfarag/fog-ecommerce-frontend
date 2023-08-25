import { useDispatch, useSelector } from "react-redux"
import { closeSidebar, getCategories, getMainCategories, getProducts, getSubCategories, openSidebar } from "../redux/productsSlice"
import { useEffect, useState } from 'react'
import NewProducts from '../sections/NewProducts'
import AppleShoppingEvent from '../sections/AppleShoppingEvent'
import SpecialCategory from '../sections/SpecialCategory'
import Hero from "../sections/Hero"
import Navbar from "../sections/Navbar"
import PopularCategories from "../sections/PopularCategories"
import BestOffers from "../sections/BestOffers"
import Footer from "../sections/Footer"
import Sidebar from "../components/Sidebar/Sidebar"
export default function HomeLayout() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMainCategories())
        dispatch(getCategories())
        dispatch(getSubCategories())
        dispatch(getProducts())
    }, [dispatch])
    return <>
        <Navbar />
        <Hero />
        <PopularCategories />
        <BestOffers />
        <NewProducts />
        <AppleShoppingEvent />
        <SpecialCategory />
        <Sidebar />
        <Footer />
    </>
}
