import $ from 'jquery';
import _ from 'underscore';
import * as Backbone from 'backbone';
import Todos from './collections/itemsList'
import Common from './common';

export default Backbone.Router.extend({
    routes: {
        '*filter': 'setFilter'
    },

    setFilter: function (param) {
        Common.TodoFilter = param || '';
        Todos.trigger('filter');
    }
});
