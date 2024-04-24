const tinderUser={}

tinderUser.name="P"
tinderUser.id="123"
tinderUser.party="BJP"

console.log(tinderUser);

const reguser={
    email:"P@gmail.com",
    fullName:{
        firstname:"Prabal",
        Lastname:"Sharma"
    },
    location:"Delhi"
}

console.log(reguser.fullName.firstname);

const obj3=Object.assign({},tinderUser,reguser)//{} this helps to establish target that is a empty object so no issue occurs
console.log(obj3);

//another way
const obj4={...tinderUser,...reguser} //spread operator 
console.log(obj4);