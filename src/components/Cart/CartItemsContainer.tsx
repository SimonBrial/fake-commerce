import { useState } from "react";
import CartItem from "./CartItem";
import { FaDollarSign } from "react-icons/fa";
import BtnSeeMore from "../Buttons/BtnSeeMore";
import { IContextProducts } from "../../interface/interface";
import { ProductsTypes } from "../../types/types";

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
