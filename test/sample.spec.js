/**
 * Created by tthlex on 23/10/15.
 */

var assert = require('assert');
describe('My Reporter', function(){
    describe('should', function(){
        it('blow up', function(){
            assert.equal(2,2);
        });
        it('blow be 2', function(){
            assert.equal(2,2);
        });
    })

    describe('should', function(){
        it('blow up', function(){
            assert.equal(2,2);
        });
        it('blow be 2', function(){
            assert.equal(2,2);
        });
    })

    describe('should', function(){
        it('blow up', function(){
            assert.equal(2,2);
        });
        it('blow be 2', function(){
            assert.equal(2,2);
        });
    });

    describe('should', function(){
        it('blow up', function(){
            assert.equal(2,2);
        });
        it('blow be 2', function(done){

            setTimeout(function(){
                assert.equal(2,3);
                done();
            },20000);

        });
    })
});