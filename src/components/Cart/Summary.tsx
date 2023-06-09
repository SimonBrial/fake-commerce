import { useState } from "react";
import { BtnBuy, BtnSeeMore } from "../Buttons";
import { MdDiscount, MdArrowBackIosNew } from "react-icons/md";
import { SummaryCost, ShippingDestination, TotalToPay } from "./index";

const Summary: React.FC = (): JSX.Element => {
    /* const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleBuy = () => {
        setIsOpen(true);
    }; */

    return (
        <div className="relative border-2 border-gray-200 p-1 cursor-default">
            <div className="text-center relative w-full">
                <h1 className="text-4xl sm:text-5xl py-2">Summary</h1>
                <span className="absolute h-1 w-48 bg-red-500 top-12 sm:top-14 right-[5.7rem] sm:right-1/4"></span>
            </div>
            <div className="my-2 flex flex-col justify-center items-center cursor-pointer">
                <ShippingDestination />
            </div>
            <SummaryCost />
            <div className="flex items-center justify-center py-2 mt-1 bg-yellow-200 text-yellow-500 text-md sm:text-xl cursor-default">
                <span className="text-2xl">
                    <MdDiscount />
                </span>
                <p>The discount apply is the 35%</p>
            </div>
            <div className="flex flex-col justify-center">
                <BtnBuy />
                <BtnSeeMore
                    dir="/"
                    description="Go back to Store"
                    icon={<MdArrowBackIosNew />}
                    styleBtn="flex items-center justify-center w-full py-2 mt-1 bg-gray-200 text-xl hover:bg-gray-300 transition-all"
                    styleIcon="text-2xl"
                />
            </div>
        </div>
    );
};

export default Summary;
