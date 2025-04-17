import userService from '../services/user.service.js';

class UserController {
    async register(req, res) {
        try {
            const { username, password } = req.body;
            const result = await userService.register(username, password);
            return res.status(200).json(result);

        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}