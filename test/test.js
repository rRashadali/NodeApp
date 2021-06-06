const chai = require("chai");
const chaiHttp = require("chai-http");
let should = chai.should();
const expect = chai.expect;
const server = require("../app.js");

chai.use(chaiHttp);

const request = chai.request(server).keepOpen();
/* For  Get alll todos*/
describe("GET Todos List by Get Method", () => {
  let response;
  
  before(async () => {
    response = await request.get("/api/todos").set({
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYmIyOTQxYWMxZTdhMTkyODQxMjJlZSIsImVtYWlsIjoicmFzaGFkODY3NkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJSYXNoYWQiLCJsYXN0TmFtZSI6IkFsaSIsImlhdCI6MTYyMjk2MzMwNiwiZXhwIjoxNjIyOTY2OTA2fQ.D5yy8MuGQBsmNI9r1NaK9GxX9rKY4Zbwan9Uz7YGsFE",
      
    });
  });
  it("Should send status code 200", (done) => {
      console.log(response);
      response.should.have.status(200);    
    done();
  });
  it("should send json data ", (done) => {  
    expect(response.body).to.be.an("Object");
    done();
  });
  
});
/* For  Get Single  todo by id*/
describe("GET Todo by id", () => {
    let response;
    
    before(async () => {
      response = await request.get("/api/todos/60bb380f73b01a0a2c0a81af").set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYmIyOTQxYWMxZTdhMTkyODQxMjJlZSIsImVtYWlsIjoicmFzaGFkODY3NkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJSYXNoYWQiLCJsYXN0TmFtZSI6IkFsaSIsImlhdCI6MTYyMjk2MzMwNiwiZXhwIjoxNjIyOTY2OTA2fQ.D5yy8MuGQBsmNI9r1NaK9GxX9rKY4Zbwan9Uz7YGsFE",
        
      });
    });
    it("Should send status code 200", (done) => {
        console.log(response);
        response.should.have.status(200);    
      done();
    });
    it("should send single json data ", (done) => {  
      expect(response.body).to.be.an("Object");
      done();
    });
    
  });
/* For  Post or create todo*/
  describe("Create Todo", () => {
    let response;
    
    before(async () => {
      response = await request.post("/api/todos").set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYmIyOTQxYWMxZTdhMTkyODQxMjJlZSIsImVtYWlsIjoicmFzaGFkODY3NkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJSYXNoYWQiLCJsYXN0TmFtZSI6IkFsaSIsImlhdCI6MTYyMjk2MzMwNiwiZXhwIjoxNjIyOTY2OTA2fQ.D5yy8MuGQBsmNI9r1NaK9GxX9rKY4Zbwan9Uz7YGsFE",
        
      }).send({
        "taskName": "Task5",
        "taskDescription": "This is very easy task but very very trick full"
    });
    });
    it("Should send status code 201", (done) => {
        response.should.have.status(201);    
      done();
    });
    it("Should return created data ", (done) => {  
      expect(response.body).to.be.an("Object");
      done();
    });
    
  });


  /* For  PUT/Update todo*/

  describe("Create Todo", () => {
    let response;
    
    before(async () => {
      response = await request.put("/api/todos/60bb380f73b01a0a2c0a81af").set({
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwYmIyOTQxYWMxZTdhMTkyODQxMjJlZSIsImVtYWlsIjoicmFzaGFkODY3NkBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJSYXNoYWQiLCJsYXN0TmFtZSI6IkFsaSIsImlhdCI6MTYyMjk2MzMwNiwiZXhwIjoxNjIyOTY2OTA2fQ.D5yy8MuGQBsmNI9r1NaK9GxX9rKY4Zbwan9Uz7YGsFE",
        
      }).send({
        "taskName": "Task1",
        "taskDescription": "This is fist task in todo list"
    });
    });
    it("Should send status code 200", (done) => {
        response.should.have.status(200);    
      done();
    });
    it("Should return updated data ", (done) => {  
      expect(response.body).to.be.an("Object");
      done();
    });
    
  });


