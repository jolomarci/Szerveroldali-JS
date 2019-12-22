var expect = require('chai').expect;
var getPartMW = require('../../../middlewares/part/getPartMW');

describe('getPartMW middleware ', function () {
    it('should return a part by a partid', function(done){
        const mw = getPartMW({
            partModel:{
                findOne: (part, cb) => {
                    expect(part).to.be.eql({_id: '123'});
                    cb(null, 'mockpart');
                }
            }
        });

        const resMock = {
            locals:{}
        };

        mw(
            {
                params: {
                    partid: '123'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql(undefined);
                expect(resMock.locals).to.be.eql({part: 'mockpart'});
                done();
            }
        )
    })

    it('should return err if db returns error (no part found)', function(done){
        const mw = getPartMW({  
            partModel:{
                findOne: (part, cb) => {
                    expect(part).to.be.eql({_id: '123'});
                    cb('dbError', null);
                }
            }
        });

        const resMock = {
            locals:{}
        };

        mw(
            {
                params: {
                    partid: '123'
                }
            },
            resMock,
            (err) => {
                expect(err).to.be.eql('dbError');
                done();
            }
        )
    })
})
