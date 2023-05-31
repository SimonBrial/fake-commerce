import { IContextProducts } from "../../interface/interface";
import { ProductsContextTypes } from "../../types/types";
import { Card } from "./index";

const CardContainer: React.FC<ProductsContextTypes> = ({
    products,
}): JSX.Element => {
    return (
        <section className="sm:mx-2 p-2 border-2 border-gray-200 flex flex-col justify-center items-center">
            <div className="flex flex-wrap">
                {products !== undefined && products.length > 0 ? (
                    products.map((product: IContextProducts) => (
                        <div
                            key={product.id}
                            className="w-full sm:w-[18.5rem] h-full m-2 border-2 border-gray-200 p-2 hover:bg-gray-200 transition-all"
                        >
                            <Card
                                images={product.images}
                                price={product.price}
                                title={product.title}
                                rating={product.rating}
                                description={product.description}
                                stock={product.stock}
                                id={product.id}
                            />
                        </div>
                    ))
                ) : (
                    <h1 className="text-2xl">Products not found!</h1>
                )}
            </div>
            <div className="pt-5 pb-2 flex flex-col items-center">
            </div>
        </section>
    );
};

export default CardContainer;
