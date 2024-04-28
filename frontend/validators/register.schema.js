import * as yup from "yup"

const registerSchema = yup
    .object({
        username: yup.string().required().min(3).max(50),
        email: yup.string().required().email(),
        password: yup.string().required().min(8),
        confirm: yup.string().oneOf([yup.ref('password')]).required()
    })
    .required()

export default registerSchema;