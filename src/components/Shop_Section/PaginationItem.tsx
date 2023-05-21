import React from "react";

interface IGenerationItem {
    count: number;
}

const PaginationItem: React.FC<IGenerationItem> = ({ count }): JSX.Element => {
    const numberPage = Array.from({ length: count }, (_, index) => (
        <a className="py-1 px-3 mx-1 border-2 border-gray-200 flex items-center font-medium cursor-pointer transition-all hover:bg-cyan-400" key={index}>
            {index + 1}
        </a>
    ));

    return <>{numberPage}</>;
};

export default PaginationItem;
