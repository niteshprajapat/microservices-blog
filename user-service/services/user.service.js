import userRepository from '../repository/user.repository.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
class UserService {
    async register(username, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userRepository.register({ username, password: hashedPassword });
        return { message: 'User created', user: user };
    }

    async login(username, password) {
        const user = await userRepository.findUser(username);
        if (!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error('Invalid credentials');
        }

        const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
        return {
            user,
            token,
        }
    }
}


export default new UserService();