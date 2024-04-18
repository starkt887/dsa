
const prompt = require('prompt-sync')();

function strLength(str) {
    console.log(str.length);
}
function traversal(str) {
    for (let i = 0; i < str.length; i++) {
        console.log(str.charAt(i));
    }
}
function addNewString() {
    let str = prompt('Enter new string= ')
    showString(str)
    return str
}

function showString(str) {
    console.log(str);
}
function addStringAtPos(str) {
    let pos = parseInt(prompt('Enter position= '))
    let strToAdd = prompt('Enter string to add= ')
    str = str.slice(0, pos) + strToAdd + str.slice(pos, str.length)
    showString(str)
    return str
}

function removeStringAtPos(str) {
    let strToRem = prompt('Enter string to add= ')
    str = str.replace(strToRem, "")
    showString(str)
    return str
}
function reverseString(str) {
    let revStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str.at(i)
    }
    showString(revStr)
    return revStr;
}

function searchStringChar(str) {
    let query = prompt('Enter string to search= ')
    let id = str.indexOf(query)
    if (id == -1) {
        console.log("Query not found");
        return
    }
    console.log(`query ${query} found at ${id} position`)
}
function concatString(str) {
    let strNew = prompt('Enter string to concat= ')
    str = str.concat(strNew)
    showString(str)
    return str
}

function showOperations() {
    console.log("1. String length");
    console.log("2. Create new String");
    console.log("3. Traverse new String");
    console.log("4. Add string to String");
    console.log("5. Remove string from String");
    console.log("6. Reverse the String");
    console.log("7. Search character in String");
    console.log("8. Search word in String");
    console.log("9. Concatenate String");
    console.log("11. Exit");
}

function main() {
    let strMain = ""
    let choice;
    while (choice != 11) {
        showOperations()
        choice = parseInt(prompt('Enter your choice= '));
        console.log(`Your choice is: ${choice}`);
        console.log()
        switch (choice) {
            case 1:
                strLength(strMain)
                break;
            case 2:
                strMain = addNewString()
                break;
            case 3:
                traversal(strMain)
                break;
            case 4:
                strMain = addStringAtPos(strMain)
                break;
            case 5:
                strMain = removeStringAtPos(strMain)
                break;
            case 6:
                reverseString(strMain)
                break;
            case 7:
            case 8:
                searchStringChar(strMain)
                break;
            case 9:
                strMain = concatString(strMain)
                break;
            case 11:
                console.log("End of Program");
                break;
            default:
                console.log("Invalid! Choose a different choice!");
                break;
        }
    }

}
main()
