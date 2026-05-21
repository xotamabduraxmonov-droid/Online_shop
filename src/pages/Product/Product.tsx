import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'

import './product.scss'


const Product = () => {

  const { id } =
    useParams()


  const [

    product,

    setProduct

  ] =

    useState<any>(
      null
    )


  const [

    loading,

    setLoading

  ] =

    useState(
      true
    )



  useEffect(

    () => {

      axios

        .get(

          `https://dummyjson.com/products/${id}`

        )

        .then(

          res => {

            console.log(

              res.data.images

            )


            setProduct(

              res.data

            )


            setLoading(

              false

            )

          }

        )

        .catch(

          () => {

            setLoading(

              false

            )

          }

        )

    },

    [

      id

    ]

  )



  if (

    loading

  ) {

    return (

      <h1>

        Loading...

      </h1>

    )

  }



  if (

    !product

  ) {

    return (

      <h1>

        Product not found

      </h1>

    )

  }



  const discount =

    product.price -

    (

      product.price *

      product.discountPercentage

      /

      100

    )



  return (

    <section
      className='product-page'
    >


      <div
        className='product glass'
      >



        <Swiper

          key={

            product.id

          }

          modules={[

            Navigation

          ]}

          navigation

          className='product-swiper'

          spaceBetween={20}

          slidesPerView={1}

        >


          {

            product?.images?.map(

              (

                img:string,

                index:number

              ) => (

                <SwiperSlide

                  key={index}

                >


                  <div
                    className='image-box'
                  >


                    <img

                      src={img}

                      alt={

                        product.title

                      }

                    />


                  </div>


                </SwiperSlide>

              )

            )

          }


        </Swiper>




        <div
          className='info'
        >


          <h1>

            {

              product.title

            }

          </h1>



          <p>

            {

              product.description

            }

          </p>



          <h2>

            $

            {

              discount.toFixed(

                0

              )

            }

          </h2>



          <p>

            Old price:

            $

            {

              product.price

            }

          </p>



          <p>

            ⭐ Rating:

            {

              product.rating

            }

          </p>



          <p>

            📦 Stock:

            {

              product.stock

            }

          </p>



          <p>

            🏷 Brand:

            {

              product.brand

            }

          </p>



          <p>

            🗂 Category:

            {

              product.category

            }

          </p>



          <p>

            🔥 Discount:

            {

              product.discountPercentage

            }

            %

          </p>



          <button>

            Buy now

          </button>


        </div>


      </div>


    </section>

  )

}


export default Product