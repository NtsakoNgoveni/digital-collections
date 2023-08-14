import { Link } from "react-router-dom";


export default function Navbar()
{
    return (
        <nav>
            <ul>
                <li className="shopIcon"><Link to='/' >Shop</Link></li>
                <li className="cartIcon"><Link to='/Cart'>Cart</Link></li>
            </ul>
        </nav>
    )
}
