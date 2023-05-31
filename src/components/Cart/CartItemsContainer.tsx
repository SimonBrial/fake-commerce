// React Hooks & React Router dom
import { useState, useContext } from "react";
// React icons
import { FaDollarSign } from "react-icons/fa";
// Interface & Types
import { IContextProducts } from "../../interface/interface";
import { ProductsTypes } from "../../types/types";
// Components
import BtnSeeMore from "../Buttons/BtnSeeMore";
import CartItem from "./CartItem";

const CartItemsContainer: React.FC<ProductsTypes> = ({
    items,
}): JSX.Element => {

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
                    <BtnSeeMore
                        dir="cartpage"
                        description="Buy it!"
                        icon={<FaDollarSign />}
                        styleBtn="bg-gray-200 mt-2 w-full flex items-center justify-center text-2xl py-1 hover:bg-gray-300 transition-all"
                    />
                </>
            ) : (
                <p className="text-center py-1">No items found.</p>
            )}
        </>
    );
};

export default CartItemsContainer;
