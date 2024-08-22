const { User } = require('../models')
const { comparePassword } = require('../helpers/bcryptjs')
const { signToken } = require('../helpers/jwt')

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client();

class UserController {
    static async Register(req, res, next) {
        try {
            const { username, email, password } = req.body

            if (!username) {
                throw ({ name: 'Bad Request Username' })
            }

            if (!email) {
                throw ({ name: 'Bad Request Email' })
            }

            if (!password) {
                throw ({ name: 'Bad Request Password' })
            }

            const registerInfo = await User.create({
                username, 
                email, 
                password,
            })

            res.status(201).json({
                message: "Register success!",
                id: registerInfo.id,
                email: registerInfo.email
            })

        } catch (error) {
            next(error)
        }
    }

    static async Login(req, res, next) {
        try {
            const { email, password } = req.body;       

            if (!email) {
                throw ({ name: 'Bad Request Email' })
            }

            if (!password) {
                throw ({ name: 'Bad Request Password' })
            }

            let loginInfo = await User.findOne({
                where: {
                    email
                }
            })

            if (!loginInfo || !comparePassword(password, loginInfo.password)) {
                throw ({ name: "Unauthorized Incorrect" })
            }

            res.status(200).json({ 
                message: "Login successful!",
                access_token: signToken({ id: loginInfo.id }
            )})


        } catch (error) {
            next(error)
        }
    }

    static async LoginGoogle(req, res, next) {
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.body.googleToken,
                audience: "664282802331-43d9hsmj1gcjig7nn9kagblf0ocnbpr2.apps.googleusercontent.com",
            });

            const payload = ticket.getPayload();
            const [user, created] = await User.findOrCreate({
                where: { email: payload.email },
                hooks: false,
                defaults: {
                  username: payload.name + payload.family_name,
                  email: payload.email,
                  password: Math.random().toString()
                },
            });
 
            const access_token = signToken({ id: user.id })
            res.status(created ? 201 : 200).json({
                message: "Login success!", 
                access_token 
            })
        } catch (error) {
            next(error)
        }
    }

    static async UserProfile(req, res, next) {
        try {
            let { id } = req.user;
        
            const userById = await User.findByPk(id);
            if (!userById) {
                throw ({ name: "User Not Found" })
            }

            res.status(200).json({
                username: userById.username,
                email: userById.email,
            })
        } catch (error) {
            next(error);
        }
    }

    static async EditUserProfile(req, res, next) {
        try {
            let { id } = req.user;
            const findUserById = await User.findByPk(id)

            if (!findUserById) {
                throw ({ name: 'User Not Found' })
            }
            
            let { username, email} = req.body;
        
            await findUserById.update(
                {
                    username,
                    email,
                },
            );
        
            res.status(200).json({ message: "Update success!"});
        } catch (error) {
            next(error);
        }
    }

    static async DeleteUserAccount(req, res, next) {
        try {
            let { id } = req.user;
            let findUserById = await User.findByPk(id);

            if (!findUserById) {
                throw ({ name: 'User Not Found' })
            }
        
            await findUserById.destroy();
        
            res.status(200).json({ message: `${findUserById.username} account deleted.` });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = UserController;