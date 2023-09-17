
import { useState } from "react"
import { BiSearch } from "react-icons/bi"
import { Link } from "react-router-dom"
import { styled } from "styled-components"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { clearSeachedProducts } from "../../redux/products/productsSlice"
import { productType } from "../../Types"
import { getProducts } from "../../redux/products/productsFetchFunctions"

export default function SearchForm() {
    const { searchedProducts } = useAppSelector((state) => state.products)

    const [inputValue, setInputValue] = useState("")
    const dispatch = useAppDispatch();

    const onChangeHandle = (e: React.FormEvent<HTMLInputElement>): void => {
        const target = (e.target as HTMLInputElement)
        if (target.value === "" || target.value === " ") {
            setInputValue("")
            dispatch(clearSeachedProducts())
            return
        }
        setInputValue(target.value)
        dispatch(getProducts({ search: target.value, type: 'search' }))
    }

    const hideSearchProducts = () => {
        dispatch(clearSeachedProducts())
    }

    return (
        <Wrapper action="" >
            <input type="text" placeholder='Search for products' value={inputValue} onChange={onChangeHandle} onFocus={onChangeHandle} />
            <button type='submit'>
                <BiSearch />
            </button>
            <div className="products">
                {
                    searchedProducts.map((product: productType) => {
                        return <Link key={product._id} to={`/${product.mainCategory.slug}/${product.category.slug}/${product.subCategory.slug}/${product.slug}/${product._id}`}>{product.name}</Link>
                    })
                }
            </div>
            {
                searchedProducts.length >= 1 && <div className="overlay" onClick={hideSearchProducts}></div>
            }

        </Wrapper>
    )
}

const Wrapper = styled.form`
        width: 50%;
        position: relative;
        @media (max-width: 1200px) {
            width: 45%;
        }
        @media (max-width: 1100px) {
            width: 40%;
        }
        @media (max-width: 1000px) {
            width: 35%;
        }
        input {
            width: 100%;
            padding: 15px;
            border-radius: 25px;
            border: 1px solid #ccc;
            outline: none;
            text-transform: none;
            position: relative;
            z-index: 6;
        }
        button {
            background-color: var(--main-blue);
            color: var(--white);
            padding: 7px;
            font-size: 24px;
            display: flex;
            align-items: center;
            border-radius: 50%;

            //
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 5px;

        }
        .products {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            width: calc(100% - 20px);
            background-color: var(--white);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 6;
            a {
                padding: 5px 10px;
                font-size: 14px;
                &:hover {
                    opacity: 0.7;
                }
                &:first-child {
                    padding-top: 10px;
                }
                &:last-child {
                    padding-bottom: 10px;
                }
            }
        }
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #7e7e7e58;
            z-index: 5;
        }
`