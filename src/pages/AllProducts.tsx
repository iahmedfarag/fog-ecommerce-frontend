import { styled } from "styled-components";
import { AllProductsBar, Control, Products } from "../sections";
import FilterRow from "../components/AllProducts/FilterRow";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { filterProducts } from "../redux/products/productsSlice";
import { useEffect } from "react";
import { getProducts } from "../redux/products/productsFetchFunctions";
import { useSearchParams } from "react-router-dom";

export default function AllProducts() {
    const { pages, filters, filtersObject } = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();
    const [searchParams] = useSearchParams();

    const subCategory = searchParams.get("subCategory");

    useEffect(() => {
        if (subCategory) {
            dispatch(getProducts({ type: "filter", filters: { ...filters, subCategory } }));
        } else {
            dispatch(getProducts({ type: "filter", filters }));
        }
        window.scrollTo(0, 0);
    }, [dispatch, filters, subCategory]);

    return (
        <Wrapper>
            <div className="container">
                <AllProductsBar />
                <div className="content">
                    <div className="filters">
                        <FilterRow
                            text={`price`}
                            price={filtersObject.price}
                            filterBy="price"
                        />
                        <FilterRow
                            text={`models`}
                            items={filtersObject.models}
                            filterBy="model"
                        />
                        <FilterRow
                            text={`brands`}
                            items={filtersObject.brands}
                            filterBy="brand"
                        />
                        <FilterRow
                            text={`colors`}
                            items={filtersObject.colors}
                            filterBy="color"
                        />
                    </div>

                    <div className="products-control">
                        <Control />
                        <Products />
                    </div>
                </div>
                <div className="pagination">
                    {Array.from(Array(pages), (_, i) => {
                        return (
                            <button
                                className={`${filters.currentPage === i + 1 ? "active" : ""}`}
                                key={i}
                                onClick={() => dispatch(filterProducts({ currentPage: i + 1 }))}>
                                {i + 1}
                            </button>
                        );
                    })}
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    background-color: var(--white-6);

    .container {
        .content {
            display: flex;
            gap: 20px;
            align-items: flex-start;
            flex-wrap: wrap;
            .filters {
                width: calc(25% - 10px);
                background-color: var(--white);
                display: flex;
                flex-direction: column;
            }
            .products-control {
                width: calc(75% - 10px);
                display: flex;
                flex-direction: column;
                gap: 20px;
            }
        }
        .pagination {
            background-color: var(--white);
            margin-top: 20px;
            display: flex;
            justify-content: right;
            gap: 10px;

            width: fit-content;
            margin-left: auto;
            padding-left: 50px;
            button {
                background-color: var(--main-blue);
                color: var(--white);
                padding: 3px 6px;
                &.active {
                    background-color: var(--white);
                    border: 1px solid var(--main-blue);
                    color: var(--black);
                }
            }
        }
    }

    @media (max-width: 1200px) {
        .container {
            .content {
                .filters {
                    width: 100%;
                }
                .products-control {
                    width: 100%;
                }
            }
        }
    }
    @media (max-width: 992px) {
    }
    @media (max-width: 768px) {
    }
    @media (max-width: 576px) {
    }
`;
