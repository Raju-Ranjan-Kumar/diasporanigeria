import validator from "validator";

const validateSms = (data) => {
    let errors = {};

    const { type, users, message } = data

    if(validator.isEmpty(type)) {
        errors.type = "*This field is required."
    }

    if(validator.isEmpty(users)) {
        errors.users = "*This field is required."
    }

    if(validator.isEmpty(message)) {
        errors.message = "*This field is required."
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default validateSms;