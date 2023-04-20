interface ICategoryHome {
    description: string;
    img: string;
}

const CategoryHome = ({ description, img }: ICategoryHome): JSX.Element => {
    return (
        <div className="w-32 h-40">
            <h2>{description}</h2>
            <img src={img} alt="Category's Image" />
        </div>
    );
};

export default CategoryHome;
