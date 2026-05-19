import './search.scss'

interface Props {
  setSearch: (value: string) => void
}

const Search = ({ setSearch }: Props) => {

  return (

    <input
      className='search'
      placeholder='Search products...'
      onChange={(e) =>

        setSearch(

          e.target.value

        )

      }
    />

  )

}

export default Search