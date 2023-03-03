import React from "react"
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "../Components/Questions.css"

export default function Questions({ quesdata, index }) {

    const config = {
        loader: { load: ["input/asciimath"] }
    };
    return (
        <div className="question_div">
            <div className="question_number">
                <h2>
                    Question No: {index + 1}
                </h2>
            </div>
                <MathJaxContext config={config}>
                    <MathJax>{quesdata[0]?.Question ? quesdata[0]?.Question : "No data"}</MathJax>
                </MathJaxContext>
        </div>
    )
}