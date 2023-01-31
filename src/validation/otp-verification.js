import validator from "validator";

const verifyOtp = (data) => {
    let errors = {};
    const { email,otp } = data

    if(validator.isEmpty(email)) {
        errors.email = "*Email is required"
    }
    if(validator.isEmpty(otp)) {
        errors.otp = "*Otp is required"
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default verifyOtp;