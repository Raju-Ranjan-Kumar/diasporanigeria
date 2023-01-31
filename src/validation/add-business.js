import validator from "validator";

const valAddBusiness = (data) => {
    let errors = {};
    const { image, name, category, address, location, website } = data

    if(validator.isEmpty(image)) {
        errors.image = "*Please select a business image"
    }
    if(validator.isEmpty(name)) {
        errors.name = "*Please enter a business name"
    }
    if(validator.isEmpty(category)) {
        errors.category = "*Please select category"
    }
    if(validator.isEmpty(address)) {
        errors.address = "*Please enter a address"
    }
    if(validator.isEmpty(location)) {
        errors.location = "*Please enter a location"
    }
    if(validator.isEmpty(website)) {
        errors.website = "*Please enter a website"
    }

    return{
        isInvalid: Object.keys(errors).length > 0,
        errors: errors,
    };
}

export default valAddBusiness;