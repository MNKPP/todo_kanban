import { memberLoginValidator, memberRegisterValidator } from "../validators/member.validator.js";
import memberService from "../services/member.service.js";
import {generateJwt} from "../utils/jwt-utils.js";


const memberController = {

    login: async (req, res) => {
        const member = req.body;

        let validatedData;
        try {
            validatedData = await memberLoginValidator.validate(member);
        } catch (error) {
            res.json({
                errorMessage: 'Login method controller : invalid data !'
            });
        }

        const logedMember = await memberService.login(validatedData);

        if (!logedMember) {
            res.status(404)
                .json({
                    errorMessage: 'Login method controller : no member founded !'
                });
        }

        res.status(200)
            .json(logedMember);
    },

    register: async (req, res) => {
        const member = req.body;

        let validatedData;
        try {
            validatedData = await memberRegisterValidator.validate(member);
        } catch (error) {
            res.json({
                errorMessage: 'Register method controller : invalid data !'
            });
        }

        const registeredMember = await memberService.register(validatedData);

        if (!registeredMember) {
            res.status(404)
                .json({
                    errorMessage: 'Login method controller : no member founded !'
                });
        }

        const token = await generateJwt(member);

        res.status(201)
            .json({token});
    },
}

export default memberController;