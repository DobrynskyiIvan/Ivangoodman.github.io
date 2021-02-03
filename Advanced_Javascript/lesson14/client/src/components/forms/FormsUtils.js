const setValue={
    text:value=>value,
    number:value=>{
        let value=parseFloat(value);
        value=isNaN(value)||value===0?'':Math.abs(value);
        return value;
    },
    checkbox:value=>value,
    email:value=>value,
    textarea:value=>value,
    password:value=>value,
    passwordConfirmation:value=>value,


}
const setFormObject=(data,fn)=({target})=>
   { const value=target.type==='ckeckox'?target.ckecked:target.value;
   return fn({...data,[target.name]:setValue[target.type](value)})
}
export default setFormObject;