const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = Schema({
    username: {
        type: String,
        required: true,
       unique:true
    },
    precio:Number,
    tipo_relleno: String,
    lugar: String,
    login_count: Number
}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);