import _ from 'underscore';
import Backbone from 'backbone';
import localStorage from 'backbone.localstorage';
import Item from '../models/item';

var BB =  Backbone.Collection.extend({

    model: Item,
    localStorage: new Store('todos-backbone'),

    completed: function () {
        return this.where({completed: true});
    },

    remaining: function () {
        return this.where({completed: false});
    },

    nextOrder: function () {
        return this.length ? this.last().get('order') + 1 : 1;
    },

    comparator: 'order'
});

export default new BB();