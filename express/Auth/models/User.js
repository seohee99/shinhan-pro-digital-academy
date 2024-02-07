const mongoose = require("mongoose");
const {isEmail} = require("validator");
const bcrypt = require("bcrypt");

// email, password 필드를 가지는 userSchema
const userSchema = new mongoose.Schema({
    email: {
        type:String,
        required : [true, "이메일을 입력하여주세용가리~"],
        unique : true,
        lowercase : true,
        validate : [isEmail, "올바른 이메일 형식이 아닙니다람쥐!"]
    },
    password : {
        type : String,
        required : [true, "비밀번호가 입력되어야 합니다람쥐ㅠㅠ"]
    },
});
// statics : model을 반환할 때 모델이 사용하는 함수? => mongoose 지원 
userSchema.statics.signUp = async function (email, password){
    const salt = await bcrypt.genSalt();
    console.log(salt);
    try {
        const hashedPassword = await bcrypt.hash(password, salt);
        const user = await this.create({email, password : hashedPassword})
        return {
            _id : user._id,
            email : user.email,
        };
    } catch (error) {
        throw error;
    };
};

userSchema.statics.login = async function (email, password) {
    const user = await this.findOne({email});
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth){
            return user.visibleUser;
        }
        throw Error("incorrect password");
    }
    throw Error("incorrect email");
};

const visibleUser = userSchema.virtual("visibleUser");
visibleUser.get(function(value, virtual, doc){
    return{
        _id : doc._id,
        email : doc.email,
    };
});

const User = mongoose.model("user", userSchema);

module.exports = User;