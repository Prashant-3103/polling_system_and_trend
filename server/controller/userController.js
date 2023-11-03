import User from "../model/user.js";

export const registerUser = async (req, res, next) => {
    try {
        const { name,email,voteChoice, date } = req.body;

        // Check whether user exists
        let user = await User.findOne({ email });

        if (user) {
            throw new Error("User has already registered");
        }

        // Creating a new user
        user = await User.create({
            name,
            email,
            voteChoice,
            date
        });

        return res.status(201).json({
            name: user.name,
            email: user.email,
            voteChoice: user.voteChoice,
            date: date,
            token: await user.generateJWT(),
        });

    } catch (error) {
        next(error);
    }
};


export const userProfile = async (req, res, next) => {
    try {
        let users = await User.find({});

        if (users && users.length > 0) {
            // If users are found, return the list of users
            return res.status(200).json(users);
        } else {
            // If no users are found, return an empty array or an appropriate message
            return res.status(200).json([]);
        }
    } catch (error) {
        next(error);
    }
};
