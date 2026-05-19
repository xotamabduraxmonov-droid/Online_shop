import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import './navbar.scss'

interface Props {
  setSearch: (value: string) => void
}

const Navbar = ({ setSearch }: Props) => {

  return (

    <header className='navbar glass'>

      <div className='logo'>

        ShopX

      </div>


      <Search
        setSearch={setSearch}
      />


      <nav>

        <Link to='/'>

          Products

        </Link>

      </nav>


    </header>

  )

}

export default Navbar