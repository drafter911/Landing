import $ from 'jquery';
import _ from 'underscore';
import * as Backbone from 'backbone';
import List from '../collections/itemsList';
import template from '../templates/Item/item.html';

export default Backbone.View.extend({

    el: '.main-wrapper',
    template: _.template(template),

    events: {
        'click .add-more': 'addItems'
    },

    initialize: function () {
        this.$window = $(window);
        this.$content = $(this.el);
        this.$gallery = $('.gallery');
        this.$addBtn = this.$content.find('.add-more');

        if(this.checkScreenSize()) {
            this.activateInfiniteScroll();
        }
        this.$window.bind("resize.app", _.bind(this.activateInfiniteScroll, this));
        this.listenTo(List, 'reset', this.render);
    },

    render: function (collection) {
        this.collection = collection.toJSON();
            this.$gallery.append(this.template(this.collection));
    },

    checkScreenSize: function() {
        return this.$window.width() < 640
    },

    addItems: function () {
        this.render(List);
    },

    infinitScroll: function() {
        if(this.$content.scrollTop() + this.$content.innerHeight() >= this.$content[0].scrollHeight){
           this.addItems();
        }
    },
    activateInfiniteScroll: function() {
        if(this.checkScreenSize()) {
            this.$content.bind("scroll", _.bind(this.infinitScroll, this));
        }
        else {
            this.$content.unbind("scroll");
        }
    }
});
