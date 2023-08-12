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
    <section className="filters">
        <div>
            <label htmlFor={minPriceFilterId}>Price from:</label>
            <input type="range" value={filters.minPrice} id={minPriceFilterId} min='0' max='2000' onChange={handleMinPriceChange}/>
            <span>{filters.minPrice}</span>
        </div>
        <div>
            <label htmlFor={categoryFilterId}>Category</label>
            <select name="category" id={categoryFilterId} onChange={handleCategoryChange}>
                <option value="all">All</option>
                <option value="laptops">Laptops</option>
                <option value="smartphones">Smartphones</option>
            </select>
        </div>
    </section>
  )
}
