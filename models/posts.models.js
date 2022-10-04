module.exports = mongoose =>{
    var schema = mongoose.Schema(
        {
            title: String, 
            sides: String,
            price: String, 
            image: String,
            
        
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

