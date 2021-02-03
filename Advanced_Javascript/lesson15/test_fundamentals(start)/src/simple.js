const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;

const result=sum(2,3);
const expected=5
if(result!=expected){
    throw new Error()
}