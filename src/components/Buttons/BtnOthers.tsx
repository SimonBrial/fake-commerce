import { AiFillQuestionCircle } from "react-icons/ai";
import othersCategory from "../../fakeData/others_categories.json";

const BtnOthers: React.FC = (): JSX.Element => {
    return (
        <div className="group uppercase cursor-default flex items-center px-2 py-1">
            <div className="text-2xl mx-1 cursor-pointer transition text duration-500 ease-in-out group-hover:text-cyan-500">
                <AiFillQuestionCircle />
            </div>
            <select className="p-1 transition text duration-500 ease-in-out group-hover:text-cyan-500 outline-none">
                {othersCategory.map((otherCategory: string, index: number) => {
                    return (
                        <option
                            className="font-HeroDescription text-xl transition text duration-500 ease-in-out group-hover:text-cyan-500"
                            value={otherCategory}
                            key={index}
                        >
                            {otherCategory}
                        </option>
                    );
                })}
            </select>
        </div>
    );
};

export default BtnOthers;
