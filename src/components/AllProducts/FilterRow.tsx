import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md"
import { useState, useRef, } from 'react'
import { styled } from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { filterProducts } from "../../redux/products/productsSlice";
import { AiOutlineCheck } from "react-icons/ai"

type filterRowPropsTypes = {
    text?: string,
    items?: string[],
    price?: { min?: number, max?: number },
    filterBy: string
}

export default function FilterRow({ text, items, price, filterBy }: filterRowPropsTypes) {
    const { filtersObject } = useAppSelector((state) => state.products)
    const [openFilters, setOpenFilters] = useState(false)
    const [height, setHeight] = useState<number | undefined>(0)
    const ref = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch()
    const [activeButton, setActiveButton] = useState<number | null>(null)

    const accordionHandle = () => {
        setOpenFilters((current) => {
            if (current) {
                setHeight(0)
            } else {
                const height = ref.current?.scrollHeight;
                if (height && height > 150) {
                    setHeight(150)
                } else {
                    setHeight(height)
                }
            }
            return !current
        })
    }

    const handleFilterClick = (filterBy: string, item: string, index: number) => {
        if (index === activeButton) {
            setActiveButton(null)
            dispatch(filterProducts({ [filterBy]: null }))
        } else {
            setActiveButton(index)
            dispatch(filterProducts({ [filterBy]: item }))
        }
    }

    const handlePriceChange = (e: React.ChangeEvent<HTMLFormElement>): void => {
        const target = e.target
        let price = { gte: filtersObject?.price?.min, lte: filtersObject?.price?.max }
        if (target.id === 'min') {
            if (target.value === "") {
                price = { ...price, gte: filtersObject?.price?.min }
            } else {
                price = { ...price, gte: target.value }
            }
        } if (target.id === 'max') {
            if (target.value === "") {
                price = { ...price, lte: filtersObject?.price?.max }

            } else {
                price = { ...price, lte: target.value }
            }
        }
        dispatch(filterProducts({ [filterBy]: price }))

    }

    // color
    if (filterBy === 'color') {
        return <ColorWrapper className="colors">
            {items?.map((item, index) => {
                return <button style={{ backgroundColor: item }} className={`${activeButton === index ? 'active' : ''}`}
                    key={index} onClick={() => handleFilterClick(filterBy, item, index)}>{activeButton === index && <AiOutlineCheck />}</button>
            })}
        </ColorWrapper>
    }

    if (filterBy === 'price') {
        return <PricesWrapper className="price">
            <p>from {price?.min} to {price?.max}</p>
            <form action="" onChange={handlePriceChange}>
                <div className="line">
                    <label htmlFor="min">from</label>
                    <input type="number" placeholder={price?.min?.toString()} id="min" />
                </div>
                <div className="line">
                    <label htmlFor="max">to</label>
                    <input type="number" placeholder={price?.max?.toString()} id="max" />
                </div>
            </form>
        </PricesWrapper>
    }

    return (
        <Wrapper className={`${text}`}>
            <div className="head" onClick={accordionHandle}>
                <p>{text}</p>
                <div className="icon flex">
                    {openFilters ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>
            </div>
            <div className="items" ref={ref} style={{ maxHeight: `${height}px`, overflowY: `${height && height >= 150 ? 'scroll' : 'hidden'}` }} >
                {
                    items?.map((item, index) => {
                        return <button className={`${activeButton === index ? 'active' : ''}`}
                            key={index} onClick={() => handleFilterClick(filterBy, item, index)}>{item}</button>
                    })
                }
            </div>
        </Wrapper >
    )
}

const ColorWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 30px 10px;
    button {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--white);
    }
`
const PricesWrapper = styled.div`
padding: 10px 10px;
display: flex;
flex-direction: column;
gap: 10px;
    h4 {

    }
    p {
    }
    form {
        display: flex;
        align-items: center;
        gap: 10px;
        .line {
            label {
                margin-right: 10px;
                font-size: 14px;

            }
            input {
                width: 100px;
                padding: 4px;
            }
        }
    }
`

const Wrapper = styled.div`
        cursor: pointer;
        padding: 10px 0;
        .head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            font-weight: 600;
            font-size: 16px;
            &:hover {
                opacity: 0.7;
            }
            .icon {
                font-size: 18px;
                font-weight: normal;
            }
            p {
                /* margin-bottom: 20px; */
                padding: 25px 10px;
            }
        }
        &:not(:last-child) {
            border-bottom: 1px solid #dbdada;
        }
        .items {
            padding: 0 10px;
            max-height: 0;
            overflow: hidden;
            transition: 0.3s;
                display: flex;
                flex-direction: column;
                height: 100%;
                a,button {
                    text-align: left;
                    padding: 10px 0;
                    /* background-color: #dbdada; */
                    font-size: 15px;
                    &:hover {
                        color: var(--main-blue);
                    }
                    &:first-child {
                        margin-top: 10px;
                    }
                    &.active {
                        color: var(--main-blue);
                    }
                }
            
        }
    
`