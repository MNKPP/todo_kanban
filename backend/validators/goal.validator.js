import yup from 'yup';

const goalValidator = yup.object().shape({
    title: yup.string()
        .required()
        .trim(),

    description: yup.string()
        .trim(),

    isFinished: yup.boolean()
        .isFalse()
        .required()
})

export default goalValidator;