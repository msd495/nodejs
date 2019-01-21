
var forge = require('node-forge');
// generate a random key and IV

var key = forge.random.getBytesSync(16);
var iv = forge.random.getBytesSync(16);

var cipher = forge.aes.createEncryptionCipher('iUzr02HMj40XkrDzsY+Fpw==');

    var encodeEncryptedMessage = forge.util.encode64("Password1");

    var iv = forge.util.createBuffer();
    cipher.start(iv);
    cipher.update(forge.util.createBuffer(encodeEncryptedMessage));
    cipher.finish();
    var encryptedMessage = cipher.output;

    console.log("Encrypted key is "+encryptedMessage.toHex());