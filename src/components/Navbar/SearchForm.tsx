
import { BiSearch } from "react-icons/bi"

export default function SearchForm() {
    return (
        <form action="">
            <input type="text" placeholder='Search for products' />
            <button type='submit'>
                <BiSearch />
            </button>
        </form>
    )
}
