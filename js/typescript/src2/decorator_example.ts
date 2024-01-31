// 함수를 인자로 받음
// 생성자 함수를 return 
// decorator은 함수, callable한 something..
function reportableClassDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
    console.log("Decorator 호출");

    constructor.prototype.sample = function () {
        console.log("injected method");
    }

    return class extends constructor {
        reportingURL = "http://www..";
    }
}

@reportableClassDecorator
class BugReport {
    type = "report";
    title: string;
    reportingURL: string | undefined;
    sample() {
        throw new Error("Should Be implemented");

    }

    constructor(t: string) {
        this.title = t;
    }
}
const bug = new BugReport("Needs dark mode");
// console.log(bug.title); // Prints "Needs dark mode"
// console.log(bug.type); // Prints "report"
// console.log(bug.reportingURL); // Prints "http://www.." -> reportingURL에 대한 타입 선언을 해주지 않으면 에러가 난다(15째줄)
bug.sample();