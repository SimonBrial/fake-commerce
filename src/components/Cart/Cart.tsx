import { useState, useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { CartItemsContainer } from "./index";
import { AppContext } from "../../context";
import { useCurrentCategory } from "../../hooks";
import { IContextProps } from "../../interface/interface";

const Cart: React.FC = (): JSX.Element => {
    const [showCart, setShowCart] = useState<boolean>(false);
    const globalContext = useContext(AppContext);
    const { cart } = globalContext as IContextProps;

    const { section } = useCurrentCategory();

    useEffect(() => {
        if (section === "cartpage") {
            setShowCart(false);
        }
    }, [section]);

    const handleCart = () => {
        if (section === "cartpage") {
            setShowCart(false);
        } else {
            setShowCart(!showCart);
        }
    };

    return (
        <>
            <button
                type="button"
                onClick={handleCart}
                className="group flex items-center justify-center px-[6.3rem] sm:px-4 py-2 mx-auto sm:mr-5 mt-2 sm:mt-0 cursor-pointer border-transparent transition border duration-500 ease-in-out hover:bg-cyan-500"
            >
                <MdAddShoppingCart className="text-2xl mx-2  transition text duration-500 ease-in-out group-hover:text-white" />
                <p className="uppercase text-xl transition text duration-500 ease-in-out group-hover:text-white">
                    Cart
                </p>
            </button>
            {showCart ? (
                <div className="sm:absolute z-20 w-[24rem] sm:w-[20rem] sm:right-11 mt-2 sm:top-[4rem] p-2 border-2 border-gray-200 bg-white">
                    <CartItemsContainer items={cart} />
                </div>
            ) : (
                <></>
            )}
        </>
    );
};

export default Cart;
