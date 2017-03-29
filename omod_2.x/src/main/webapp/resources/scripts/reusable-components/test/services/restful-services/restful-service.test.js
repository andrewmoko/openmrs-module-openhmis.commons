describe('app.restfulServices.RestfulService', function() {
    beforeEach(module('restangular'));
    beforeEach(module('app.restfulServices'));

    var RestfulService, Restangular;

    beforeEach(inject(function ($injector) {
        Restangular = $injector.get('Restangular');
        RestfulService = $injector.get('RestfulService');
    }));

    it('Should set base url', function(){
        spyOn(Restangular, 'setBaseUrl');
        RestfulService.setBaseUrl('test');

        expect(Restangular.setBaseUrl).toHaveBeenCalled();
    });

    it('Should test Restangular.all call', function(){
        var successfulCallback = jasmine.createSpy('successfulCallback');
        var errorCallback = jasmine.createSpy('errorCallback');

        spyOn(Restangular, 'all').and.callThrough();

        RestfulService.all('users', '', successfulCallback, errorCallback);

        expect(Restangular.all).toHaveBeenCalled();
    });
});