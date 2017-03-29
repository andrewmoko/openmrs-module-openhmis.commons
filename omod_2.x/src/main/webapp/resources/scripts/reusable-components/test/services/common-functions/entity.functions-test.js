describe('app.pagination.PaginationService', function() {
    beforeEach(module('app.entityFunctionsFactory'));

    var EntityFunctions;

    beforeEach(inject(function ($injector) {
        EntityFunctions = $injector.get('EntityFunctions');
    }));

    it('Should test print function', function(){
        EntityFunctions.printPage('/openmrs/referenceapplication/home.page');
        expect(document.getElementById("printPage")).not.toBe(null);
    });

    it('Should add e')
});