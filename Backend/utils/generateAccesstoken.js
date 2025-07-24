import jwt from "jsonwebtoken";


const generateAccesstoken = async (user) => {
    const token = await jwt.sign ({
        id: user._id,} , process.env.SECRET_KEY_ACCESS_Token, {expiresIn: "5h"} )

    return token;
}
export default generateAccesstoken;