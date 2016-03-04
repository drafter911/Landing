import _ from 'underscore';
import Backbone from 'backbone';
import Item from '../models/item';

var BB =  Backbone.Collection.extend({

    model: Item,
    url: '/data/items.json'
});

export default new BB();