import { useContext } from "react";
import CartItemPage from "../components/Cart/CartItemPage";
import AppContext from "../context/appContext/AppContext";
import { IProducts } from "../interface/interface";

const CartPage = () => {
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

    const globalContext = useContext(AppContext);
    console.log(globalContext);
    return (
        <div className="relative mx-5">
            <div className="absolute top-[5rem] w-full p-5 border-2 border-red-500">
                <h1 className="text-3xl">Shopping Cart: 3 Items</h1>
                <div className="w-full flex ">
                    <div className="w-2/3 mr-2">
                        <ol className="flex flex-col gap-2 w-full p-1 border-2 border-gray-200">
                            {products.map(
                                (product: IProducts, index: number) => {
                                    return (
                                        <li key={product.id}>
                                            <CartItemPage
                                                description={
                                                    product.description
                                                }
                                                thumbnail={product.thumbnail}
                                                name={product.name}
                                                price={product.price}
                                                title={product.title}
                                            />
                                        </li>
                                    );
                                }
                            )}
                        </ol>
                    </div>
                    <div className="w-1/3">Summary</div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
