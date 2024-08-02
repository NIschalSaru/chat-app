import User from "../models/user.models.js";

export const getUser = async (req, res) => {
  try {
    const loggedUserId = req.user.id;

    const filteredUser = await User.find({ _id: { $ne: loggedUserId } }).select(
      "-password"
    );

    if (!filteredUser) {
      return res.status(404).json({ message: "UnLogged user not found" });
    }

    return res.status(200).json(filteredUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
