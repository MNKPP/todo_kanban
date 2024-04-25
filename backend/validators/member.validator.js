import yup from 'yup';

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

const memberLoginValidator = yup.object().shape({

    username: yup.string()
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