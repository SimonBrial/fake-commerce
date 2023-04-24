import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { ReactNode } from "react";

interface ICategoryHome {
    iconCategory?: ReactNode;
    description: string;
    titleStyles: string;
    linkStyles?: string;
    iconStyles?: string;
    styles: string;
    img?: string;
    dir: string;
    alt?: string;
}

const CategoryHome = ({
    iconCategory,
    description,
    titleStyles,
    linkStyles,
    iconStyles,
    styles,
    img,
    dir,
    alt,
}: ICategoryHome): JSX.Element => {
    return (
        <div className={styles}>
            {/* <img src={img} alt={alt} /> */}
            {/* AQUI DEBERIAMOS AÑADIR UN ICONO QUE REPRESENTE LA SECCION */}
            <h2 className={titleStyles}>{description}</h2>
            <div className={iconStyles}>{iconCategory}</div>
            <Link to={dir} className={linkStyles}>
                See more <HiOutlineArrowRight className="ml-2" />
            </Link>
        </div>
    );
};

export default CategoryHome;
