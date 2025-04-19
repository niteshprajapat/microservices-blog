import User from "../models/user.model.js";


class UserRepository {
    async register(userData) {
        const user = await User.create(userData)
        return user;
    }

    async findUser(username) {
        const user = await User.findOne({ username });
        return user;
    }
}

export default new UserRepository();