/**
 * A member
 * @typedef {object} MemberDto
 * @property {string} username
 * @property {string} email
 * @property {string} role
 */
class MemberDto {

    constructor({username, email, role}) {
        this.username = username;
        this.email = email;
        this.role = role;
    }
}

export default MemberDto;