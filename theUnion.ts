type user = {
    name: string;
    id: number;
}

type admin = {
    username: string;
    id: number;
}

let arpan: user | admin = { name: "arpan", id: 112 }

arpan = {
    username: "makmam",
    id: 122
}

//========================================


function datebaseID(id: string | number){
    if(typeof id === "string"){
        return id.toLowerCase();
    }
    
    if(typeof id === "number"){
        return id+3
    }
}

//=======================================



const data1: number[] = [1,2,3]
const data2: string[] = ["1","2","3"]

const data3: number[] | string[] = [1,2,3] // any one
const data4: number[] | string[] = ["1","2","3"] // any one

const data5: (number|string)[] = [1,"2",3] // both 



//==============================================

let adminNames : "amit" | "sumit" | "arjun";

// adminNames = "sanju" // not allowed

adminNames = "amit" // ok

//==============================================

