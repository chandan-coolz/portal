'use strict';

describe('Controller: MainModuleCtrl', function () {

  // load the controller's module
  beforeEach(module('currentPtojectApp'));

  var MainModuleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainModuleCtrl = $controller('MainModuleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MainModuleCtrl.awesomeThings.length).toBe(3);
  });
});
