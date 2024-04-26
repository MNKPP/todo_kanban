import Member from "../models/member.model.js";
import * as argon2 from 'argon2';
import chalk from "chalk";

const memberService = {

    login: async ({ username, password }) => {
        const member = await Member.findOne({username});

        if (!member) {
            throw new Error("Login method service : no member founded !");
        }

        const pwdIsValid = argon2.verify(member.password, password);

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

        return memberCreated;
    },

    checkEmailExist: (email) => {
        const memberTarget = Member.findOne({ email });

        return memberTarget !== null;
    }
}

export default memberService;