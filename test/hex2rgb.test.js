var hex2rgb = require('../lib/hex2rgb');
var expect = require('chai').expect;

describe.only("hex2rgb",function() {
    it("should throw an error if the value is not hex value", function(done){
        
        hex2rgb("blue",function(error,result){
            expect(error).to.exist;
            done();
        });
        
    });
    it("should return a correctly formatted rgb value of [255,255,255]",function(done){
        hex2rgb('#fff',function(error,result){
            expect(error).to.not.exist;
            expect(result).to.deep.equal([255,255,255]);    
            done();
        });
    });
    it("should return a rgb value if an rgb value is passed in");
});