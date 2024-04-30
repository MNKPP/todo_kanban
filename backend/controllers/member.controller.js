import { memberLoginValidator, memberRegisterValidator } from "../validators/member.validator.js";
import memberService from "../services/member.service.js";
import { generateJwt } from "../utils/jwt-utils.js";

const memberController = {

    /**
     * POST /api/auth/login
     * @param {object} request.body - Member Data
     * @return {string} 200 - Generated Token - application/json
     * @return 404 - Not found
     * @return 500 - Error Generated Token
     */
    login: async (req, res) => {
        const memberLoginData = req.body;

        let validatedData;
        try {
            validatedData = await memberLoginValidator.validate(memberLoginData);
        } catch (error) {
            res.json({
                errorMessage: 'Login method controller : invalid data !'
            });
            return;
        }


        const logedMember = await memberService.login(validatedData);

        if (!logedMember) {
            res.status(404)
                .json({
                    errorMessage: 'Login method controller : no member founded !'
                });
            return;
        }

        const token = await generateJwt(logedMember);

        if (!token) {
            res.status(500)
                .json({
                    errorMessage: 'Login method controller : error generating token !'
                });
            return;
        }

        res.status(200)
            .json({token});
    },

    /**
     * POST /api/auth/register
     * @param {object} request.body - Member Data
     * @return {MemberDto} 201 - Member Data - application/json
     * @return 404 - Not found
     */
    register: async (req, res) => {
        const memberRegisterData = req.body;

        let validatedData;
        try {
            validatedData = await memberRegisterValidator.validate(memberRegisterData);
        } catch (error) {
            res.json({
                errorMessage: 'Register method controller : invalid data !'
            });
            return;
        }

        const emailExists = await memberService.checkEmailExist(validatedData.email);

        if (emailExists) {
            res.status(400)
                .json({
                    errorMessage: 'Register method controller : email already exists !'
                });
            return;
        }

        const registeredMember = await memberService.register(validatedData);

        if (!registeredMember) {
            res.status(404)
                .json({
                    errorMessage: 'Login method controller : no member founded !'
                });
            return;
        }

        res.status(201)
            .json(registeredMember);
    },

    /**
     * GET /api/member/goals
     * @return {GoalDto[]} 200 - Member Goals - application/json
     * @return 404 - Not found
     */
    getAllGoalsForMember: async (req, res) => {
        const memberId = req.token.id;

        const goalsMember = await memberService.getAllGoalsForMember(memberId);

        if (!goalsMember) {
            res.status(404)
                .json({
                    errorMessage: "GetAllGoalsForMembers method controller : Goals not found"
                });
            return;
        }

        res.status(200)
            .json(goalsMember)
    },
}

export default memberController;