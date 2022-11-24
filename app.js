//affichage de la barre latérale

const tabcontent = document.querySelectorAll('.tabcontent')
const tablinks = document.querySelectorAll('.tablinks')

const multiplication = document.querySelector('.multiplication')
const addition = document.querySelector('.addition')
const soustraction = document.querySelector('.soustraction')
const division = document.querySelector('.division')


function showTabContent(id, signe) {
    for(let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"
    }
    document.getElementById(id).style.display = 'block'

    for(let j = 0; j < tablinks.length; j++) {
       tablinks[j].className = tablinks[j].className.replace(' active','')
    }

    tablinks[signe].classList.add('active')

}
showTabContent('multi', 0)

multiplication.addEventListener('click', () => {showTabContent('multi', 0)})
addition.addEventListener('click', () => {showTabContent('add', 1)})
soustraction.addEventListener('click', () => {showTabContent('sous', 2)})
division.addEventListener('click', () => {showTabContent('div', 3)})

//MILTUPLICATION

const multiSimple = document.querySelector('.multiSimple')
const multiTable = document.querySelector('.multiTable')
const formSimple = document.querySelector('.simple')
const formTable = document.querySelector('.table')

const simple = document.querySelector('#simple')
const table = document.querySelector('#table')

if(simple.checked) {
    multiSimple.style.display = 'flex';
    multiTable.style.display = 'none';
}

simple.addEventListener('click', () => {
    if(simple.checked) {
        multiSimple.style.display = 'flex';
        multiTable.style.display = 'none';
    }
})

table.addEventListener('click', () => {
    if(table.checked) {
        multiTable.style.display = 'flex';
        multiSimple.style.display = 'none';
    }
})

function ajoutResultat( textResults, previewResult, finalResult, btndeletehistory) {
    if(textResults.length > -1) {
        previewResult.style.display = 'none'
        finalResult.style.display = 'block'
        btndeletehistory.style.display = 'block'
    }
}

function removeHistory(resultLength, resultblock, textResults, deletebtn, previewResult) {
    for(i = 0; i < resultLength; i++) {
        resultblock.removeChild(textResults[i])
    }
    deletebtn.style.display = 'none'
    previewResult.style.display = 'block'
    resultblock.style.display = 'flex'
}


    //multiplication simple

const nb1 = document.querySelector('#nb1');
const nb2 = document.querySelector('#nb2');
const resultSimple = document.querySelector('.resultSimple')
const prevMultisimple = document.querySelector('.prevMultisimple')

formSimple.addEventListener('submit', (e) => {
    e.preventDefault();
    const simpleResultText = document.createElement('p')
    simpleResultText.classList.add('simpleResultText')
    resultSimple.appendChild(simpleResultText)
    const textResultsMultiSimple = document.querySelectorAll('.simpleResultText')

    let result = nb1.value * nb2.value


    if(nb1.value == '' || nb2.value == '' || isNaN(result)) {
        simpleResultText.innerText = `Champs vide quelque part ! Veuillez les remplir ! \n\n`
        simpleResultText.classList.add('error')
    } else { 
        simpleResultText.innerText = `${nb1.value} x ${nb2.value} = ${result}`
    }

    //console.log(textResults.length);

   
    ajoutResultat(textResultsMultiSimple, prevMultisimple, resultSimple, histomultisimplebtn)
    // nb1.value = ''
    // nb2.value = ''
})

const histomultisimplebtn = document.querySelector('.histomultisimple-btn')

histomultisimplebtn.addEventListener('click', () => {
    
    const textResultsMultiSimple = document.querySelectorAll('.simpleResultText')
    let resultLength = textResultsMultiSimple.length
    removeHistory(resultLength, resultSimple, textResultsMultiSimple, histomultisimplebtn, prevMultisimple)

})

    //table de multiplication

const nb3 = document.querySelector('#nb3')
const nb4 = document.querySelector('#nb4')
const resultTable = document.querySelector('.resultTable')
const prevMultiTable = document.querySelector('.prevMultiTable')

formTable.addEventListener('submit', (e) => {
    e.preventDefault();
    let result = []
    for(let k = 0; k <= nb4.value; k++) {
        result.push(`${nb3.value} x ${k} = ${nb3.value * k}`)
    }
 
    const tableResultText = document.createElement('p')
    tableResultText.classList.add('tableResultText')

    resultTable.appendChild(tableResultText)
    const textResults = document.querySelectorAll('.tableResultText')

    if(nb3.value == '' || nb4.value == '') {
        tableResultText.innerText = `Champs vide quelque part ! Veuillez les remplir ! \n\n`
        tableResultText.classList.add('error')
    } else  tableResultText.innerText = `La table de multiplication de ${nb3.value} est :\n ${result.join('\n')}`


    ajoutResultat(textResults, prevMultiTable, resultTable, histomultitablebtn)
})

const histomultitablebtn = document.querySelector('.histomultitable-btn')

histomultitablebtn.addEventListener('click', () => {
    const textResults = document.querySelectorAll('.tableResultText')
    let resultLength = textResults.length

    removeHistory(resultLength, resultTable, textResults, histomultitablebtn, prevMultiTable)

})

//ADDITION

const addInput = document.querySelector('.addinput')
const addContainer = document.querySelector('.addInput-container')
const firstNumberAdd = document.querySelector('.firstNumberAdd')
const secondNumberAdd = document.querySelector('.secondNumberAdd')
const formAdd = document.querySelector('.formAdd')
const resultAddition = document.querySelector('.resultAddition')
const prevAddition = document.querySelector('.prevAddition')

