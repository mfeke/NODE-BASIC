module.exports = mongoose =>{
    var schema = mongoose.Schema(
        {
            name: String,  
            surname: String, 
            email:String, 
            skills :[String], 
            jobTitle: String, 
            address:{
                street: String,
                city: String
            } 
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

