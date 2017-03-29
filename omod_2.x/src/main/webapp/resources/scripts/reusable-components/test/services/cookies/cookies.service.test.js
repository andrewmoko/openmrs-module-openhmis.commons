describe('app.cookies.PaginationService', function() {
    beforeEach(module('ngCookies'));
    beforeEach(module('app.cookies'));

    var CookiesService;

    beforeEach(inject(function ($injector) {
        CookiesService = $injector.get('CookiesService');
    }));

    it('Should store a variable in cookies', function () {
        CookiesService.set('framework', 'jasmine');
        expect(CookiesService.get('framework'), 'jasmine');
    });

    it('Should remove a variable stored in cookies', function (){
        CookiesService.set('framework', 'jasmine');
        expect(CookiesService.get('framework'), 'jasmine');

        CookiesService.remove('framework');
        expect(CookiesService.get('framework')).toBe(undefined);
    });
});