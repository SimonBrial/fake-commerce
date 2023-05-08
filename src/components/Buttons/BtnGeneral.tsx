import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IBtnGeneral {
    icon: ReactNode;
    direction: string;
    text: string;
}

const BtnGeneral: React.FC<IBtnGeneral> = ({ icon, direction, text }): JSX.Element => {
    return (
        <Link
            to={direction}
            className="group uppercase flex items-center px-2 py-1 border-transparent transition border duration-500 ease-in-out hover:border-2 hover:border-b-cyan-500"
        >
            <span className="text-2xl mx-1 cursor-pointer transition text duration-500 ease-in-out group-hover:text-cyan-500">{icon}</span>
            <p className="font-HeroDescription text-xl transition text duration-500 ease-in-out group-hover:text-cyan-500">{text}</p>
        </Link>
    );
};

export default BtnGeneral;
