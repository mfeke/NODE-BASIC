module.exports = mongoose =>{
    var schema = mongoose.Schema(
        {
            name: String,
            surname: String,
            email:String,
            skills :Array,
            address:Object
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

