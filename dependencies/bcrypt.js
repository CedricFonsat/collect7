import bcrypt from 'bcrypt'

const saltRounds = process.env.SALT_ROUND;

let cryptPassword = async function(password){
   let salt = await bcrypt.genSalt(saltRounds)
   return await bcrypt.hash(password, salt);
}

let comparePassword = async function(plainPass, hashword) {
   let compare = bcrypt.compare(plainPass, hashword);
   return compare;
};

export {cryptPassword}
export {comparePassword}