addInput.addEventListener('click', () => {
    const inputAdditionText = document.createElement('input')
    const labelInput = document.createElement('label')
    const line = document.createElement('br')

    labelInput.innerText = 'Plus votre nombre : \n\n'
    addContainer.appendChild(labelInput)

    inputAdditionText.classList.add('inputAddition')
    inputAdditionText.type = 'number'
    addContainer.appendChild(inputAdditionText)

    addContainer.appendChild(line)
})

formAdd.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputAddition = document.querySelectorAll('.inputAddition');
    const addResultText = document.createElement('p')
    addResultText.classList.add('addResultText')
    
    resultAddition.appendChild(addResultText)
    let resultAdd = parseFloat(firstNumberAdd.value) + parseFloat(secondNumberAdd.value)
    let somme = 0
    let result = []

    for(let l = 0; l < inputAddition.length; l++) {
        somme += (parseFloat(inputAddition[l].value))
        result.push(inputAddition[l].value)
    }

        if(firstNumberAdd.value === '' || secondNumberAdd.value === '' || isNaN(resultAdd + somme)) {
            addResultText.innerText = `Champs vide quelque part ! Veuillez les remplir ! \n\n`
            addResultText.classList.add('error')
        } else {
            somme === 0 ? addResultText.innerText = `${firstNumberAdd.value} + ${secondNumberAdd.value} = ${resultAdd}\n\n` : addResultText.innerText = `${firstNumberAdd.value} + ${secondNumberAdd.value} + ${result.join(' + ')} = ${resultAdd + somme}\n\n`
        }

        const textResults = document.querySelectorAll('addResultText')

        ajoutResultat(textResults, prevAddition, resultAddition, histoadditionbtn)

})

const histoadditionbtn = document.querySelector('.histoaddition-btn')

histoadditionbtn.addEventListener('click', () => {
    const textResults = document.querySelectorAll('.addResultText')
    let resultLength = textResults.length
    
    removeHistory(resultLength, resultAddition, textResults, histoadditionbtn, prevAddition)

})

//SOUSTRACTION

const firstNumberSous = document.querySelector('.firstNumberSous')
const secondNumberSous = document.querySelector('.secondNumberSous')
const formSous = document.querySelector('.formSous')
const resultSoustraction = document.querySelector('.resultSoustraction')
const prevSoustraction = document.querySelector('.prevSoustraction')

formSous.addEventListener('submit', (e) => {
    e.preventDefault()

    const resultSoustractionText = document.createElement('p')
    resultSoustractionText.classList.add('resultSoustractionText')
    let result = firstNumberSous.value - secondNumberSous.value

    resultSoustraction.appendChild(resultSoustractionText)

    if(firstNumberSous.value == '' || secondNumberSous.value == '' || isNaN(result)) {
        resultSoustractionText.innerText = `Champs vide quelque part ! Veuillez les remplir ! \n\n`
        resultSoustractionText.classList.add('error')

    } else resultSoustractionText.innerText = `${firstNumberSous.value} - ${secondNumberSous.value} = ${result}`

    const textResults = document.querySelectorAll('.resultSoustractionText')

    ajoutResultat(textResults, prevSoustraction, resultSoustraction, histosoustractionbtn)

})

const histosoustractionbtn = document.querySelector('.histosoustraction-btn')

histosoustractionbtn.addEventListener('click', () => {

    const textResults = document.querySelectorAll('.resultSoustractionText')
    let resultLength = textResults.length
    removeHistory(resultLength, resultSoustraction, textResults, histosoustractionbtn, prevSoustraction)

})



//DIVISION

const firstNumberDiv = document.querySelector('.firstNumberDiv')
const secondNumberDiv = document.querySelector('.secondNumberDiv')
const resultDivision = document.querySelector('.resultDivision')
const formDiv = document.querySelector('.formDiv')
const prevDivision = document.querySelector('.prevDivision')

formDiv.addEventListener('submit', (e) => {
    e.preventDefault()

    const resultDivisionText = document.createElement('p')
    resultDivisionText.classList.add('resultDivisionText')
    let result = (firstNumberDiv.value)/(secondNumberDiv.value)
    let infinity = 4/0

    resultDivision.appendChild(resultDivisionText)

    if(firstNumberDiv.value == '' || secondNumberDiv.value == '' || isNaN(result)) {
        resultDivisionText.innerText = `Champs vide quelque part ! Veuillez les remplir ! \n\n`
        resultDivisionText.classList.add('error')

    } else if(result === infinity) {
        resultDivisionText.innerText = `${firstNumberDiv.value} ÷ ${secondNumberDiv.value} = ±∞ \n\n`
    } else {
        resultDivisionText.innerHTML = `${firstNumberDiv.value} ÷ ${secondNumberDiv.value} = <br>
        <b>Valeur -</b><br>
        <b>• exacte : </b> ${result}<br>
        <b>• arrondie : </b> ${Math.round(result)}<br>
        <b>• approximative supérieure : </b> ${Math.ceil(result)}<br>
        <b>• approximative inférieure : </b> ${Math.floor(result)}<br>
        <b>• reste de la division : </b> ${(firstNumberDiv.value)%(secondNumberDiv.value)}<br>
        <b>• partie entière : </b> ${Math.trunc(result)} <br><br>`
    }

    const textResults = document.querySelectorAll('.resultDivisionText')

    ajoutResultat(textResults, prevDivision, resultDivision, histodivisionbtn)

})

const histodivisionbtn = document.querySelector('.histodivision-btn')

histodivisionbtn.addEventListener('click', () => {

    const textResults = document.querySelectorAll('.resultDivisionText')
    let resultLength = textResults.length
    removeHistory(resultLength, resultDivision, textResults, histodivisionbtn, prevDivision)

})

