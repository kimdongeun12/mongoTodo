const mongoose = require('mongoose');
// 스키마 작성으로 틀 작성하기
const todoTaskSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('TodoTask', todoTaskSchema);