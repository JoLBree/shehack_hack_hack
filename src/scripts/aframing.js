let textObj = {
    frontText: {
        arrInd: 0,
        arrSize: 4,
        textArr: ["foobar",
        "An estimated 19.1% of U.S. adults had any anxiety disorder in the past year",
        "An estimated 31.1% of U.S. adults experience any anxiety disorder at some time in their lives",
        "Past year prevalence of any anxiety disorder was higher for females (23.4%) than for males"]
    },
    rightText: {
        arrInd: 0,
        arrSize: 3,
        textArr: ["foobar",
        "Among adults with any anxiety disorder, an estimated 22.8% had serious impairment, and 33.7% had moderate impairment",
        "A majority of people with any anxiety disorder experienced mild impairment (43.5%)"]
    },
    backText: {
        arrInd: 0,
        arrSize: 4,
        textArr: ["foobar", "1", "2", "3"]
    },
    leftText: {
        arrInd: 0,
        arrSize: 4,
        textArr: ["foobar",
        "An estimated 31.9% of adolescents had any anxiety disorder",
        "Of adolescents with any anxiety disorder, an estimated 8.3% had severe impairment",
        "The prevalence of any anxiety disorder among adolescents was higher for females (38.0%) than for males (26.1%)"]
    }
}

function changeText(elemId) {
    let elemTextObj = textObj[elemId];
    console.log(elemTextObj)
    if (elemTextObj && elemTextObj.arrInd + 1 < elemTextObj.arrSize) {
        document.querySelector('#' + elemId).emit('fadeOut')
        setTimeout(function() {
            $('#' + elemId).attr('value', elemTextObj.textArr[elemTextObj.arrInd]);
            document.querySelector('#' + elemId).emit('fadeIn')
        }, 2100);
        textObj[elemId].arrInd = elemTextObj.arrInd + 1
    }
}