const { log } = require('console');
const fs = require('fs');

fs.writeFile("hey.txt","Radhe radhe" , function(err){  // (file , data [,options] , callback)    // callback ek func hota hai 
    if(err) console.log(err);
    else console.log("Done");
})    

fs.appendFile("hey.txt"," Kya haal chal" , function(err){  // (path , data [,options] , callback)
    if(err) console.error(err);
    else console.log("Done"); // Existing  File me addition ke liye use hota h
})  

fs.rename("hey.txt","helo.txt" , function(err){  // (oldpath , newpath , callback)
    if(err) console.error(err);
    else console.log("Done"); 
}) 

fs.copyFile("helo.txt","./02_Node.js/./copy/heylo.txt" , function(err){  // (src , dest [, mode], callback)
    if(err) console.error(err);
    else console.log("Done"); 
}) 

fs.unlink("hey.txt" , function(err){
    if(err) console.error(err);
    else console.log("Done"); 
})

fs.rm("./02_Node.js/./copy/heylo.txt" , {recursive: true}, function(err){
    if(err) console.error(err);
    else console.log("removed"); 
})
