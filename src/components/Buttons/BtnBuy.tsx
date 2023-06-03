import { useState } from "react";
import { TotalToPay } from "../Cart";
import { createPortal } from "react-dom";

/* type ModalTypes = {
    fnIsOpen: (stateModal: boolean) => boolean;
}; */

const BtnBuy: React.FC = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const modalContainer = document.querySelector("#hereModal");
    if (modalContainer) {
        return (
            <>
                <button
                    onClick={() => setIsOpen(true)}
                    className="w-full mt-1 py-3 text-xl text-white bg-cyan-400 hover:bg-cyan-500 transition-all"
                >
                    Checkout and buy it!
                </button>
                {isOpen &&
                    createPortal(
                        <TotalToPay fnIsOpen={setIsOpen} />,
                        modalContainer
                    )}
            </>
        );
    } else {
        // Lógica de manejo cuando el contenedor modal no se encuentra
        return <></>;
    }

    /* return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="w-full mt-1 py-3 text-xl text-white bg-cyan-400 hover:bg-cyan-500 transition-all"
            >
                Checkout and buy it!
            </button>

            {isOpen &&
                createPortal(
                    <TotalToPay fnIsOpen={setIsOpen} />,
                    document.querySelector("#hereModal")
                )}
        </>
    ); */
};

export default BtnBuy;
