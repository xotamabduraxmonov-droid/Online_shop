import { Link } from 'react-router-dom'
import './product-card.scss'

interface Props {
  product: any
}

const ProductCard = ({ product }: Props) => {

  const discount =
    product.price -
    (
      product.price *
      product.discountPercentage /
      100
    )

  return (

    <Link to={`/product/${product.id}`}>

      <div className="card glass">

        <img
          src={product.thumbnail}
          alt={product.title}
        />

        <h2>
          {product.title}
        </h2>


        <p className="description">
          {product.description}
        </p>


        <div className="prices">

          <h3>
            $
            {
              discount.toFixed(0)
            }
          </h3>


          <span>
            $
            {
              product.price
            }
          </span>

        </div>


        <p>

          Stock:

          {
            product.stock
          }

        </p>


        <button>

          Open

        </button>


      </div>

    </Link>

  )

}

export default ProductCard