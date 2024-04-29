import yup from 'yup';

/**
 * Goal model
 * @typedef {object} Goal
 * @property {string} title.required
 * @property {string} description
 * @property {boolean} isFinished.required
 */
const goalValidator = yup.object().shape({
    title: yup.string()
        .required()
        .trim(),

    description: yup.string()
        .trim(),

    isFinished: yup.boolean()
        .required()
        .default(false)
})

export default goalValidator;