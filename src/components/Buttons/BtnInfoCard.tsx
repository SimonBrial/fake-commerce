import React from "react";
import { IBtnInfoCard } from "../../interface/interface";

const BtnInfoCard: React.FC<IBtnInfoCard> = ({
    description,
    handleShow,
    styleText,
    styleBtn,
}) => {
    return (
        <button className={styleBtn} onClick={handleShow}>
            <p className={styleText}>{description}</p>
        </button>
    );
};

export default BtnInfoCard;
