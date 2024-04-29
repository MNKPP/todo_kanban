/**
 * A member
 * @typedef {object} MemberDto
 * @property {string} username
 * @property {string} email
 * @property {string} role
 */
class MemberDto {

    constructor({id, username, email, role}) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.role = role;
    }
}

export default MemberDto;