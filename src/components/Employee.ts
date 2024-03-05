// Define a type identifyUser with a single property name of type string.
type identifyUser = {
    name: string
}

// Export a function newAlyas that takes an identifyUser and returns the name property as a string.
export function newAlyas(username: identifyUser): string {
    return username.name;
}

// Define an interface empData that extends identifyUser and adds an employeeID property of type number.
interface empData extends identifyUser {
    employeeID: number
}

// Create an emp object conforming to the empData interface.
const emp: empData = {
    name: "Ahmad",
    employeeID: 5007
}
//================================================================
//feedback can be some additional information, a department 
// interface userDept.
interface userDept {
    deptName: string
}

// interface itemCategories
interface itemCategory {
    items: string[]
}

// interface feedBack 
interface feedBack<deptName extends Object, itemCat extends Array<itemCategory>, additionalInfo> {
    name: string,
    employeeID: number
    extraData: deptName | itemCat |additionalInfo
}

/**
 * Generics usage example for getting the feedBack instance from the database and returning it to the user (for example again)
 */

// Create a test object using the feedBack interface with userDept as userDept and string as D.
const feedback1: feedBack<userDept, Array<itemCategory>, string> = {
    name: "feedback1",
    employeeID: 1001,
    extraData: { deptName: "Sales" },
}
// Create a test object using the feedBack interface with userDept as userDept and string as D
const feedback2: feedBack<userDept, Array<itemCategory>, string> = {
    name: "feedback2",
    employeeID: 1002,
    extraData: [
        { items: ["Category5", "Category69"] },
        { items: ["Category7", "Category8"] },
    ]
}
// Set additional information for user Feedback
const feedback3: feedBack<userDept, Array<itemCategory>, string> = {
    name: "feedback2",
    employeeID: 1002,
   
    extraData: "Additional information for feedback2",
}
