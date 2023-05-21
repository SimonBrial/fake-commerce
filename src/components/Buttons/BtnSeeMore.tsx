import { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IBtnSeeMore } from "../../interface/interface";


const BtnSeeMore: React.FC<IBtnSeeMore> = ({
    description,
    handleShow,
    styleIcon,
    styleBtn,
    icon,
    dir,
}): JSX.Element => {

    /* const prueba = useNavigate();
    const handleNav = (dir: string) => {
        //console.log(dir)
        prueba(dir)
    } */

    return (
        <Link to={dir} className={styleBtn} onClick={handleShow}>
            <span className={styleIcon}>{icon}</span>
            {description}
        </Link>
    );
};

export default BtnSeeMore;
