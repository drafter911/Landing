import _ from 'underscore';
import Backbone from 'backbone';
import Item from '../models/item';

var BB =  Backbone.Collection.extend({

    model: Item,
    url: '/data/items.json',

    initialize: function() {
        this.fetch({reset: true});
    }
});

export default new BB();