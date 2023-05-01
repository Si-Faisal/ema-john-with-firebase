import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../ContextProvider/ContextProvider';
import { Button } from 'react-bootstrap';

const Header = () => {
    const { user, logout,signin } = useContext(AuthContext);
     
    const handlelogout = () => {
        logout()
            .then()
            .catch(error => {
            console.error(error)
        })
    }
        return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    
                    {
                        signin && <> {user ?
                            <> <p className='text-white'>{user.email}</p> <Link><Button onClick={handlelogout}>logout</Button></Link> </> :
                            <> <Link to='/login'><Button>login</Button></Link> </> } </>
                    }
                    {
                        signin || <Link to='/login'><Button>login</Button></Link>
                    }
                {/* {
                      user  ?
                        <> <p className='text-white'>{user.email}</p> <Link><Button onClick={handlelogout}>logout</Button></Link> </> :
                        <> <Link to='/login'><Button>login</Button></Link> </>
                } */}
                {/* <Link to="/login">Login</Link>
                 */}
                    {/* <Link to="/signup">signup</Link> */}
                </div>
               
        </nav>
    );user
};

export default Header;