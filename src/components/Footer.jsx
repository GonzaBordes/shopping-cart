import { useFilters } from "../hooks/UseFilters"

export const Footer = () => {

   const {filters} = useFilters()

  return (
    <footer>
        <span>{filters.minPrice}</span>
    </footer>
  )
}
