import $ from 'jquery';
import _ from 'underscore';
import * as Backbone from 'backbone';
import List from '../collections/itemsList';
import ItemView from '../views/item/item';
import controlsTemplate from '../templates/controls/controls.html';
import Common from '../common';
import tpl from '../templates/Item/item.html';

export default Backbone.View.extend({

    el: '#content',
    //template: _.template(controlsTemplate),
    template: _.template(tpl),

    events: {
        'click .add-more': 'addOne'
    },

    initialize: function () {
        List.fetch({reset: true});
        //List.bind('reset', function () { console.log(List.toJSON()); });
        //List.fetch({reset: true});
        this.$window = $(window);
        this.$content = $(this.el);
        this.$gallery = $('.gallery');

        if(this.checkScreenSize()) {
            this.someFunc();
        }
        this.$window.bind("resize.app", _.bind(this.someFunc, this));
        var view = new ItemView();
        //this.$body.append(view.render().el);
        //this.render();
        //this.render();
        //this.render();
        this.listenTo(List, 'reset', this.render);
    },

    render: function (params) {
        this.addOne();
        console.log(params);
        for(let i=1; i<4; i++){
            this.$gallery.append(this.template);
        }
    },

    //serializeData: function(params) {
    //    console.log(this.collection);
    //},

    checkScreenSize: function() {
        return this.$window.width() < 640
    },

    addOne: function (todo) {
        //this.render();
        var view = new ItemView({model: todo});
        this.$gallery.append(view.render().el);
    },

    infinitScroll: function() {
        if(this.$content.scrollTop() + this.$content.innerHeight() >= this.$content[0].scrollHeight){
           this.addOne();
        }
    },
    someFunc: function() {
        if(this.checkScreenSize()) {
            this.$content.bind("scroll", _.bind(this.infinitScroll, this));
        }
        else {
            this.$content.unbind("scroll");
        }
    }
});
