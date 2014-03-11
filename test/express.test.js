var superagent = require('superagent')
var expect = require('expect.js')
var URL = 'http://localhost:8000/'


describe('RESTfull API uniTest', function() {
    var id


    it('00 CLEAR> clear everything before testing', function(done) {
        superagent.post(URL + 'userlist/clear')
            .send({})
            .end(function(e, res) {
                expect(e).to.eql(null)
                console.log('00 CLEAR> clear everything before testing');

                done()
            })
    })

    it('01 POST> create new collection', function(done) {
        superagent.post(URL + 'adduser')
            .send({
                name: 'test_user',
                email: 'test_user@test.info'
            })
            .end(function(e, res) {

                expect(e).to.eql(null)
                expect(res.body.msg.length).to.eql(1)
                expect(res.body.msg[0]._id.length).to.eql(24)
                id = res.body.msg[0]._id

                console.log(' 01 POST> create new collection');

                done()
            })
    })


    it('02 GET> get a collection', function(done) {
        superagent.get(URL + 'userlist')
            .end(function(e, res) {

                expect(e).to.eql(null)
                expect(res.body.length).to.be.above(0)
                expect(res.body.map(function(item) {
                    return item._id
                })).to.contain(id)

                console.log(' 02 GET> get a collection');

                done()
            })
    })



})