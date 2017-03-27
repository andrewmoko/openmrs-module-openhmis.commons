describe('app.pagination.PaginationService', function(){
  beforeEach(module('app.genericMetadataModel'));
  beforeEach(module('restangular'));
  beforeEach(module('app.restfulServices'));
  beforeEach(module('app.pagination'));

  var PaginationService, EntityRestFactory;

  beforeEach(inject(function($injector){
    PaginationService = $injector.get('PaginationService');
    EntityRestFactory = $injector.get('EntityRestFactory');
  }));

  it('Should get the start of a page', function() {
    var currentPage = 2;
    var limit = 5;
    var pagingLimit = PaginationService.pagingFrom(currentPage, limit);
    expect(pagingLimit).toEqual(6);
  });

  it('Should get the end of a page', function() {
    var currentPage = 2;
    var limit = 5;
    var totalNumOfResults = 42;
    var pagingLimit = PaginationService.pagingTo(currentPage, limit, totalNumOfResults);
    expect(pagingLimit).toEqual(10);
  });

  it('Should create paging params', function() {
    var page = 2;
    var limit = 5;
    var pagingParams = PaginationService.paginateParams(page, limit);
    expect(pagingParams.limit).toEqual(5);
    expect(pagingParams.startIndex).toEqual(6);
  });

  it('Should create paging params', function() {
    var totalNumberOfResults = 24;
    var limit = 5;
    var pages = PaginationService.computeNumberOfPages(totalNumberOfResults, limit);
    expect(pages).toEqual(5);
  });

  it('Should spy on the paginate function', function() {
    var params = PaginationService.paginateParams(1, 5);
    var successfulCallback = jasmine.createSpy('onPaginateSuccess');
    var errorCallback = jasmine.createSpy('onPaginateError');

    spyOn(EntityRestFactory, 'loadEntities').and.callFake(function(){});

    PaginationService.paginate(params, successfulCallback, errorCallback);

    expect(EntityRestFactory.loadEntities).toHaveBeenCalled();

    // TODO: Add spy on the nested GenericMetadataModel.populateModels
  });
});
