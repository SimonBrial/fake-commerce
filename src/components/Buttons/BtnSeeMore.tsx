import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";

interface IBtnSeeMore {
    description?: string;
    styleIcon?: string;
    styleBtn?: string;
    icon?: ReactNode;
    dir: string;
}

const BtnSeeMore: React.FC<IBtnSeeMore> = ({
    description,
    styleIcon,
    styleBtn,
    icon,
    dir,
}): JSX.Element => {

    /* const prueba = useNavigate();
    const handleNav = (dir: string) => {
        console.log(dir)
        prueba(dir)
    } */

    return (
        <Link to={dir} className={styleBtn} /* onClick={() => handleNav(dir)} */>
            <span className={styleIcon}>{icon}</span>
            {description}
        </Link>
    );
};

export default BtnSeeMore;
