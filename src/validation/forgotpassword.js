import validator from "validator";

const validateFrgtPassword = (data) => {
    let errors = {};
    const { phone } = data
    console.log(phone)

    if(validator.isEmpty(phone)) {
        errors.phone = "*Phone number is required"
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default validateFrgtPassword;