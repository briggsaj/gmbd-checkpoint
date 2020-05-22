const supertest = require('supertest');
const app = require('./app')
const express = require('express');
//const fs = require("fs")
const request = supertest(app)

jest.setTimeout(30000)

describe('GET /', () => {
    test("gets hello world", done => {
        request
        .get("/")
        .expect(200, 'Hello World' )
        .end(done)
    })
})

describe('GET /movies', () => {
    test("list all movies", done => {
        request
        .get("/movies")
        .set('Content-Type', 'application/json')
        .expect('Content-Type', 'application/json; charset=utf-8')
        .expect(200)
        .end(done)
    })

    test('GETs the expected data from movies endpoint', async done => {
        const res = await request.get("/movies/1")
        let expected = (res.body[0]["id"])
        expect(expected).toEqual(1)
        expect(res.body.length).toEqual(1)
        done()
    })

    test('GETs the expected data from movies endpoint by title search', async done => {
        //const res = await request.get("/titles?search=The Notebook")
        //let search = req.query.search;

        //https://stackabuse.com/?page=2&limit=3
        //let page = req.query.page;
        //let limit = req.query.limit;

        //let title = req.query.title;
        const res = await request.get("/movies?title=The%20Notebook")
        let expected = (res.body[0]["title"])
        expect(expected).toBe("The Notebook")
        done()
    })//GET movies?search=<query>

})





//   it('GETs the expected data from movies endpoint', async done => {
//     const res = await request.get('/movies')
//     let expected = (res.body[0]["movieId"])
//     expect(expected).toEqual(1)
//     done()
//   })

//   it('GETs the movies endpoint', async done => {
//     const response = await request.get('/movies')
//     expect(response.status).toBe(200)
//     done()
//   })


//   describe('POSTs reviews about moves', function() {
//     it('POSTs reviews to endpoint', function(done) {
//       request(app)
//         .post('/reviews')
//         .send({id: '2', review: 'Great Movie', rating: 'A'})
//         .set('Accept', 'application/json')
//         .expect(function(res) {
//           res.body.id = 'some fixed id';
//           res.body.name = res.body.name.toLowerCase();
//         })
//         .expect(response.status).toBe(200)
//     });

//     it('POSTs sends missing information to endpoint', function(done) {
//       request(app)
//         .post('/reviews')
//         .send({id: '2'})
//         .set('Accept', 'application/json')
//         .expect(function(res) {
//           res.body.id = 'Your request cannot be completed';
//           res.body.name = res.body.name.toLowerCase();
//         })
//         .expect(response.status).toBe(400)
//     });
//   });



// let req = request('http://localhost:3001/')

// describe('Runs the test for the url', () => {

//     it('200 responce for comments',function(done){
//         req
//         .get('movies')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
// })