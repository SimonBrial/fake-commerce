import React, { ReactNode } from "react";
//import { BsCartPlus } from "react-icons/bs";

interface IBtnAddCart {
    styleIcon: string;
    StyleText?: string;
    styleBtn: string;
    icon: ReactNode;
    text?: string;
}

const BtnAddCart: React.FC<IBtnAddCart> = ({
    styleIcon,
    StyleText,
    styleBtn,
    icon,
    text,
}): JSX.Element => {
    return (
        <button className={styleBtn}>
            <span className={styleIcon}>{icon}</span>
            <p className={StyleText}>{text}</p>
        </button>
    );
};

export default BtnAddCart;
