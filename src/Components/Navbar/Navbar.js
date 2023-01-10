import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../features/authSlice';
import { toast } from 'react-toastify';



   
function Navbar() {

    
    const [navActive, setNavactive] = useState(false);
    const [searchActive, setSearchactive] = useState(false);
    const [stickyActive, setStickyActive] = useState(false);
     
    const carts = useSelector(state => state.carts.cartItems)
    const authuser = useSelector(state => state.auth)
    const usertoken = localStorage.getItem("token")
    const dispatch = useDispatch();
    useEffect(() => {
        const handleScroll = event => {
           
            if (window.scrollY > 0) {
                setStickyActive(true)
            } else {
                setStickyActive(false)
            }
        };
        const searchScroll = () => {
            setSearchactive(false)
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', searchScroll);
        
        
        
    }, []);

    useEffect(() => {
        const usertoken = localStorage.getItem("token")
    },[usertoken,authuser._id])
    const mobilemenuactive = () => {
        setNavactive(true)
    }
    const mobilemenuinactive = () => {
        setNavactive(false)
    }

   
  return (
      <div>
          <header className={stickyActive?"active":""}>
              <Link to="/" class="logo">My shop</Link>

              <nav class="nav" className={navActive?"active":""}>
                  <div id="nav-closed" class="fas fa-times" onClick={mobilemenuinactive}></div>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/shop">Shop</Link></li>
                      <li><Link to="/blogs">Blogs</Link></li>
                      {
                          usertoken!==null ? <>
                              <li><button className='logout-btn' onClick={() => { dispatch(logoutUser(null)); toast.warning("Logged out",{position:"bottom-left"})}}>Logout</button></li>
                          </> : <>
                                  <li><Link to="/login">Login</Link></li>
                                  <li><Link to="/register">Register</Link></li>
                          </>
                      }
                      
                  </ul>
              </nav>

              <div class="icons">
                  <div class="fas fa-bars" id="menu_btn" onClick={mobilemenuactive}></div>
                  <Link to="/cart" class="fas fa-shopping-cart"><span>{carts.length}</span></Link>
                  <div id="search-btn" class="fas fa-search" onClick={()=>setSearchactive(true)}></div>
              </div>


          </header>

          <div  className={searchActive? "search-form active" : "search-form"}>
              <div id="close-search" class="fas fa-times" onClick={() => setSearchactive(false)}></div>
              <form>
                  <input type="search" placeholder="search here" />
                  <label for="search-box" class="fas fa-search"></label>
              </form>
          </div>
    </div>
  )
}

export default Navbar