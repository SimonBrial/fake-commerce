import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";

const ByPrice: React.FC = (): JSX.Element => {
    const [price, setPrice] = useState<string | null>();
    const [selectedPriceIndex, setSelectedPriceIndex] = useState<number | null>(
        null
    );
    const [avelable, setAvelable] = useState<boolean>(false);

    const priceArray: string[] = ["100", "200", "300", "400", "500"];

    const handleSelectedPrice = (index: number) => {
        if (priceArray.length > 0) {
            setPrice(priceArray[index]);
            setSelectedPriceIndex(index);
        } else {
            setPrice("Don't have price");
        }
    };
    //console.log(price);

    const handleDropDown = () => {
        setAvelable(!avelable);
    };

    return (
        <section className="mt-2 border-2 border-gray-200 w-full">
            <h2
                onClick={handleDropDown}
                className="bg-gray-200 p-2 text-center flex justify-between items-center cursor-pointer"
            >
                Select a price ($)
                <span
                    className={
                        avelable
                            ? "text-2xl transition duration-200 rotate-180"
                            : "text-2xl transition duration-200 rotate-0"
                    }
                >
                    <MdArrowDropDown />
                </span>
            </h2>
            <div>
                {avelable ? (
                    priceArray.map((price: string, index: number) => {
                        const stylePrice =
                            selectedPriceIndex === index
                                ? "m-1 cursor-pointer px-2 py-1 text-center bg-gray-200 transition-all"
                                : "m-1 cursor-pointer px-2 py-1 text-center hover:bg-gray-200 transition-all";

                        return (
                            <p
                                className={stylePrice}
                                onClick={() => handleSelectedPrice(index)}
                                key={index}
                            >
                                {price} $
                            </p>
                        );
                    })
                ) : (
                    <p className=""></p>
                )}
            </div>
        </section>
    );
};

export default ByPrice;
