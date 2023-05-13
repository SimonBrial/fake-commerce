import { useContext } from "react";
import AppContext from "../../context/appContext/AppContext";
import {
    IContextProps,
    IProducts,
    IContextProducts,
} from "../../interface/interface";
import Card from "./Card";

const CardContainer: React.FC = (): JSX.Element => {
    const globalContext = useContext(AppContext);
    const { products } = globalContext as IContextProps;

    return (
        <div className="mx-2 p-2 border-2 border-gray-200 flex flex-wrap justify-around">
            {products !== undefined && products.length > 0 ? (
                products.map(
                    (product: IProducts | IContextProducts, index: number) => (
                        <article
                            key={product.id}
                            className="w-[18.5rem] h-full m-2 border-2 border-gray-200 p-2 hover:bg-gray-200 transition-all"
                        >
                            <Card
                                images={product.images}
                                price={product.price}
                                title={product.title}
                                rating={product.rating}
                                description={product.description}
                                stock={product.stock}
                            />
                        </article>
                    )
                )
            ) : (
                <h1>Products not found!</h1>
            )}
        </div>
    );
};

export default CardContainer;
