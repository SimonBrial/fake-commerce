import React from "react";
import { BsCartPlus } from "react-icons/bs";

const BtnAddCart = (): JSX.Element => {
    return (
        <button className="mx-1">
            <p className="flex transition-all hover:bg-emerald-200 bg-emerald-100 text-emerald-700 px-3 py-1">
                <span className="mr-2 text-emerald-700">
                    <BsCartPlus />
                </span>
                add to cart
            </p>
        </button>
    );
};

export default BtnAddCart;
