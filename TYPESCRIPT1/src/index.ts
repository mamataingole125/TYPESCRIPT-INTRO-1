let Name:string="dora"

let age:number=12

let isFetching:boolean=true;

let arr: number[]=[1,2,3]

let str: string[]=["masai","school"]

let tuple:[string,boolean]

tuple=["masai",true]


enum people{

    User,
    SuperUser,
    Admin,
    SuperAdmin
}


const product=(x:number,y:number): number =>{

    return x*y
}

console.log(product(2,6))


const division=(x:number,y:number): number =>{

    return x/y
}

console.log(division(6,2))

const name1=(name:string)=>{

    console.log(name)
}

name1("sita")