import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import type {
  RootState,
  AppDispatch
} from '../../redux/store'

import {
  fetchProducts
} from '../../redux/productSlice'

import ProductCard from '../../components/ProductCard/ProductCard'
import Pagination from '../../components/Pagination/Pagination'
import Filters from '../../components/Filters/Filters'
import Navbar from '../../components/Navbar/Navbar'

import './home.scss'


const Home = () => {

  const dispatch =
    useDispatch<AppDispatch>()

  const [page, setPage] =
    useState(0)

  const [sort, setSort] =
    useState('')

  const [search, setSearch] =
    useState('')


  const {

    items,

    loading,

    total

  } =

    useSelector(

      (

        state:
        RootState

      ) =>

        state.products

    )


  useEffect(

    () => {

      dispatch(

        fetchProducts({

          skip:
            page * 12,

          sort

        })

      )

    },

    [

      dispatch,

      page,

      sort

    ]

  )


  const filtered =

    items.filter(

      item =>

        item.title

          .toLowerCase()

          .includes(

            search

              .toLowerCase()

          )

    )



  return (

    <>


      <Navbar

        setSearch={

          setSearch

        }

      />


      <section
        className='home'
      >


        <h1>

          Products

        </h1>



        <div
          className='top'
        >


          <Filters

            setSort={

              setSort

            }

          />


        </div>



        {

          loading

          ?

          <div
            className='loader'
          />

          :

          <>


            <div
              className='products'
            >


              {

                filtered.map(

                  product => (

                    <ProductCard

                      key={

                        product.id

                      }

                      product={

                        product

                      }

                    />

                  )

                )

              }


            </div>



            <Pagination

              total={

                total

              }

              onChange={

                setPage

              }

            />


          </>

        }


      </section>


    </>

  )

}


export default Home