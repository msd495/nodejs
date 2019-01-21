//AES192 IS Assyemtric key algorithm,meaning the same key will be used for encrypting and
//decrypting the data.192 is block sizes.

//Encryption example using Cipher
const crypto = require('crypto');  
const cipher = crypto.createCipher('aes192', 'secret');  //try changing the key in encryption or in decryption
var encrypted = cipher.update('hii everyone', 'utf8', 'hex');  
encrypted += cipher.final('hex');  
console.log("encrypted   -->"+encrypted);   

//Decryption example using Decipher
//const crypto = require('crypto');  
const decipher = crypto.createDecipher('aes192', 'secret');  
//var encrypted = encrypted;  
var decrypted = decipher.update(encrypted, 'hex', 'utf8');  
decrypted += decipher.final('utf8');  
console.log(decrypted); 
