import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IBtnGeneral {
    icon: ReactNode;
    direction: string;
    text: string;
}

const BtnGeneral = ({ icon, direction, text }: IBtnGeneral): JSX.Element => {
    return (
        <Link
            to={direction}
            className="uppercase flex items-center px-2 py-1 border-transparent transition border duration-500 ease-in-out hover:border-2 hover:border-b-cyan-500"
        >
            <div className="text-2xl mx-1 cursor-pointer">{icon}</div>
            <p className="font-HeroDescription text-xl">{text}</p>
        </Link>
    );
};

export default BtnGeneral;
