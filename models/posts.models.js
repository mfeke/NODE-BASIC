module.exports = mongoose =>{
    var schema = mongoose.Schema(
        {
            name: String,  // "thulane"
            surname: String, // "mfeketho " 
            email:String, // "thulanemfeketho@gmail.com" 
            skills :Array, //  ["html" , "css" ] 
            jobTitle: String, //    "frontend developer" 
            address:Object //    { area:"gugulethu" , city:"cape town"}
        },
        { timestamps : true}
    );
    schema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
      });

    const Posts = mongoose.model("post" , schema);

    return Posts;

}

