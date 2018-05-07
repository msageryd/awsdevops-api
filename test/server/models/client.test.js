'use strict';

const expect = require('chai').expect;
const clientController = require('../../../server/models/client.js');

describe('client model controller', function() {
  it('should exist', () => {
    expect(clientController).to.exist;
    expect(clientController()).to.equal(undefined);
  });
});
