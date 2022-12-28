const mongoose = require('mongoose');
async function Connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_educaition', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connect successfully');
    } catch (error) {
        console.log('connect fail');

    }
}

module.exports = { Connect };