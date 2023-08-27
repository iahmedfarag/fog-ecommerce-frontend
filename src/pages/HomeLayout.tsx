import { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks'
import { getCategories, getMainCategories, getProducts, getSubCategories } from '../redux/productsSlice'
import { Hero, BestOffers, NewProducts, AppleShoppingEvent, SpecialCategory, PopularCategories } from '../sections'



export default function HomeLayout() {
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getMainCategories())
        dispatch(getCategories())
        dispatch(getSubCategories())
        dispatch(getProducts())
    }, [dispatch])

    return <>
        <Hero />
        <PopularCategories />
        <BestOffers />
        <NewProducts />
        <AppleShoppingEvent />
        <SpecialCategory />
    </>
}
