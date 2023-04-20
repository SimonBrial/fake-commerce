import React from "react";
import CategoryHome from "./CategoryHome";
import categorys from "../fakeData/category.json";

interface ICategory<T> {
    elements: T[];
    render: (
        element: T,
        index: number,
        Description: string
    ) => React.ReactElement;
}

const Container: React.FC = () => {
    const categoryList: ICategory<string> = {
        elements: categorys.map((category) => category.image),
        render: (element: string, index: number, description: string) => (
            <CategoryHome key={index} img={element} description={description} />
        ),
    };

    return (
        <div>
            <h1>Shop Our Top Categories</h1>
            {categoryList.elements.map((element, index) =>
                categoryList.render(element, index, categorys[index].name)
            )}
        </div>
    );
};

export default Container;
