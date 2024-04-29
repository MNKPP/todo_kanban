import Member from "../models/member.model.js";
import * as argon2 from 'argon2';
import MemberDto from "../dto/member.dto.js";
import Goal from "../models/goal.model.js";
import goalDto from "../dto/goal.dto.js";


const memberService = {

    login: async ({ email, password }) => {
        const member = await Member.findOne({email});

        if (!member) {
            throw new Error("Login method service : no member founded !");
        }

        const pwdIsValid = await argon2.verify(member.password, password);

        if (!pwdIsValid) {
            throw new Error("Login method service : invalid password !")
        }

        return member;
    },

    register: async ({ username, email, password }) => {

        const pwdHash = await argon2.hash(password);

        const memberCreated = new Member({
            username,
            email,
            password: pwdHash,
            role: "member"
        })

        await memberCreated.save()

        return new MemberDto(memberCreated);
    },

    checkEmailExist: async (email) => {
        const memberTarget = await Member.findOne({ email });

        return memberTarget !== null;
    },

    getAllGoalsForMember: async (memberId) => {
        const goals = await Goal.find({member_id: memberId});

        if (!goals) {
            throw new Error("Goal service method : goals not found");
        }

        return goals?.map(goal => new goalDto(goal));
    },
}

export default memberService;