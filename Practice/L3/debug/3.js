function gcd(a, b) {
    while (b !== 0) {
        let mt = b;
        b = a % b; 
        a = mt;  
    }
    return a;
}

// Example usage
let a = 48, b = 18;
console.log(gcd(a, b));  // Expected output: 6