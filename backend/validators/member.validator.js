import yup from 'yup';

/**
 * Member model for register
 * @typedef {object} Member
 * @property {string} username.required
 * @property {string} email.required
 * @property {string} password.required
 * @property {string} confirm.required
 */
const memberRegisterValidator = yup.object().shape({

    username: yup.string()
        .trim()
        .min(2)
        .max(50)
        .required(),

    email: yup.string()
        .trim()
        .required(),

    password: yup.string()
        .trim()
        .required()
        .min(8),

    confirm: yup.string()
        .oneOf([yup.ref('password')])
        .required()

});

/**
 * Member model for login
 * @typedef {object} Member
 * @property {string} email.required
 * @property {string} password.required
 */
const memberLoginValidator = yup.object().shape({

    email: yup.string()
        .trim()
        .required(),

    password: yup.string()
        .trim()
        .required()

});

export {
    memberRegisterValidator,
    memberLoginValidator
};