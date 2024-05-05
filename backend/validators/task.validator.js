import yup from 'yup';

// /**
//  * Task Validator
//  * @typedef {object} Goal
//  * @property {string} title.required
//  * @property {string} description
//  * @property {boolean} isFinished.required
//  */
const taskValidator = yup.object().shape({
    title: yup.string()
        .required()
        .trim(),

    isFinished: yup.boolean()
        .required()
        .default(false)
})

export default taskValidator;