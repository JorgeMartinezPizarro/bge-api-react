/* global describe, it */
// import helpers
import should from 'ecc-test-helpers';
import './spec_helper.js';

// imports
import TestComp from '../index.js';
import {Store as testChannel} from '../index.js';
import {Widget as TestWidget} from '../index.js';

import intlData from '../src/locales';

describe('webvowl suite', function() {
    describe('webvowl Component', function() {
        it('should render', function(done) {
            const React = this.React;
            const TestUtils = this.TestUtils;

            // render
            const comp = TestUtils.renderIntoDocument(
                <TestComp />
            );

            done();
        });
    });

    // main test suite
    describe('webvowl Store', function() {
        it('should exist', function() {
            // check object
            should.exist(testChannel);
        });

        it('should do work', function(done) {
            // ...
            done();
        });
    });

    describe('webvowl Widget', function() {
        it('should render', function() {
            const React = this.React;
            const TestUtils = this.TestUtils;

            // Render a checkbox with label in the document
            const comp = TestUtils.renderIntoDocument(
                <TestWidget {...intlData.en} />
            );

            // TODO: test me
            // ...
        });
    });
});
