import { useEffect, useContext } from "react";
import { CartItemPage, Summary } from "../components/Cart";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context";
import { IContextProps, IContextProducts } from "../interface/interface";

const CartPage: React.FC = (): JSX.Element => {

    const globalContext = useContext(AppContext);
    const { cart } = globalContext as IContextProps;

    const navigate = useNavigate();

    useEffect(() => {
        if (cart?.length == 0) {
            navigate("/");
        }
    }, [cart?.length]);

    return (
        <div className="relative sm:mx-5">
            <div className="absolute top-[5rem] w-full p-3 sm:p-5">
                {cart !== undefined ? (
                    <>
                        <h1 className="text-4xl mb-3 text-center sm:text-start cursor-default">
                            Shopping Cart:{" "}
                            <span className="text-cyan-400">
                                {cart.length}
                                {cart.length > 1 ? " Items" : " Item"}
                            </span>
                        </h1>
                        <div className="w-full flex flex-col sm:flex-row">
                            <div className="w-full sm:w-2/3 mr-2">
                                <ol className="flex flex-col gap-2 w-full p-1 border-2 border-gray-200">
                                    {cart.map(
                                        (
                                            cartItem: IContextProducts,
                                            index: number
                                        ) => {
                                            return (
                                                <li key={cartItem.id}>
                                                    <CartItemPage
                                                        description={cartItem.description}
                                                        quantity={cartItem.quantity}
                                                        category={cartItem.category}
                                                        images={cartItem.images}
                                                        price={cartItem.price}
                                                        title={cartItem.title}
                                                        stock={cartItem.stock}
                                                        brand={cartItem.brand}
                                                        id={cartItem.id}
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
