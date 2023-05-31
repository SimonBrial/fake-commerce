import { useState } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { SelectedPrice } from "../../types/types";

const ByPrice: React.FC<SelectedPrice> = ({ priceFilter }): JSX.Element => {
    const [priceSelected, setPriceSelected] = useState<number | null>();
    const [selectedPriceIndex, setSelectedPriceIndex] = useState<number | null>(
        0
    );
    const [avelable, setAvelable] = useState<boolean>(false);

    const priceArray: number[] = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900];

    // Pendiente: se debe conservar el valor que se introdujo, cuando se cierra el dropdown, se deja de observar el valor pero sigue estando en el estado
    const handleSelectedPrice = (index: number) => {
        if (priceArray.length > 0) {
            //console.log(priceArray[index])
            setPriceSelected(priceArray[index]);
            setSelectedPriceIndex(index);
            if (priceArray[index] !== 0) {
                const price:number = priceArray[index]
                priceFilter(price);
            }
        }
    };
    //console.log(priceSelected);

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
                    priceArray.map((price: number, index: number) => {
                        const stylePrice =
                            selectedPriceIndex === index
                                ? "m-1 cursor-pointer px-2 py-1 text-center bg-gray-200 transition-all"
                                : "m-1 cursor-pointer px-2 py-1 text-center hover:bg-gray-200 transition-all";

                        return (
                            <p
                                onClick={() => handleSelectedPrice(index)}
                                className={stylePrice}
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
