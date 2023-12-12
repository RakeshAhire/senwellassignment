const { connect } = require("mongoose");

const connection = connect("mongodb+srv://RakeshAhire:Rakesh@cluster0.0agwmvo.mongodb.net/senwell?retryWrites=true&w=majority");

module.exports = { connection }