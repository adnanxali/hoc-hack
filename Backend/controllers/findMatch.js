const User = require('../schema/UserSchema')
async function findMatch(req, res, next) {
    const pref = req.body.pref; 
    const userId = req.user._id; // Assuming you have access to the logged-in user's ID

    try {
        // Find the logged-in user to get the list of disliked users
        const currentUser = await User.findById(userId);

        if (!currentUser) {
            return res.status(404).json({
                success: false,
                msg: "User not found",
            });
        }

        // Find users that match the given preference but are not in the disliked list
        const users = await User.find({
            skills: { $in: [pref] }, // Match the skill preference
            _id: { $nin: currentUser.disliked } // Exclude users in the disliked array
        });

        if (!users.length) {
            return res.status(404).json({
                success: false,
                msg: "No users match your preference",
            });
        }

        res.json(users);
    } catch (error) {
        next(error);
    }
}


module.exports = findMatch