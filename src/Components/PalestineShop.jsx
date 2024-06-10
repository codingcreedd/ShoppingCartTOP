import { useState } from "react"
import Nav from "./Nav"
import Filters from "./Filters";
import Footer from "./Footer";
import TopProducts from './TopProducts'

const PalestineShop = () => {

    const [hideFilter, setHideFilters] = useState(false);
    const [showSort, setShowSort] = useState(false);

  return (
    <div className="flex flex-col">
        <Nav />
        <div className="flex justify-between px-14 py-10 items-center">
            <h1 className="text-3xl font-bold">T-Shirts</h1>
            <div className="flex items-center gap-10">
                <div className="flex items-center gap-4 text-lg" onClick={() => {setHideFilters(!hideFilter)}}>
                    <p className="cursor-pointer">{!hideFilter ? 'Hide' : 'Show'} Filters</p>
                    {
                        !hideFilter ? <i className='bx bx-hide text-2xl' ></i> : <i className='bx bx-show text-2xl' ></i>
                    }
                </div>

                <div className="flex items-center gap-4 text-lg relative cursor-pointer">
                    <div className="flex items-center gap-4" onClick={() => {setShowSort(!showSort)}}>
                        <div className="cursor-pointer relative">
                            Sort By
                        </div>
                        {!showSort ? <i className='bx bx-chevron-down text-2xl' ></i> : <i class='bx bx-chevron-up text-2xl' ></i>}
                    </div>
                    {
                        showSort ? (
                            <div className="text-xl absolute top-full mt-4 px-4 py-4 flex flex-col bg-gray-200 -left-full right-0 rounded-lg">
                                <p>Price: High-Low</p>
                                <p>Price: Low-High</p>
                            </div>
                        ):(null)
                    }
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