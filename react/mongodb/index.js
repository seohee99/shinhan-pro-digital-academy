import mongoose from "mongoose";
const MONGO_URL = "mongodb+srv://admin:admin1234@cluster0.jvwi8vu.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(MONGO_URL, {
  retryWrites: true,
  w: "majority",
}).then(resp => {
    console.log(resp);
    console.log("SUCCESS CONNECTION");
} );

const Cat = mongoose.model("Cat", {
    name: String
});

// save()
const kitty = new Cat({name : 'Zildjian'});
kitty.save().then( (data) => {
    console.log("저장된 데이터");
    console.log(data);
});
//create()
Cat.create({name : "야옹이"}).then( (data) => {
    console.log("저장된 데이터");
    console.log(data);
});
// 여러개 insert
Cat.insertMany([{
    name:"냥1"
}, {
    name: "냥2"
}]).then(data => {
    console.log(data);
})

// find(<조건>) -> name이 냥1인거 찾기
Cat.find({
    name: "냥1"
}).then(data => {
    console.log(data);
})

// findById(<id>) -> key로 조회
Cat.findById('65bb2121e3a873dbcf144bae').then(data =>{
    console.log(data);
})

// findOne
Cat.findOne({name: "야옹이"}).then(data => {
    console.log(data);
})

// delete
Cat.find({}).then(data => {
    console.log(data)
    console.log('----'.repeat(10))

    Cat.deleteOne({name:"야옹이"}).then(data =>{
        console.log(data)
    })
    
})

// update(<조건><수정할 객체>)
Cat.updateOne({name:"냥1"},{name:"냥11111"}).then((data) => {
    console.log(data);
})

