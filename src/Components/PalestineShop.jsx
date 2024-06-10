import { useState } from "react"
import Nav from "./Nav"
import Filters from "./Filters";
import Footer from "./Footer";
import TopProducts from './TopProducts'

const PalestineShop = () => {

    const [hideFilter, setHideFilters] = useState(false);

  return (
    <div className="flex flex-col">
        <Nav />
        <div className="flex justify-between px-14 py-10 items-center">
            <h1 className="text-3xl font-bold">T-Shirts</h1>
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-4 text-lg" onClick={() => {setHideFilters(!hideFilter)}}>
                    <p className="cursor-pointer">{!hideFilter ? 'Hide' : 'Show'} Filters</p>
                    {
                        !hideFilter ? <i className='bx bx-hide' ></i> : <i className='bx bx-show' ></i>
                    }
                </div>

                <div className="flex items-center gap-4 text-lg">
                    <p className="cursor-pointer">Sort By</p>
                    <i className='bx bx-chevron-down' ></i>
                </div>
            </div>
        </div>
        <div className="flex mx-14">
            {
                !hideFilter ? (
                    <Filters />
                ):(null)
            }
            <TopProducts classType="grid grid-cols-3"/>
        </div>
        <Footer />
    </div>
  )
}

export default PalestineShop