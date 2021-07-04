let fs = require("fs");

class FileSystem{
    constructor(fileName) {
        this._fileName = fileName
    }
    //setter method
    set contentOfFile(data){
        this._data = data;
    }
    //getter method
    get contentFromFile(){
        return this._data;
    }
    readFromFile(){
        //add try catch
        fs.readFile(this._fileName,(err,data)=>{
            if (!err){
                console.log(`Contents of file : ${data.toString()}`)
            }
        })
    }
    writeIntoFile(){
        //add try ctach
        fs.writeFile(this._fileName,this.contentFromFile,(err,data)=>{
            if (err){
                console.log("file not present")
            }
            console.log(`Data written to file`)
        })
    }

}


fileObj = new FileSystem('./sample.txt')
fileObj.contentOfFile = "Hello, how are you?"
fileObj.writeIntoFile()
fileObj.readFromFile()

console.log(`End of program`);
