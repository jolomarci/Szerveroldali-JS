var expect = require('chai').expect;
var saveCarMW = require('../../../middlewares/car/saveCarMW');

describe('getPartMW middleware ', function () {
    it('should save a car', function (done) {
        const mw = saveCarMW({
            carModel: {}
        });

        const resMock = {
            locals: {
                car: {
                    save: (cb)=>{
                        cb(null);
                    }
                }
            },
            
            redirect: (where) => {
                expect(where).to.be.eql('/car/Opel');
                done();
            }
        };

        mw(
            {
                body: {
                    brandlist: 'Opel',
                    model: 'Astra',
                    year: '2019'
                },
            },
            resMock,
        )
    })

    it('should return err if there is an error when saving a car', function (done) {
        const mw = saveCarMW({
            carModel: 'kocsi',
        });

        const resMock = {
            locals: {
                car: {
                    save: (cb)=>{
                        cb('carSaveError');
                    }
                }
            },
        };

        mw(
            {
                body: {
                    brandlist: 'Opel',
                    model: 'Astra',
                    year: '2019'
                },
            },
            resMock,
            (err) =>{
                expect(err).to.be.eql('carSaveError');
                done();
            }
        )
    })
})