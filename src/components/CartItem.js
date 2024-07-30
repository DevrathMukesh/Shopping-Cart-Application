import { MdDeleteSweep } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../Redux/Slices/CartSlice";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeItem = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  };

  return (
    <div className="flex items-center justify-between bg-[#FFFFFF] p-5 rounded-lg shadow-md mb-4 border border-[#FFCFOO]">
      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
      <div className="flex flex-col flex-grow ml-4">
        <p className="text-[#00916E] font-semibold">{item.title}</p>
        <p className="text-slate-600 text-xs">{item.description.split(" ").slice(0, 10).join(" ") + "..."}</p>
        <p className="text-[#EE6123] font-bold">${item.price}</p>
      </div>
      <button className="text-[#FA003F] text-2xl" onClick={removeItem}>
        <MdDeleteSweep />
      </button>
    </div>
  );
};

export default CartItem;
