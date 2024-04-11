import User from '../models/user.model.js'
import bcrypt from 'bcrypt';


class UserService {
  static async registerUser(userData) {
    const { name ,username, password } = userData;
    const hashedPassword = await bcrypt.hash(password, 10); 
    const newUser = new User({ name,username, password: hashedPassword });
    return newUser.save();
  }

  static async loginUser(username, password) {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Invalid username or password');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid username or password');
    }
    return user;
  }

  static async logoutUser(userId) {
    return { message: 'User logged out successfully' };
  }
}

export default UserService;
