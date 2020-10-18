const GetSurvey = async(pageNumber) => {
    const response = await fetch('https://yati-malik.github.io/survey/surveyOne.json');
    const pages = await response.json();
    return pages;
};

export default GetSurvey;