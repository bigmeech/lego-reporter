/**
 * Created by tthlex on 23/10/15.
 */

var assert = require('assert');
var should = require('chai').should;
var request = require('supertest');
var nock = require('nock');

describe('My Reporter', function () {

    describe('should', function () {
        it('return 200 for GET /562d5df40f00009b38058384', function (done) {
            request('http://www.mocky.io/v2')
                .get('/562d5df40f00009b38058384')
                .expect(function (res) {
                    console.log("######## result #########ß");
                    console.log(res);
                })
                .expect(200, {
                    name: "larry",
                    age: 13,
                    gender: "Male"
                }, done);
            assert.equal(2, 2);
        });
        it('blow be 2', function () {
            assert.equal(2, 2);
        });
    });

    describe('should', function () {
        it('blow up', function () {
            assert.equal(2, 2);
        });
        it('blow be 2', function () {
            assert.equal(2, 2);
        });
    })

    describe('should', function () {
        it('blow up', function () {
            assert.equal(2, 2);
        });
        it('blow be 2', function () {
            assert.equal(2, 2);
        });
    });

    describe('should', function (done) {
        it('blow up', function () {
            assert.equal(2, 2);
        });
        it('blow be 2', function () {

            setTimeout(function () {
                assert.equal(2, 3);
                done();
            }, 20000);

        });
    })
});