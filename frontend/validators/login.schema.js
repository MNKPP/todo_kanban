import * as yup from "yup"

const loginSchema = yup
    .object({
        email: yup.string().required().email(),
        password: yup.string().required().min(9),
    })
    .required()

export default loginSchema;