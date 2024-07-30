import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);

  const totalAmount = useMemo(() => cart.reduce((acc, curr) => acc + curr.price, 0), [cart]);

  return (
    <div className="bg-[#FEEFE5] min-h-screen">
      {cart.length > 0 ? (
        <div className="flex gap-16 max-w-6xl p-6 mx-auto flex-wrap lg:flex-nowrap">
          <div className="lg:w-[70%]">
            {cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
            ))}
          </div>
          <div className="md:w-[30%] w-full flex flex-col gap-8 justify-between">
            <div className="mt-20">
              <p className="text-xl text-[#00916E] uppercase font-semibold">Your Cart</p>
              <p className="text-5xl font-semibold text-[#00916E] uppercase mb-4">Summary</p>
              <p className="font-semibold text-xl text-slate-700">
                Total Items: <span className="font-normal">{cart.length}</span>
              </p>
            </div>
            <div className="mb-20">
              <p className="text-slate-700 text-xl font-semibold mb-5">
                Total Amount:
                <span className="font-bold ml-2 text-[#00916E]">${totalAmount.toFixed(2)}</span>
              </p>
              <button className="text-lg w-full py-2.5 rounded-lg font-bold text-white bg-[#00916E] border-2 border-[#00916E] hover:bg-white hover:text-[#00916E] transition-all duration-300 ease-in">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-[calc(100vh-80px)] flex flex-col gap-6 justify-center items-center bg-[#FEEFE5]">
          <h1 className="font-semibold text-xl text-[#EE6123]">Your Cart is Empty!</h1>
          <Link to={"/"}>
            <button className="bg-[#00916E] text-white text-md uppercase font-semibold py-3 px-10 rounded-md border-2 border-[#00916E] hover:bg-white hover:text-[#00916E] ease-in transition-all duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
