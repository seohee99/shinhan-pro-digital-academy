let number : number = 5
let text : string = "Hello world";

let number2 = 5 // 알아서 타입 지정 됨 
let text2 = "Hello world";

let bool1 : boolean = true;

let arr1 : String[] = ["a", "b", "c"]
let arr2 : Array<String> = ["a", "b", "c"]

// index별로 타입 설정 가능
let sample : [number, Function] = [0, () => {}]

// 잘 사용하지 않음 : any
// unknown을 더 많이 씀 
let anyValue : any = 1;
function func1(params:any) {
    console.log(params);
}

// return 안함 : void
function func2(num1:number): void {
    console.log(num1);
}

// 함수
// 선언식
function add(a:number, b:number):number {
    return a+b;
}
add(1, 2)

// 익명 함수, 화살표 함수
const add2: (x: number, y:number) => number = (x, y) => {return x + y;}
const add3 = function (x: number, y:number) : number {return x + y;}

// ? : 인자가 들어와도 되고, 안들어와도 됨
// 안들어오면 undefined
function greet(name:string, greeting?:string):string {
    return `${greeting || 'Hello'}, ${name}`;    
}
console.log(greet("서희", "반가웡"));
console.log(greet("서희"));

// 인터페이스로 객체 타입 정의
interface Greet {
    (name: string, greeting?: string) : string;
}
const greet2: Greet = (name, greeting) => {
    return `${greeting}, ${name}`;
}

// 클래스가 인터페이스를 준수하도록 강제
// 인터페이스의 상세 내용은 클래스 안에서 
interface IUser {
    name: string;
    greeting():string;
}

class User implements IUser {
    name: string;

    constructor(name: string){
        this.name = name;
    }

    greeting() {
        return `Hello, my name is ${this.name}`;
    }
}

// 인터페이스는 다른 인터페이스 상속 가능
interface IStudent extends IUser {
    sno: number; //학번
}

interface IProfessor extends IUser{
    salary?: number;
    evaluate: (student: IStudent) => number
}

const student1: IStudent ={
    name: "SH",
    greeting: function(){
        return `HELLO, ${this.name}`;
    },
    sno: 20240130
}

const professor1: IProfessor ={
    name:"MS",
    greeting: function(){
        return `HELLO, ${this.name}`;
    },
    salary: 5000000,
    evaluate:(student)=>100
}

function UserAction(user:IProfessor | IStudent){
    if("sno" in user){
        console.log(user.sno);
    }else{
        console.log(user.evaluate)
    }
}

// Literal Type
let direction: "left" | "right" | "up" | "down"; // 이 네가지만 받을거임
direction = "left"; // vaild
//direction = "forward"; // invalid

// Generic Type

// Todo List의 generic type 정의 
interface ITodolist {
    id : string | number, 
    title : string,
    color : string
}


// const todoList = useState<ITodolist[]>([]); // 방법 1
function useState<T>(arg: T): [T, (arg:T)=> void]{
    return [arg, (arg2)=> {}]
}
type todoList = ITodolist[] | null; // 방법 2
// type todoList = Array<ITodolist>;









