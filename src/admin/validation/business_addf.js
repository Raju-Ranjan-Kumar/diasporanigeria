import validator from "validator";

const validatAddUpdate = (data) => {
    let errors = {};

    const { scode, sname, bname, category, latitude, longitude, address, website, onChangeFileUpload } = data

    if(validator.isEmpty(scode)) {
        errors.scode = "*Please fill out this field"
    }
    
    if(validator.isEmpty(sname)) {
        errors.sname = "*Please fill out this field"
    }

    if(validator.isEmpty(bname)) {
        errors.bname = "*Please fill out this field"
    }

    if(validator.isEmpty(category)) {
        errors.category = "*Category is required"
    }

    if(validator.isEmpty(latitude)) {
        errors.latitude = "*Latitude is required"
    }

    if(validator.isEmpty(longitude)) {
        errors.longitude = "*Longitude is required"
    }

    if(validator.isEmpty(address)) {
        errors.address = "*Address is required"
    }

    if(validator.isEmpty(website)) {
        errors.website = "*Website link is required"
    }

    if(validator.isEmpty(onChangeFileUpload)) {
        errors.onChangeFileUpload = "*Logo is required"
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default validatAddUpdate;