describe('app.filters.EmrFormat', function() {
    var $filter;

    beforeEach(module('app.filters'));

    beforeEach(inject(function($injector){
        $filter = $injector.get('$filter');
    }));

    it('Should format text with correct variables', function(){
        var message = '%s module, version %s';
        var args = ['openhmis.commons', '3.5.0'];

        var formattedMessage = $filter('EmrFormat')(message, args);
        expect(formattedMessage).toEqual('openhmis.commons module, version 3.5.0');
    });
});