import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const Product = ({ post }) => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(post));
        toast.success("Item added to Cart");
    };

    const removeFromCart = () => {
        dispatch(remove(post.id));
        toast.error("Item removed from Cart");
    };

    return (
        <div className="flex flex-col items-center justify-between w-full gap-4 p-4 rounded-xl border-2 border-[#FFCFOO] bg-[#FFFFFF] shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300">
            <div>
                <p className="text-[#333333] font-semibold text-lg text-left truncate w-40 mt-1">
                    {post.title}
                </p>
            </div>
            <div>
                <p className="w-40 text-[#666666] font-normal text-xs text-left">
                    {post.description.split(" ").slice(0, 10).join(" ") + "..."}
                </p>
            </div>
            <div className="h-[180px]">
                <img src={post.image} className="h-full w-full object-cover" alt={post.title} />
            </div>
            <div className="flex justify-between items-center w-full mt-4">
                <div>
                    <p className="text-[#EE6123] font-semibold">${post.price}</p>
                </div>
                {
                    cart.some((currentProduct) => currentProduct.id === post.id) ?
                        (<button
                            className="text-white bg-[#FA003F] border-2 border-[#FA003F] rounded-full font-semibold text-xs px-3 py-1 uppercase hover:bg-[#E04B4F] transition duration-300"
                            onClick={removeFromCart}>
                            Remove Item
                        </button>) :
                        (<button
                            className="text-white bg-[#00916E] border-2 border-[#00916E] rounded-full font-semibold text-xs px-3 py-1 uppercase hover:bg-[#007C5F] transition duration-300"
                            onClick={addToCart}>
                            Add to Cart
                        </button>)
                }
            </div>
        </div>
    );
};

export default Product;
