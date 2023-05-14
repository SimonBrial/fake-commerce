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
            className="group relative uppercase flex items-center justify-center px-2 py-1 mt-3 m-auto sm:my-0 w-[17.2rem] sm:w-full"
        >
            <span className="text-2xl mx-1 cursor-pointer transition text duration-500 ease-in-out group-hover:text-cyan-500">{icon}</span>
            <p className="font-HeroDescription text-xl transition text duration-500 ease-in-out group-hover:text-cyan-500">{text}</p>
            <span className="absolute -bottom-1 h-1 w-full z-10 bg-transparent group-hover:bg-cyan-500 transition duration-500 ease-in-out"></span>
        </Link>
    );
};

export default BtnGeneral;
