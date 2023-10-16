import { useState,useId } from "react"
import { useFilters } from "../hooks/UseFilters"


export const Filters = () => {
    
    const {filters,setFilters} = useFilters()

    const minPriceFilterId = useId()
    const categoryFilterId = useId()

    const handleMinPriceChange = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value,
        }))
    }

    const handleCategoryChange = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

  return (
    <>
        <div className="flex items-center flex-row gap-3">
            <label  htmlFor={minPriceFilterId}>Price from:</label>
            <input className="range" type="range" value={filters.minPrice} id={minPriceFilterId} min='0' max='2000' onChange={handleMinPriceChange}/>
            <span>{filters.minPrice}</span>
        </div>
        <div>
            <label className="mr-4" htmlFor={categoryFilterId}>Category</label>
            <select className=" focus:bg-transparent  bg-transparent p-[.3rem] border-1 border-white rounded-2xl" name="category" id={categoryFilterId} onChange={handleCategoryChange}>
                <option value="all">All</option>
                <option value="laptops">Laptops</option>
                <option value="smartphones">Smartphones</option>
            </select>
        </div>
    </>
  )
}
