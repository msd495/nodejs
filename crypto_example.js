/*What is Hash
A hash is a fixed-length string of bits i.e. procedurally and deterministically generated from some arbitrary block of source data.

What is HMAC
HMAC stands for Hash-based Message Authentication Code. It is a process for applying a hash algorithm to both data and a secret key that results in a single final hash.


//Encryption Example using Hash and HMAC

const crypto = require('crypto');  
const secret = 'abcdefg';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('Hii,how are you??')  
                   .digest('hex');  
console.log(hash);  
*/

//Encryption example using Cipher
const crypto = require('crypto');  
const cipher = crypto.createCipher('aes192', 'a password');  
var encrypted = cipher.update('hii everyone', 'utf8', 'hex');  
encrypted += cipher.final('hex');  
console.log(encrypted);   

//Decryption example using Decipher
//const crypto = require('crypto');  
const decipher = crypto.createDecipher('aes192', 'a password');  
//var encrypted = encrypted;  
var decrypted = decipher.update(encrypted, 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
console.log(decrypted); 
