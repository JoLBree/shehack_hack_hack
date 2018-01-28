let textObj = {
    frontText: {
        arrInd: 0,
        arrSize: 3,
        textArr: ["foobar",
        "An estimated 19.1% of U.S. adults had any anxiety disorder in the past year",
        "An estimated 31.1% of U.S. adults experience any anxiety disorder at some time in their lives",
        "Past year prevalence of any anxiety disorder was higher for females (23.4%) than for males"]
    },
    rightText: {
        arrInd: 0,
        arrSize: 2,
        textArr: ["foobar",
        "Among adults with any anxiety disorder, an estimated 22.8% had serious impairment, and 33.7% had moderate impairment",
        "A majority of people with any anxiety disorder experienced mild impairment (43.5%)"]
    },
    backText: {
        arrInd: 0,
        arrSize: 3,
        textArr: ["foobar",
        "Experiencing discrimination can cause psychological distress and make us much more vulnerable to depression and anxiety",
        "When compared with heterosexual people, homosexual and bisexual people are twice as likely to experience anxiety (31.5% compared with 14.1%)",
        "In a University of Arizona study on stress from perceived racism, 18.2 percent of black participants reported emotional stress, compared to 3.5 percent of white participants"]
    },
    leftText: {
        arrInd: 0,
        arrSize: 3,
        textArr: ["foobar",
        "An estimated 31.9% of adolescents had any anxiety disorder",
        "Of adolescents with any anxiety disorder, an estimated 8.3% had severe impairment",
        "The prevalence of any anxiety disorder among adolescents was higher for females (38.0%) than for males (26.1%)"]
    }
}

function changeText(elemId) {
    let elemTextObj = textObj[elemId];
    if (!(elemTextObj && elemTextObj.arrInd < elemTextObj.arrSize)) {
        textObj[elemId].arrInd = 0;
    } 
    document.querySelector('#' + elemId).emit('fadeOut');
    setTimeout(function() {
         $('#' + elemId).attr('value', elemTextObj.textArr[elemTextObj.arrInd]);
        document.querySelector('#' + elemId).emit('fadeIn');
    }, 2100);
    textObj[elemId].arrInd = elemTextObj.arrInd + 1;
    }
}

function introProceed() {
    window.location = "/app";
}