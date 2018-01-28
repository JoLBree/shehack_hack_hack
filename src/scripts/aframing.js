let textObj = {
    frontText: {
        arrInd: 0,
        arrSize: 3,
        textArr: ["1", "2", "3"]
    },
    rightText: {
        arrInd: 0,
        arrSize: 3,
        textArr: ["1", "2", "3"]
    },
    backText: {
        arrInd: 0,
        arrSize: 3,
        textArr: ["1", "2", "3"]
    },
    leftText: {
        arrInd: 0,
        arrSize: 3,
        textArr: ["1", "2", "3"]
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