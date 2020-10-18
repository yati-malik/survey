import React, { useEffect, useState, useRef } from "react";
import GetSurvey from "../API/surveyAPI";
import GetPathArray  from "./dfs";

function UserSurvey(props) {
  const [percentage, setPercentage] = useState(0);
  const [userSurvey, setUserSurvey] = useState([]);
  const [questionCount, setQuestionCount] = useState(0);
  const createdSurvey = useRef([]);
  const dfsArray = useRef([]);

  useEffect(() => {
    GetSurvey().then((survey) => {
      createdSurvey.current = survey;
      let newSurvey = [...userSurvey, survey[0]];
      dfsArray.current = GetPathArray(survey);
      console.log(dfsArray.current);
      setUserSurvey(newSurvey);
    });
  }, []);

  const handleOptionClick = (event) => {
    let radioButtons = document.querySelectorAll('.question input[type=radio]')
    for(let element of radioButtons){
        if(element.checked){
          let questioId = element.dataset.questionid;
          let newQuestion = createdSurvey.current.filter((element) => element.questionId == questioId);
          if(newQuestion.length === 0){
              
          }
          else{
            debugger;
            let dfsLength = dfsArray.current.find((ele) => ele.currentPathIdentifier === questioId).dfsLength;
            let newQuestionCount = questionCount + 1;
            let completedPercentage = ((100 * newQuestionCount)/(dfsLength + newQuestionCount)).toFixed(2);
            setQuestionCount(newQuestionCount);
            setPercentage(completedPercentage);
            setUserSurvey([...userSurvey, newQuestion[0]]);
          }
        }
    }
  };

  return (
    <div className="container">
      <h1>{percentage}</h1>
      <div>
        <div className="question">
          <span>
            {userSurvey.length > 0
              ? userSurvey[userSurvey.length - 1].questionText
              : ""}
          </span>
          <br></br>
          {userSurvey.length > 0
            ? userSurvey[userSurvey.length-1].options.map((option) => {
                return (
                  <div
                    key={
                      userSurvey[userSurvey.length - 1].questionId +
                      option.optionId
                    }
                    className="option"
                  >
                    <input
                      type="radio"
                      data-questionid={option.questionPointer}
                      name="option"
                      id={option.optionId}
                    ></input>
                    <span className="option-name">{option.optionName}</span>
                  </div>
                );
              })
            : ""}
        </div>
        <div>
          <input type="button" value="Next" onClick={handleOptionClick}></input>
        </div>
      </div>
    </div>
  );
}

export default UserSurvey;
