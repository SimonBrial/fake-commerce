import { useState, useContext } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import CartItemsContainer from "./CartItemsContainer";
import AppContext from "../../context/appContext/AppContext";

const products = [
    {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        discountPercentage: 12.96,
        rating: 4.69,
        stock: 94,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/1/1.jpg",
            "https://i.dummyjson.com/data/products/1/2.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        ],
    },
    {
        id: 2,
        title: "iPhone X",
        description:
            "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        price: 899,
        discountPercentage: 17.94,
        rating: 4.44,
        stock: 34,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        images: [
            "https://i.dummyjson.com/data/products/2/1.jpg",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        ],
    },
    {
        id: 3,
        title: "Samsung Universe 9",
        description:
            "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: "Samsung",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
    },
];

const Cart: React.FC = (): JSX.Element => {
    const [availableCart, setAvailableCart] = useState<boolean>(false);
    const { products } = useContext(AppContext)
    //  ERROR: La propiedad 'products' no existe en el tipo 'InitialStateType'.ts(2339)


    const handleCart = () => {
        //console.log("From BtnCart");
        setAvailableCart(!availableCart);
        console.log(products)
    };

    return (
        <>
            <div
                onClick={handleCart}
                className="relative group flex items-center px-3 py-2 mr-5 cursor-pointer rounded-md border-transparent transition border duration-500 ease-in-out hover:border-2 hover:border-cyan-500"
            >
                <MdAddShoppingCart className="text-2xl mx-2  transition text duration-500 ease-in-out group-hover:text-cyan-500" />
                <p className="uppercase transition text duration-500 ease-in-out group-hover:text-cyan-500">
                    Cart
                </p>
            </div>
            {availableCart ? (
                <div className="absolute w-[20rem] right-11 top-[5rem] p-2  border-2 border-gray-200 bg-white transition-all duration-500 ease-in-out">
                    <CartItemsContainer items={products} />
                </div>
            ) : (
                ""
            )}
        </>
    );
};

export default Cart;
