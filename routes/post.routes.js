module.exports = app =>{
     const posts = require("../controllers/posts.controllers")
      
    var router = require("express").Router();
     router.post("/", posts.creates)
   
     router.get("/" , posts.findAll);

     router.delete("/",posts.delete)

     router.delete("/", posts.deleteAll)
     
     app.get("/published" , posts.findAllPublished  )
     
     app.use("/api/detail", router)

}