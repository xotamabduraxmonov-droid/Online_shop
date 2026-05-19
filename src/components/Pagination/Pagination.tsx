import './pagination.scss'

interface Props {
  total: number
  onChange: (page: number) => void
}

const Pagination = ({
  total,
  onChange
}: Props) => {

  const pages =

    Array.from(

      {

        length:

          Math.ceil(
            total / 12
          )

      },

      (

        _,

        index

      ) => index

    )


  return (

    <div
      className='pagination'
    >

      {

        pages.map(

          page => (

            <button

              key={page}

              onClick={()=>

                onChange(

                  page

                )

              }

            >

              {

                page + 1

              }

            </button>

          )

        )

      }


    </div>

  )

}


export default Pagination