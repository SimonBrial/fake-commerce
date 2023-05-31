import React, { ReactNode } from "react";
import { IBtnAddCart } from "../../interface/interface";

const BtnAddCart: React.FC<IBtnAddCart> = ({
    handleAction,
    styleIcon,
    StyleText,
    styleBtn,
    icon,
    text,
}): JSX.Element => {
    return (
        <button className={styleBtn} onClick={handleAction}>
            <span className={styleIcon}>{icon}</span>
            <p className={StyleText}>{text}</p>
        </button>
    );
};

export default BtnAddCart;
