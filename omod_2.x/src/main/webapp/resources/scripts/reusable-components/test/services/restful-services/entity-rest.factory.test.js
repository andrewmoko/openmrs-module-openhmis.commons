describe('app.restfulServices.EntityRestFactory', function() {
    beforeEach(module('restangular'));
    beforeEach(module('app.restfulServices'));

    var EntityRestFactory, RestfulService;

    beforeEach(inject(function ($injector) {
        EntityRestFactory = $injector.get('EntityRestFactory');
        RestfulService = $injector.get('RestfulService');
    }));

    it('Should load entity', function(){
        var response = '';
        var successfulCallback = jasmine.createSpy('successfulCallback');
        var errorCallback = jasmine.createSpy('errorCallback');
        var baseParams = [{"rest_entity_name": "commons", "uuid": "11-22-33-44-ff"}];

        spyOn(RestfulService, "one").and.callFake(function(){
            response = {"name": "test", "uuid": "11-22-33-44-ff"};
        });

        EntityRestFactory.loadEntity(baseParams, successfulCallback, errorCallback);
        expect(RestfulService.one).toHaveBeenCalled();
        expect(response.uuid).toEqual("11-22-33-44-ff");
    });

    it('Should create an entity', function(){
        var successfulCallback = jasmine.createSpy('successfulCallback');
        var errorCallback = jasmine.createSpy('errorCallback');
        var baseParams = [{"rest_entity_name": "commons"}];
        var openmrsObject = {"name": "New Entity", "retire": false, "description": "Description"};

        spyOn(RestfulService, "saveOrUpdate").and.callFake(function(){
            openmrsObject.uuid = "11-22-33-44-ff";
        });

        EntityRestFactory.saveOrUpdateEntity(baseParams, openmrsObject, successfulCallback, errorCallback);
        expect(RestfulService.saveOrUpdate).toHaveBeenCalled();
        expect(openmrsObject.uuid).toEqual("11-22-33-44-ff");
    });

    it('Should retire an entity', function(){
        var successfulCallback = jasmine.createSpy('successfulCallback');
        var errorCallback = jasmine.createSpy('errorCallback');
        var baseParams = {"rest_entity_name": "commons"};
        var openmrsObject = {
            "name": "New Entity", "retire": false, "uuid": "11-dd-efr-45", "retireReason": "test"
        };

        spyOn(RestfulService, "remove").and.callFake(function(){});

        EntityRestFactory.retireOrUnretireEntity(baseParams, openmrsObject, successfulCallback, errorCallback);
        expect(RestfulService.remove).toHaveBeenCalled();
    });

    it('Should un-retire an entity', function(){
        var successfulCallback = jasmine.createSpy('successfulCallback');
        var errorCallback = jasmine.createSpy('errorCallback');
        var baseParams = {"rest_entity_name": "commons"};
        var openmrsObject = {
            "name": "New Entity", "retired": true, "uuid": "11-dd-efr-45", "retireReason": "test"
        };

        spyOn(RestfulService, "saveOrUpdate").and.callFake(function(){
            openmrsObject.retired = false;
        });

        EntityRestFactory.retireOrUnretireEntity(baseParams, openmrsObject, successfulCallback, errorCallback);
        expect(RestfulService.saveOrUpdate).toHaveBeenCalled();
        expect(openmrsObject.retired).toEqual(false);
    });

    it('Should purge an entity', function(){
        var successfulCallback = jasmine.createSpy('successfulCallback');
        var errorCallback = jasmine.createSpy('errorCallback');
        var baseParams = {"rest_entity_name": "commons"};
        var openmrsObject = {
            "name": "New Entity", "retire": false, "uuid": "11-dd-efr-45", "retireReason": "test"
        };

        spyOn(RestfulService, "remove").and.callFake(function(){});

        EntityRestFactory.purgeEntity(baseParams, openmrsObject, successfulCallback, errorCallback);
        expect(RestfulService.remove).toHaveBeenCalled();
    });

    it('Should load entities', function(){
        var successfulCallback = jasmine.createSpy('successfulCallback');
        var errorCallback = jasmine.createSpy('errorCallback');
        var baseParams = {"rest_entity_name": "commons"};
        var results = [];

        spyOn(RestfulService, "all").and.callFake(function(){
            results = [
                {
                    "name": "Entity 1",
                    "uuid": "343-343-11"
                },
                {
                    "name": "Entity 2",
                    "uuid": "443-232-22"
                },
                {
                    "name": "Entity 3",
                    "uuid": "543-909-33"
                }
            ];
        });

        EntityRestFactory.loadEntities(baseParams, successfulCallback, errorCallback);
        expect(RestfulService.all).toHaveBeenCalled();
        expect(results.length).toEqual(3);
    });
});