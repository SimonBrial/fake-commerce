import { useState, useRef } from "react";
import { MdArrowDropDown } from "react-icons/md";

/* interface IByPrice {
    
} */

const ByPrice = ():JSX.Element => {

    /* const [selectedPrice, setSelectedPrice] = useState<boolean>(false)
    const priceRef = useRef<HTMLParagraphElement>(null)

    const handleSelectedPrice = () => {
        if (priceRef.current) {
            console.log(priceRef.current.innerHTML)
        }
    } */

    return (
        <div className="border-2 border-gray-200 my-2">
            <h1 className="bg-gray-200 p-2 text-center flex justify-between items-center cursor-pointer">Select a price ($) <span className="text-2xl"><MdArrowDropDown /></span></h1>
            <div>
                <p className="m-1 cursor-pointer px-2 py-1 text-center hover:bg-gray-200 transition-all">100 $</p>
                <p className="m-1 cursor-pointer px-2 py-1 text-center hover:bg-gray-200 transition-all" >200 $</p>
                <p className="m-1 cursor-pointer px-2 py-1 text-center hover:bg-gray-200 transition-all">300 $</p>
                <p className="m-1 cursor-pointer px-2 py-1 text-center hover:bg-gray-200 transition-all">400 $</p>
                <p className="m-1 cursor-pointer px-2 py-1 text-center hover:bg-gray-200 transition-all">500 $</p>
            </div>
        </div>
    );
};

export default ByPrice;
