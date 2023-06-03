// React Hooks & React Router dom
import { useState, useContext } from "react";
// React icons
import { FaDollarSign, FaTrash } from "react-icons/fa";
// Interface & Types
import { IContextProducts, IContextProps } from "../../interface/interface";
import { ProductsTypes } from "../../types/types";
// Components
import CartItem from "./CartItem";
import { TiDelete } from "react-icons/ti";
import { BtnAddCart, BtnSeeMore } from "../Buttons";
import { AppContext } from "../../context";

const CartItemsContainer: React.FC<ProductsTypes> = ({
    items,
}): JSX.Element => {

const globalContext = useContext(AppContext);
const { clearCart } = globalContext as IContextProps;

    return (
        <>
            {items && items.length > 0 ? (
                <>
                    <ol className="flex flex-col gap-2 w-full p-1 border-2 border-gray-200">
                        {items.map((item: IContextProducts, index: number) => {
                            return (
                                <li key={item.id}>
                                    <CartItem
                                        description={item.description}
                                        images={item.images}
                                        price={item.price}
                                        title={item.title}
                                        brand={item.brand}
                                        id={item.id}
                                    />
                                </li>
                            );
                        })}
                    </ol>
                    <div className="flex gap-2">
                        <BtnSeeMore
                            dir="cartpage"
                            description="Buy it!"
                            icon={<FaDollarSign />}
                            styleBtn="bg-gray-200 mt-2 w-1/2 flex items-center justify-center text-2xl py-1 hover:bg-gray-300 transition-all"
                        />
                        <BtnAddCart
                            icon={<FaTrash />}
                            styleIcon="text-2xl text-white"
                            styleBtn="w-1/2 h-10 bg-red-500 mt-2 flex gap-2 items-center justify-center text-2xl py-1 hover:bg-red-600 transition-all"
                            text="Delete Cart"
                            StyleText="text-xl text-white mt-0.5"
                            handleAction={clearCart}
                        />
                    </div>
                </>
            ) : (
                <p className="text-center py-1">No items found.</p>
            )}
        </>
    );
};

export default CartItemsContainer;
