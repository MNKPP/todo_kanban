import jwt from 'jsonwebtoken';

export const generateJwt = ({id, username, role}) => {
    return new Promise((resolve, reject) => {

        const data = {id, username, role};
        const secret = process.env.JWT_SECRET
        const options = {
            algorithm: 'HS512',
            expiresIn: '12h',
            audience: process.env.JWT_AUDIENCE,
            issuer: process.env.JWT_ISSUER
        };

        jwt.sign(data, secret, options, (error, token) => {
            if(error) {
                reject(error);
                return;
            }

            resolve(token);
        })
    });
};

export const decodeJwt = (token) => {

    return new Promise((resolve, reject) => {

        const secret = process.env.JWT_SECRET;
        const options = {
            audience: process.env.JWT_AUDIENCE,
            issuer: process.env.JWT_ISSUER
        }

        jwt.verify(token, secret, options, (error, data) => {
            if(error) {
                reject(error);
                return;
            }

            resolve(data);
        });
    });

}