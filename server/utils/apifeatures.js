class ApiFeatures{
    constructor(query, querystr){
        this.query = query;
        this.querystr= querystr;
    }

    search(){
        const key = this.querystr.keyword ? {
            title: {
                $regex: this.querystr.keyword,
                $options: "i"
            }
        } : {};

        this.query = this.query.find({...key}).populate("creator likes comments.user");
        return this;
    }

}

module.exports = ApiFeatures