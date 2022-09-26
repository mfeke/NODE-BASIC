module.exports = app =>{
     const posts = require("../controllers/posts.controllers")
      
    var router = require("express").Router();
     router.post("/", posts.creates)
    //  router.get("/", )
     router.get("/" , posts.findAll);
     
     app.get("/published" , posts.findAllPublished  )
     
     app.use("/api/posts", router)

}