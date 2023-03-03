import { useEffect, useState } from 'react';
import './App.css';
import Questions from './Components/Questions';
import axios from 'axios';

function App() {

  const [quesdata, setQuesdata] = useState([])
  const [index, setIndex] = useState(0)
  let QuestionID = ["AreaUnderTheCurve_901", "BinomialTheorem_901", "DifferentialCalculus2_901"]
  const [loader, setLoader] = useState(true)


  useEffect(() => {
    getQuestionApi()
  }, [index])


  const getQuestionApi = () => {
    setLoader(true)
    axios.get(`https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=${QuestionID[index]}`)
      .then(response => {
        console.log("response", response.data)
        setQuesdata(response.data)
        setLoader(false)
      })
      .catch(error => {
        console.log(error)
        setLoader(false)
      });
  }

  console.log(index, "index")
  return (

    <div className="Container">

      <div className="main">
      {loader ? <div className="loading"><h2>Loading...</h2></div> : 
       <Questions quesdata={quesdata} index={index}  /> }
        <div className="btn-group">
          <button className={index > 0 ? "btn" : "disable-btn"} onClick={() => {
            setIndex(index > 0 ? index - 1 : 0)
          }}>Previous</button>
          <button className={index < 2 ? "btn" : "disable-btn"} onClick={() => {
            setIndex(index < 2 ? index + 1 : 2)
          }}>Next</button>
        </div>
      </div>
    </div>

  );
}

export default App;
