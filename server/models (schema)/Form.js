import mongoose from 'mongoose'

const vbsFormSchema = new mongoose.Schema ({
    childName: {
        type: String,
        required: true,
        validate: /^[A-Za-z ]*$/
    },
    childAge: {
        type: String,
        required: true,
        validate: /^[0-18 ]*$/
    },
    childAddress: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
    },
    childInfo: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
    },
    childEmergencyContactName: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
    },
    childEmergencyContactNumber: {
        type: String,
        required: true,
        validate: /^[0-9 ]*$/
    },
    childDismissal: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
    },
    guardianName: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
    },
    guardianNumber: {
        type: String,
        required: true,
        validate: /^[0-9 ]*$/
    },
    guardianEmail: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9@ ]*$/
    },
    guardianAddress: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
    },
    guardianChurch: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
    },
    guardianGuest: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
    },
    photoPermission: {
        type: String,
        required: true,
        validate: /^[A-Za-z0-9 ]*$/
    },

})

const Form = mongoose.model("Form", vbsFormSchema)

export default Form