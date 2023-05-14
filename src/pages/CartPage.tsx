import { useContext } from "react";
import CartItemPage from "../components/Cart/CartItemPage";
import Summary from "../components/Cart/Summary";
import AppContext from "../context/appContext/AppContext";
import { IProducts, IContextProps } from "../interface/interface";

const CartPage: React.FC = (): JSX.Element => {
    /* const productsTest = [
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
    ]; */

    const globalContext = useContext(AppContext);
    const { products } = globalContext as IContextProps;
    //console.log(products);

    return (
        <div className="relative mx-5">
            <div className="absolute top-[5rem] w-full p-5">
                {products !== undefined ? (
                    <>
                        <h1 className="text-2xl sm:text-4xl mb-3 text-center sm:text-start">
                            Shopping Cart:{" "}
                            <span className="text-cyan-400">
                                {products.length}
                                {products.length > 1 ? " Items" : " Item"}
                            </span>
                        </h1>
                        {/* <span className="absolute h-1 w-full sm:w-[25rem] bg-red-500 top-14"></span> */}
                        <div className="w-full flex flex-col sm:flex-row">
                            <div className="w-full sm:w-2/3 mr-2">
                                <ol className="flex flex-col gap-2 w-full p-1 border-2 border-gray-200">
                                    {products.map(
                                        (product: IProducts, index: number) => {
                                            return (
                                                <li key={product.id}>
                                                    <CartItemPage
                                                        description={
                                                            product.description
                                                        }
                                                        thumbnail={
                                                            product.thumbnail
                                                        }
                                                        category={
                                                            product.category
                                                        }
                                                        price={product.price}
                                                        title={product.title}
                                                        stock={product.stock}
                                                        brand={product.brand}
                                                        name={product.name}
                                                    />
                                                </li>
                                            );
                                        }
                                    )}
                                </ol>
                            </div>
                            <div className="w-full sm:w-1/3 mt-2 sm:mt-0">
                                <Summary />
                            </div>
                        </div>
                    </>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
};

export default CartPage;
