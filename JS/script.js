const onSubmit = event => {
    event.preventDefault()

    for (let element of event.target) {
        if (element.required) {     
            let label = document.getElementById(`${element.id}`).placeholder
            let error = ""  

            switch (element.type) {
                case 'text': {
                    if (!isEmptyOrNull(element.value)){
                        if (isMinLength(element.value, 2)) {
                            if (isMaxLength(element.value, 100)) {
                                console.log('value is correct')
                            }else {
                                error = 'Cannot be longer than 100 characters'
                            }

                        }else {

                            error = `${label} must contain atleast 2 letters`
                            
                        }
                    }else {

                        error = `Please enter ${label.toLocaleLowerCase()}`
                    }
                    break;
                }

                case 'email': {
                    if (!isEmptyOrNull(element.value)){
                        if (validateEmail(element.value)) {
                            console.log('value is correct')
                        }else {
                            error = `${label} must be valid (eg. Adress@domain.com)`
                        } 

                    }else {

                        error = `Please enter ${label.toLocaleLowerCase()}`
                    }
                    break;
                }
            }
             document.getElementById(`${element.id}-error`).innerText = error
        }     
    }
}

const isEmptyOrNull = value => {
    if ( value.length === 0 ){
        return true
    }else {
        return false
    }
}

let length = 0

const isMinLength = (value, length) => {
    if (value.length >= length) {
        return true
    }else {
        return false
    }
}

const isMaxLength = (value, length) => {
    if (value.length <= length) {
        return true
    }else {
        return false
    }
}

const validateEmail = (email) => {

    let regEx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    if (regEx.test(email))
        return true
    return false
}

