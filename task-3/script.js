let celciusInput = document.querySelector('#celcius > input' )
let fahrenheitInput = document.querySelector('#Fahrenheit> input' )
let kelvinInput = document.querySelector('#Kelvin > input' )

let btn = document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}

celciusInput.addEventListener('input',function(){
    let cTemp= parseFloat(celciusInput.value)
    let Ftemp=(cTemp*(9/5))+32
    let KTemp= cTemp +273.15

    fahrenheitInput.value = roundNumber(Ftemp)
    kelvinInput.value= roundNumber(KTemp)
})

fahrenheitInput.addEventListener('input',function(){
    let Ftemp= parseFloat(fahrenheitInput.value)
    let cTemp=(Ftemp - 32) * (5/9)
    let KTemp= (Ftemp - 32) *(5/9) + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value= roundNumber(KTemp)
})

kelvinInput.addEventListener('input',function(){
    let KTemp= parseFloat(kelvinInput.value)
    let cTemp= KTemp - 273.15
    let Ftemp= (KTemp - 273.15) * (9/5)+ 32

    celciusInput.value = roundNumber(Ftemp)
    fahrenheitInput.value= roundNumber(KTemp)
})

btn.addEventListener('click', ()=>{
    celciusInput.value = ""
    fahrenheitInput.value = ""
    kelvinInput.value = ""
})
