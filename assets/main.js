//01- Age calculation
const name = document.querySelector('#name')
const year = document.querySelector('#year')
const checkage = document.querySelector('#checkage')
const ageresult = document.querySelector('#ageresult')
const form_signup = document.querySelector('#form_signup')




form_signup.addEventListener('submit', (e) => {
    e.preventDefault()

    if (name.value == '' || year.value == '') {
        ageresult.innerHTML = 'All fields are required';
    } else {
        ageresult.innerHTML = ageCalculation(name.value, year.value)
    }

    name.value = ''
    year.value = ''
})

//02- Currency convert
const amount = document.querySelector('#amount')
const currency = document.querySelector('#currency')
const check = document.querySelector('#check')
const result = document.querySelector('#result')
const form_signup1 = document.querySelector('#form_signup1')

form_signup1.onsubmit = (e) => {
    e.preventDefault()

    if (amount.value === '' || currency.value === '') {
        result.innerHTML = 'All fields are required'
    } else {
        result.innerHTML = currencyConvert(currency.value, amount.value)
    }
    currency.value = ''
    amount.value = ''
}

//03- Marriage age calculation
const name1 = document.querySelector('#name1')
const year1 = document.querySelector('#year1')
const gender = document.querySelector('#gender')
const agecheck1 = document.querySelector('#agecheck1')
const ageresult1 = document.querySelector('#ageresult1')
const form_signup2 = document.querySelector('#form_signup2')

form_signup2.onsubmit = (e) => {
    e.preventDefault()
    if (name1.value == '' || year1.value == '' || gender.value == '') {
        
        ageresult1.innerHTML = 'All fields are required'
    } else{
        ageresult1.innerHTML = marriageAgeCalculation(name1.value, year1.value, gender.value)
    }
    name1.value = ''
    year1.value = ''
    gender.value =''
}

