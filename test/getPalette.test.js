var getPalette = require("../lib/getPalette.js");
var expect = require("chai").expect;

describe("getPalette",function(){
    
    
    it('should throw an error if getPalette is not an array',function(done){
        var notArray = function(){
            getPalette(process.cwd()+"/test/fixtures/config-palette-non-array.json");
        };
        expect(notArray).to.throw(/is not an array/);
        done();
    });
        
    it("should return an array of 3 items by default",function(){
        var palette = getPalette();
        assert(Array.isArray(palette),"did not return an array");
        assert.equal(palette.length,3,"did not return a length of 3");
    })
})