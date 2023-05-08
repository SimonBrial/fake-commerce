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
            <p className={StyleText}>
                <span className={styleIcon}>
                    {icon}
                </span>
                {text}
            </p>
        </button>
    );
};

export default BtnAddCart;
