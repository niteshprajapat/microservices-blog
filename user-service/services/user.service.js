import userRepository from '../repository/user.repository.js';
import bcrypt from 'bcrypt'

class UserService {
    async register(username, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = userRepository.register({ username, password: hashedPassword });
        return { message: 'User created', user: user };
    }
}