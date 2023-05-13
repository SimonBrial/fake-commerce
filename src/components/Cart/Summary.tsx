import React from "react";
import BtnBuy from "../Buttons/BtnBuy";
import { MdDiscount, MdArrowBackIosNew } from "react-icons/md";
import BtnSeeMore from "../Buttons/BtnSeeMore";
import SummaryCost from "./SummaryCost";

const Summary: React.FC = (): JSX.Element => {
    return (
        <div className="border-2 border-gray-200 p-1 cursor-default">
            <div className="text-center relative w-full">
                <h1 className="text-5xl py-2">Summary</h1>
                <span className="absolute h-1 w-48 bg-red-500 top-14 right-1/4"></span>
            </div>
            <div className="my-2 flex flex-col justify-center items-center cursor-pointer">
                <select className="form-select py-2 px-5 w-[23rem] text-start text-2xl cursor-pointer">
                    <option value="Shipping destination" selected>
                        Shipping destination *
                    </option>
                    <option value="Santiago de Chile, Chile" className="px-1">
                        Santiago de Chile, Chile
                    </option>
                    <option value="Buenos Aires, Argentina">
                        Buenos Aires, Argentina
                    </option>
                    <option value="Caracas, Venezuela">
                        Caracas, Venezuela
                    </option>
                    <option value="Bogota, Colombia">Bogota, Colombia</option>
                    <option value="CDMX, Mexico">CDMX, Mexico</option>
                </select>
            </div>
            <SummaryCost />
            <div className="flex items-center justify-center py-2 mt-1 bg-yellow-200 text-yellow-500 text-xl cursor-default">
                <span className="text-2xl">
                    <MdDiscount />
                </span>
                <p>
                    The discount apply is the <span className="">35%</span>
                </p>
            </div>
            <div className="flex flex-col justify-center">
                <BtnBuy />
                <BtnSeeMore
                    // Se debe agrgar el direccionamientos por seccion, es decir, volver a la seccion desde donde fue redireccionado
                    dir="/clothes"
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
