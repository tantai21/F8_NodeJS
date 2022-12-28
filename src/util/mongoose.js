module.exports = {
    mutipleMongooseObj: function (mongooseArrs) {
        return mongooseArrs.map(mongoose => mongoose.toObject());
    },
    mongooseObj: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
}