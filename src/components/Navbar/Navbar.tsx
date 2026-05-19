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

        setSearch={

          setSearch

        }

      />


    </header>

  )

}

export default Navbar