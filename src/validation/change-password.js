import validator from "validator";

const valChangePass = (data) => {
    let errors = {};
    const { old_password, new_password, con_password } = data

    if(validator.isEmpty(old_password)) {
        errors.old_password = "*Please enter your old password"
    }

    if(validator.isEmpty(new_password)) {
        errors.new_password = "*Please provide a new password"
    }
    if((new_password.length > 0) && (new_password.length < 8)){
        errors.new_password = "*Password must be minimum 8 characters"
    }
    if(new_password.length > 18){
        errors.new_password = "*Password must be maximum 18 characters"
    }

    if(validator.isEmpty(con_password)) {
        errors.con_password = "*Please provide a confirm password"
    }else if(!validator.equals(new_password, con_password)){
        errors.con_password = "*Password and confirm password does not match"
    }

    return {
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default valChangePass;