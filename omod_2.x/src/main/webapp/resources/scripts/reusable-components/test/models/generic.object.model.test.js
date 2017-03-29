describe('app.genericMetadataModel.GenericObjectModel', function() {
    var GenericObjectModel;

    beforeEach(module('app.genericMetadataModel'));

    beforeEach(inject(function($injector){
        GenericObjectModel = $injector.get('GenericObjectModel');
    }));

    it('Should get default fields', function(){
        var fields = GenericObjectModel.getModelFields();
        expect(fields[0]).toEqual('uuid');
    });

    it('Should populate generic object model', function(){
        var data = [];
        data[0] = {
            'uuid' : '00034-34fafa-3fda3fefad3'
        };

        var models = GenericObjectModel.populateModels(data);
        expect(models[0].uuid).toEqual('00034-34fafa-3fda3fefad3');
    });

    it('Should create a generic object model instance', function(){
        expect(GenericObjectModel.newModelInstance()).toEqual({'uuid':''});
    });
});