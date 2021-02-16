const fs = require("fs");

// fs.writeFile("demo.txt", "Hello from Demo", (err) => {
//     if(err) throw err;
//     console.log("File has been created");
// });

// fs.readFile("demo.txt", "utf8", (err, data)=>{
//     if(err) throw err;
//     console.log(data);
// })

fs.readdir(__dirname, { withFileTypes: true }, ( err , files ) => { 

    if (err) console.log(err); 
    else { 
      console.log("Current directory filenames:"); 
      files.forEach( elem => { 
        
        if (elem.isDirectory() === true) console.log(`${elem.name} is a Folder`);
        if (elem.isFile() === true) console.log(`${elem.name} is a File`);
      }) 
    } 
  }) 