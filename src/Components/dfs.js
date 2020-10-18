const getNodeAndLongestPathMap = (survey) => {
  let stack = [];
  let visited = [];
  let rootNode = {...survey[0]};
  calculate(rootNode);
  return visited;

  function calculate(question) {
    let visitedObj = {
        currentPathIdentifier: question.questionId,
        dfsLength: 1
    };
    if(visited.find((item) => item.currentPathIdentifier == visitedObj.currentPathIdentifier)){
        return visitedObj.dfsLength;
    }
    visited.push(visitedObj);
    for (let option of question.options) {
        if(option.questionPointer !== null){
            let newQuestion = getQuestionForQuestionId(option.questionPointer);
            let dfsLength = calculate(newQuestion) + 1; 
            if(visitedObj.dfsLength < dfsLength){
                visitedObj.dfsLength = dfsLength;
            }        
        }
    }
    return visitedObj.dfsLength;
  }

  function getQuestionForQuestionId(questionId){
    let [question] = survey.filter((element) => element.questionId === questionId);
    return {...question};
  }
};

export default getNodeAndLongestPathMap;
