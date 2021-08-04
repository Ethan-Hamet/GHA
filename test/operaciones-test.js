var chai = require('chai');
var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;
var calculator = require('../operaciones');

describe('Testing de la manera assert : ', function() {
  describe('funciones de suma y resta', function(){
    it('Suma', function() {
       result = calculator.addTest(1,1);
       assert.equal(result, 4);

       
    });

    it('resta', function() {
    result = calculator.resTest (1,1);
       assert.equal(result, 0);
    });
  });
})


describe('Testing de la manera should: ', function() {
    describe('funciones de suma y resta', function(){
      it('Suma', function() {
         result = calculator.addTest(1,1);
         result.should.be.equal(2);
      })

      it('resta', function() {
        result = calculator.resTest (1,1);
        result.should.be.equal(0);
          
        });
    })
  })

  describe('TTesting de la manera expect: ', function() {
    describe('funciones de suma y resta', function(){
      it('Suma', function() {
         result = calculator.addTest(1,1);
          expect(result).to.equal(2);
      })
      it('resta', function() {
            result = calculator.resTest (1,1);
            expect(result).to.equal(0);
           
        });
    })
  })
