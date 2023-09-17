import styled from "styled-components"
import { HiMiniBars4 } from "react-icons/hi2"
import { BsGrid3X3Gap } from "react-icons/bs"
import { TfiLayoutGrid4 } from "react-icons/tfi"
import { changeProductsPerRow, filterProducts } from "../../redux/products/productsSlice"
import { useAppDispatch } from "../../redux/hooks"
import { useState } from "react"


export default function Control() {
    const dispatch = useAppDispatch()
    const [activeButton, setActiveButton] = useState(9)
    const handleSort = (e: React.ChangeEvent<HTMLSelectElement>): void => {
        const target = e.target;
        dispatch(filterProducts({ sort: target.value }))
    }

    const handleClick = (show: number) => {
        setActiveButton(show)
        dispatch(filterProducts({ show }))
    }

    return (
        <Wrapper className="control">
            <div className="show">
                <p>Show:</p>
                <div className="options">
                    <button className={`${activeButton === 9 ? 'active' : ''}`} onClick={() => handleClick(9)}>9</button> /
                    <button className={`${activeButton === 12 ? 'active' : ''}`} onClick={() => handleClick(12)}>12</button> /
                    <button className={`${activeButton === 18 ? 'active' : ''}`} onClick={() => handleClick(18)}>18</button>
                </div>
            </div>
            <div className="how">
                <button onClick={() => dispatch(changeProductsPerRow(1))}><HiMiniBars4 /></button>
                <button onClick={() => dispatch(changeProductsPerRow(3))}><BsGrid3X3Gap /></button>
                <button onClick={() => dispatch(changeProductsPerRow(4))}><TfiLayoutGrid4 /></button>
            </div>
            <div className="sort">
                <select name="sorting" id="sorting" onChange={handleSort}>
                    <option value="">Default Sorting</option>
                    <option value="price">Sort by price: low to high</option>
                    <option value="-price">Sort by price: hight to low</option>
                    <option value="date">Sort by latest</option>
                    <option value="new">Sort by Popularity</option>
                </select>
            </div>
        </Wrapper >
    )
}

const Wrapper = styled.div`
display: flex;
align-items: center;
gap: 20px;
justify-content: right;
position: relative;
    button {
        color: gray;
        &:hover {
            opacity: 0.7;
        }
        &.active {
            color: var(--black);
        }                     
    }
    .show {
        display: flex;
        align-items: center;
        gap: 10px;
        p {
       
        }
        .options {
            display: flex;
            align-items: center;
            gap: 3px;
        }
    }
    .how {
        display: flex;
        align-items: center;
        gap: 10px;
        button {
            font-size: 22px;
        }
    }
    .sort {
        select {
            padding: 7px;
            option {
                padding: 5px;
            }
        }
    }
    .showFitlers {
        position: absolute;
        left: 0;
        background-color: var(--main-blue);
        color: var(--white);
        padding: 4px 8px;
        border-radius: 25px;
    }

    @media(max-width: 992px) {
        .how {
            display: none;
        }
    }

`