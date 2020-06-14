import { MockLookupServiceApp, MockLookupServiceDefaults } from '../../test/test.fixture';


describe('Service: Lookup', () => {
  let lookupDefault: MockLookupServiceDefaults;
  let lookupApp: MockLookupServiceApp;
  const httpSpy = jasmine.createSpyObj('http', ['get']);
  const testObj = {
    key: 'value'
  };
  const mockDefaults = {
    'loading.default': 'Loading',
    'signin.header': 'Sign in to NDA',
    'signin.username' : 'Username',
    'retry.limit': '10',
    'flag.true': 'true',
    'flag.false': 'false'
  };
  const mockApp = {
    'loading.default': 'Loading msg for a specific component',
    'component.content': 'Extra Words',
    'component.object': testObj
  };
  const forkJoin = {
    ...mockDefaults,
    ...mockApp
  };

  it('should be created', () => {
    lookupDefault = new MockLookupServiceDefaults(httpSpy);
    lookupApp = new MockLookupServiceApp(httpSpy);

    expect(lookupDefault).toBeTruthy();
    expect(lookupApp).toBeTruthy();
  });

  describe('load', function() {
    it('should load library defaults', () => {
      lookupDefault = new MockLookupServiceDefaults(httpSpy, [mockDefaults]);

      lookupDefault.load()
        .then(() => {
          expect(lookupDefault.keys).toEqual(mockDefaults);
        });
    });

    it('should combine library defaults with app content', () => {
      lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

      lookupApp.load()
        .then(() => {
          expect(lookupApp.keys).toEqual(forkJoin);
        });
    });
  });

  describe('lookup', function() {
    it('should return correct dictionary value as a string', () => {
      lookupDefault = new MockLookupServiceDefaults(httpSpy, [mockDefaults]);

      lookupDefault.load()
        .then(() => {
          expect(lookupDefault.lookup('loading.default')).toBe('Loading');
        });
    });

    it('should return key if not in dictionary', () => {
      const badKey = 'missing.key';
      lookupDefault = new MockLookupServiceDefaults(httpSpy, [mockDefaults]);

      lookupDefault.load()
        .then(() => {
          expect(lookupDefault.lookup(badKey)).toBe(badKey);
        });
    });
  });

  describe('lookupNumber', function() {
    it('should return correct dictionary value as a number', () => {
      lookupDefault = new MockLookupServiceDefaults(httpSpy, [mockDefaults]);

      lookupDefault.load()
        .then(() => {
          expect(lookupDefault.lookupNumber('retry.limit')).toBe(10);
        });
    });

    it('should return null if not in dictionary', () => {
      const badKey = 'missing.key';
      lookupDefault = new MockLookupServiceDefaults(httpSpy, [mockDefaults]);

      lookupDefault.load()
        .then(() => {
          expect(lookupDefault.lookupNumber(badKey)).toBeFalsy();
        });
    });
  });

  describe('lookupObject', function() {
    it('should return correct dictionary value as an object', () => {
      lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

      lookupApp.load()
        .then(() => {
          expect(lookupApp.lookupObject('component.object')).toEqual(testObj);
        });
    });

    it('should return key if not in dictionary', () => {
      const badKey = 'missing.key';
      lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

      lookupApp.load()
        .then(() => {
          expect(lookupApp.lookupObject(badKey)).toEqual(badKey);
        });
    });
  });

  describe('lookupOrNull', function() {
    it('should return correct dictionary value as an object', () => {
      lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

      lookupApp.load()
        .then(() => {
          expect(lookupApp.lookupOrNull('loading.default')).toEqual('Loading msg for a specific component');
        });
    });

    it('should return key if not in dictionary', () => {
      const badKey = 'missing.key';
      lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

      lookupApp.load()
        .then(() => {
          expect(lookupApp.lookupOrNull(badKey)).toBeFalsy();
        });
    });
  });

  describe('lookupFlag', function() {
    describe('variations of true', function () {
      it('should return true when true', () => {
        lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

        lookupApp.load()
          .then(() => {
            expect(lookupApp.lookupFlag('flag.true')).toBe(true);
          });
      });

      it('should return true when TRUE', () => {
        mockDefaults['flag.true'] = 'TRUE';
        lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

        lookupApp.load()
          .then(() => {
            expect(lookupApp.lookupFlag('flag.true')).toBe(true);
          });
      });

      it('should return true when True', () => {
        mockDefaults['flag.true'] = 'True';
        lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

        lookupApp.load()
          .then(() => {
            expect(lookupApp.lookupFlag('flag.true')).toBe(true);
          });
      });

      it('should return true when 1', () => {
        mockDefaults['flag.true'] = '1';
        lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

        lookupApp.load()
          .then(() => {
            expect(lookupApp.lookupFlag('flag.true')).toBe(true);
          });
      });
    });

    describe('variations of false', function () {
      it('should return false when false', () => {
        lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

        lookupApp.load()
          .then(() => {
            expect(lookupApp.lookupFlag('flag.false')).toBe(false);
          });
      });

      it('should return false when 0', () => {
        mockDefaults['flag.false'] = '0';
        lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

        lookupApp.load()
          .then(() => {
            expect(lookupApp.lookupFlag('flag.false')).toBe(false);
          });
      });

      it('should return false when T', () => {
        mockDefaults['flag.true'] = 'T';
        lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

        lookupApp.load()
          .then(() => {
            expect(lookupApp.lookupFlag('flag.true')).toBe(false);
          });
      });

      it('should return false when empty string', () => {
        mockDefaults['flag.true'] = '';
        lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);

        lookupApp.load()
          .then(() => {
            expect(lookupApp.lookupFlag('flag.true')).toBe(false);
          });
      });

      it('should return false when missing key', () => {
        lookupApp = new MockLookupServiceApp(httpSpy, [mockDefaults, mockApp]);
        lookupApp.load()
          .then(() => {
            expect(lookupApp.lookupFlag('flag.missing')).toBe(false);
          });
      });
    });
  });
});
