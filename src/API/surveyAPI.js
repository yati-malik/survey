const GetSurvey = async(pageNumber) => {
    const response = await fetch('surveyOne.json');
    const pages = await response.json();
    return pages;
};

export default GetSurvey;