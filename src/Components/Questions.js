import React from "react"
import { MathJax, MathJaxContext } from "better-react-mathjax";
import "../Components/Questions.css"

export default function Questions({ quesdata, index,loader,refreshfunc }) {

    const config = {
        loader: { load: ["input/asciimath"] }
    };
    return (
        <div className="question_div">
          { loader ? <h2>Loading...</h2> :<> <div className="question_number">
                <h2>
                    Question No: {index + 1}
                </h2>
            </div>
                <MathJaxContext config={config}>
                    <MathJax>{quesdata[0]?.Question ? quesdata[0]?.Question : <button className="refreshbtn" onClick={refreshfunc}>Refresh Page</button>}</MathJax>
                </MathJaxContext>
                </>}
        </div>
    )
}
