//Age Calculation
function ageCalculation(name, year) {
    let date = new Date()
    let age = date.getFullYear() - year
    return `<p class= "alert alert-success"> Hi, ${name} and your are ${ age} years old</p>`
}

//-02-Currency convert
function currencyConvert(currency, amount) {
    if (currency == 'Pound') {
        return `${amount} ${currency} = ${amount * 110} BDT`
    } else if (currency == 'USD') {
        return `${amount} ${currency} = ${amount * 86} BDT`
    }else if (currency == 'Euro') {
        return `${amount} ${currency} = ${amount * 98} BDT`
    }else if (currency == 'CAD') {
        return `${amount} ${currency} = ${amount * 65} BDT`
    }
}

//-03-Marriage age calculation

function marriageAgeCalculation(name1, year1) {
    let date = new Date();
    let age = date.getFullYear() - year1

    let ageStatus = marriageAgeStatus(age, gender)
    return `<p class= "alert alert-${ageStatus.status}"> Hi, ${name1} your are ${ age} years old. ${ageStatus.name}</p>`
}

function marriageAgeStatus(age, gender) {
    if (gender == 'Female' || age < 18) {
        return {
            name: 'only! <img src="https://media.istockphoto.com/photos/red-x-mark-picture-id487668618?b=1&k=20&m=487668618&s=170667a&w=0&h=DcDeZ5NOAKIFIYFA4okt4tSWeTeBGaItRum4liZuZAo="/>',
            status: 'danger'
        }
    } else if (gender == 'Female' || age >= 18) {
        return {
            name: 'No problem with your age <img src="https://media.istockphoto.com/photos/green-checklist-illustration-on-white-background-picture-id1295706732?b=1&k=20&m=1295706732&s=170667a&w=0&h=CNqBFP47TP-hQXEa7TcJDkMeBoe6TZeqLnwx-VZc5Eo="/>',
            status: 'success'
        }
    } else if (gender == 'Male' || age < 21) {
        return {
            name: 'only! <img src="https://media.istockphoto.com/photos/red-x-mark-picture-id487668618?b=1&k=20&m=487668618&s=170667a&w=0&h=DcDeZ5NOAKIFIYFA4okt4tSWeTeBGaItRum4liZuZAo="/>',
            status: 'danger'
        }
    } else if (gender == 'Male' || age >= 21) {
        return {
            name: 'No problem with your age <img src="https://media.istockphoto.com/photos/green-checklist-illustration-on-white-background-picture-id1295706732?b=1&k=20&m=1295706732&s=170667a&w=0&h=CNqBFP47TP-hQXEa7TcJDkMeBoe6TZeqLnwx-VZc5Eo="/>',
            status: 'success'
        }

   }
}
