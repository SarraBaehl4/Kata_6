function isValid(str) {
    for (let i = 0; i < str.length; i++) {
        
        // On enlève les paires
        str = str.replace("()", "");
        str = str.replace("[]", "");
        str = str.replace("{}", "");
    }
    
    // Si tout a été supprimé, c'est valide
    return str === "";
}

// Tests
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));

