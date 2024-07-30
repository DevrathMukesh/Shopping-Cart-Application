import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    const fetchProductData = async () => {
        setLoading(true);
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setPosts(data);
        } catch (error) {
            console.error("Error fetching data:", error);
            setPosts([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductData();
    }, []);

    return (
        <div className="bg-[#FEEFE5] min-h-screen">
            {loading ? (
                <Spinner />
            ) : posts.length > 0 ? (
                <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl p-6 mx-auto my-7">
                    {posts.map((post) => (
                        <Product key={post.id} post={post} />
                    ))}
                </div>
            ) : (
                <div className="w-screen h-screen flex justify-center items-center bg-[#FFCFOO]">
                    <p className="font-bold text-[#58355E] text-2xl">No Data Found</p>
                </div>
            )}
        </div>
    );
};

export default Home;
