import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png';

const Navbar = () => {
    const cart = useSelector((state) => state.cart.items);

    return (
        <div className="bg-[#00916E]">
            <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto bg-[#00916E] text-[#FEEFE5]">
                <NavLink to="/">
                    <div className="ml-5">
                        <img src={logo} className="lg:h-14 md:h-10 h-8" alt="Site Logo" />
                    </div>
                </NavLink>

                <div className="flex items-center font-medium mr-5 space-x-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) => 
                            isActive ? "text-[#FFCFOO] font-semibold" : "text-[#FEEFE5]"
                        }
                    >
                        <p>Home</p>
                    </NavLink>

                    <NavLink
                        to="/cart"
                        className={({ isActive }) => 
                            isActive ? "text-[#FFCFOO] font-semibold" : "text-[#FEEFE5]"
                        }
                    >
                        <div className="relative">
                            <FaShoppingCart className="text-2xl" />
                            {cart.length > 0 && (
                                <span
                                    className="absolute -top-1 -right-2 bg-[#EE6123] text-xs w-5 h-5 flex 
                                    justify-center items-center animate-bounce rounded-full text-white"
                                >
                                    {cart.length}
                                </span>
                            )}
                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
