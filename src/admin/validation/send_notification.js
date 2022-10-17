import validator from "validator";

const validateNotification = (data) => {
    let errors = {};

    const { title, message, type, Users } = data

    if(validator.isEmpty(title)) {
        errors.title = "*This field is required."
    }

    if(validator.isEmpty(type)) {
        errors.type = "*This field is required."
    }

    if(validator.isEmpty(message)) {
        errors.message = "*This field is required."
    }

    if(validator.isEmpty(Users)) {
        errors.Users = "*This field is required."
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default validateNotification;