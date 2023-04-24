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
            className="group uppercase flex items-center px-2 py-1 border-transparent transition border duration-500 ease-in-out hover:border-2 hover:border-b-cyan-500"
        >
            <div className="text-2xl mx-1 cursor-pointer transition text duration-500 ease-in-out group-hover:text-cyan-500">{icon}</div>
            <p className="font-HeroDescription text-xl transition text duration-500 ease-in-out group-hover:text-cyan-500">{text}</p>
        </Link>
    );
};

export default BtnGeneral;
