import React from "react";
import Card from "./Card";

const CardContainer = ():JSX.Element => {
    return (
        <div className="mx-2 p-2 border-2 border-gray-200 flex flex-wrap justify-around">
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
};

export default CardContainer;
