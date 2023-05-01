import { useState } from "react";
import CartItem from "./CartItem";
import { FaDollarSign } from "react-icons/fa";
import BtnSeeMore from "./BtnSeeMore";
import { ICartItem } from "../interface/interface";

// Como import interfaces?

interface ICartItemContainer {
    products: ICartItem[];
}

const CartItemsContainer = ({ products }: ICartItemContainer): JSX.Element => {
    return (
        <ol>
            {products.map((product: ICartItem, index: number) => {
                return (
                    <li
                        key={product.id}
                        className="flex flex-col gap-2 w-full p-1 border-2 border-gray-200"
                    >
                        <CartItem
                            description={product.description}
                            images={product.images}
                            name={product.name}
                            price={product.price}
                            title={product.title}
                        />
                    </li>
                );
            })}
            <BtnSeeMore
                description="Buy it!"
                icon={<FaDollarSign />}
                styleBtn="bg-gray-200 mt-2 w-full flex items-center justify-center text-2xl py-1 hover:bg-gray-300 transition-all"
            />
        </ol>
    );
};

export default CartItemsContainer;
