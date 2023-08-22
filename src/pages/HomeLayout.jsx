import { Hero, Navbar, PopularCategories, BestOffers, Sidebar, NewProducts } from '../components'
import { useDispatch, useSelector } from "react-redux"
import { closeSidebar, getCategories, getMainCategories, getProducts, getSubCategories, openSidebar } from "../redux/productsSlice"
import { useEffect, useState } from 'react'

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
        <Sidebar />
    </>
}
