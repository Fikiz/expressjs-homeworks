import  UserService from "../services/user.services.js";

export class UserController {
  static async register(req, res) {
    try {
      const userData = req.body; 
      const savedUser = await UserService.registerUser(userData);
      res.status(201).json(savedUser); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' }); 
    }
  }

  static async login(req,res){
    try {
        const {username,password} = req.body;
        const user = await UserService.loginUser(username,password);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(401).json({error:'Unauthorized'});
    }
  }

  static logout(req,res){
    const userId = req.body.userId;
    UserService.logoutUser(userId)
        .then(msg => res.status(200).json(msg))
        .catch(err => {
            console.log(err);
            res.status(500).json({err: 'Internal server error!'})
        });
  };
}


