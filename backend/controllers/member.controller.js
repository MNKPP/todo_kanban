import { memberLoginValidator, memberRegisterValidator } from "../validators/member.validator.js";
import memberService from "../services/member.service.js";
import {generateJwt} from "../utils/jwt-utils.js";
import res from "express/lib/response.js";


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

        const token = await generateJwt(member);

        if (!token) {
            res.status(500)
                .json({
                    errorMessage: 'Login method controller : error generating token !'
                });
        }

        res.status(200)
            .json({token});
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

        // const emailExists = await memberService.checkEmailExist(validatedData.email);
        //
        // if (emailExists) {
        //     res.status(400)
        //         .json({
        //             errorMessage: 'Register method controller : email already exists !'
        //         });
        //     return;
        // }

        const registeredMember = await memberService.register(validatedData);

        if (!registeredMember) {
            res.status(404)
                .json({
                    errorMessage: 'Login method controller : no member founded !'
                });
        }

        res.status(201)
            .json({registeredMember});
    },
}

export default memberController;