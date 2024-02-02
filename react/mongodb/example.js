import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;

const DB_URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`;
mongoose.connect(DB_URL, {
  retryWrites: true,
  w: "majority",
}).then(resp => {
    console.log(resp);
    console.log("SUCCESS CONNECTION");
} );

const MovieSchema = new mongoose.Schema({
    title: {
        type : String,
        required : true
    },
    director: {
        type : String,
        required : true
    },
    startDate: {
        type : Date,
    },
    thumbnail: {
        type : String,
        required : true
    },
    story: {
        type : String,
        required : true
    },
    tags:{
        type : [String]
    }
}, {
    timestamps:true
});

const ReviewSchema = new mongoose.Schema({
    writer : {
        type : String,
        required : true,
    }, 
    movie : {
        type : mongoose.Types.ObjectId,
        required : true,
        ref: "Movie", // 앞서 정의한 Movie와 같은 이름, foreign key
    }, 
    title : {
        type : String,
        required : true,
        validate : function(val){
            return val.trim() !== "" && val.length > 1;
        }
    }, 
    content : {
        type : String,
        default : '',
    }
})

const Movie = mongoose.model('Movie', MovieSchema);
const Review = mongoose.model('Review', ReviewSchema);

// Movie.create({
//     title : "웡카",
//     director : "Paul King",
//     startDate: "2024-01-31",
//     thumbnail : "https://search.pstatic.net/common?type=o&size=176x264&quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20240103_132%2F1704256822900I1c3f_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2",
//     story : "세상에서 가장 달콤한 여정 좋은 일은 모두 꿈에서부터 시작된다! 마법사이자 초콜릿 메이커 ‘윌리 웡카’의 꿈은 디저트의 성지, ‘달콤 백화점’에 자신만의 초콜릿 가게를 여는 것. 가진 것이라고는 낡은 모자 가득한 꿈과 단돈 12소버린 뿐이지만 특별한 마법의 초콜릿으로 사람들을 사로잡을 자신이 있다. 하지만 먹을 것도, 잠잘 곳도, 의지할 사람도 없는 상황 속에서 낡은 여인숙에 머물게 된 ‘웡카’는 ‘스크러빗 부인’과 ‘블리처’의 계략에 빠져 눈더미처럼 불어난 숙박비로 인해 순식간에 빚더미에 오른다. 게다가 밤마다 초콜릿을 훔쳐가는 작은 도둑 ‘움파 룸파’의 등장과 ‘달콤 백화점’을 독점한 초콜릿 카르텔의 강력한 견제까지. 세계 최고의 초콜릿 메이커가 되는 길은 험난하기만 한데…",
//     tags: [2024, "fantasy", "drama"]
// }).then(data => {
//     console.log(data);
// })

// Review.create({
//   writer : "박서희",
//   movie : "65bb35f5799e994e28845977",
//   title : "굿굿",
//   content : "재밌음"
// }).then(data => console.log(data))

// Movie.find({title:"웡카"}).then(data => console.log(data))

// Review.find({writer:"박서희"}).then(review => {
//     console.log(review);
// })
// movie에 대한 정보도 함께 
// Review.find({writer:"박서희"}).populate('movie').then(
//     review => {console.log(review)}
// )

Movie.findOne({title:"웡카"}).then(data => {
    Review.create({
        writer : "박유진",
        movie: data._id,
        title : "전 별로입니다ㅜㅜ"
    }).then(result => console.log(result))
})

// close
// mongoose.connection.close()