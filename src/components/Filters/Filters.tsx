import './filters.scss'

interface Props {
  setSort: (
    value: string
  ) => void
}

const Filters = ({
  setSort
}: Props) => {

  return (

    <select

      onChange={
        e =>
          setSort(
            e.target.value
          )
      }

    >

      <option value=''>

        Default

      </option>


      <option
        value='&sortBy=title&order=asc'
      >

        Title

      </option>


      <option
        value='&sortBy=price&order=asc'
      >

        Price

      </option>


      <option
        value='&sortBy=stock&order=asc'
      >

        Stock

      </option>


    </select>

  )

}

export default Filters