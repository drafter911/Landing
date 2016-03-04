import $ from 'jquery';
import _ from 'underscore';
import * as Backbone from 'backbone';
import Todos from './collections/itemsList'
import Common from './common';

export default Backbone.Router.extend({
    routes: {
        '/': 'initList'
    },

    initList: function () {
        List.fetch({reset: true});
    }
});
