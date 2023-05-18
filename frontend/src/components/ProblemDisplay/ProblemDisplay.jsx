import { useState } from "react";
import TextBox from "../TextBox/TextBox";

const Functions = ({problem, answer, solution, tips}) => {
    return (
        <div>
            <div>
                {problem}
            </div>
            <div>
                <TextBox />
            </div>
        </div>
     );
}
 
export default Functions;