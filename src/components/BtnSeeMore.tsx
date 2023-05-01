import React, { ReactNode } from "react";

interface IBtnSeeMore {
    description?: string;
    styleIcon?: string;
    styleBtn?: string;
    icon?: ReactNode;
}

const BtnSeeMore = ({
    description,
    styleIcon,
    styleBtn,
    icon,
}: IBtnSeeMore): JSX.Element => {
    return (
        <button className={styleBtn}>
            <span className={styleIcon}>{icon}</span>
            {description}
        </button>
    );
};

export default BtnSeeMore;
