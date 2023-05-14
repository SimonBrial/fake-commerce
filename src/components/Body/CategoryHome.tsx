import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import { ReactNode } from "react";
import { ICategoryHome } from "../../interface/interface";



const CategoryHome: React.FC<ICategoryHome> = ({
    iconCategory,
    description,
    titleStyles,
    linkStyles,
    iconStyles,
    styles,
    dir,
}): JSX.Element => {
    return (
        <div className={styles}>
            <h2 className={titleStyles}>{description}</h2>
            <span className={iconStyles}>{iconCategory}</span>
            <Link to={dir} className={linkStyles}>
                See more <HiOutlineArrowRight className="ml-2" />
            </Link>
        </div>
    );
};

export default CategoryHome;
