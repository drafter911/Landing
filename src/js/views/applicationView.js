import $ from 'jquery';
import _ from 'underscore';
import * as Backbone from 'backbone';
import List from '../collections/itemsList';
import ItemView from '../views/item/item';
import controlsTemplate from '../templates/controls/controls.html';
import Common from '../common';
import tpl from '../templates/Item/item.html';

export default Backbone.View.extend({

    el: 'body',
    //template: _.template(controlsTemplate),
    template: _.template(tpl),

    events: {
        'click .add-more': 'addOne'
    },

    initialize: function () {
        console.log(this);
        if($(window).width() < 640 ) {
            this.someFunc();
        }
        $(window).bind("resize.app", _.bind(this.someFunc, this));
        this.$body = $('.gallery');
        var view = new ItemView();
        //this.$body.append(view.render().el);
        this.render();

    },

    render: function () {
        for(let i=1; i<4; i++){
            this.$body.append(this.template);
        }
    },

    addOne: function (todo) {
        this.render();
        //var view = new ItemView({model: todo});
        //this.$todoList.append(view.render().el);
    },

    infinitScroll: function() {
        if($('#content').scrollTop() + $('#content').innerHeight() >= $('#content')[0].scrollHeight){
           this.addOne();
        }
    },
    someFunc: function() {
        console.log($(window).width());
        if($(window).width() < 640 ) {
            $('#content').bind("scroll", _.bind(this.infinitScroll, this));
        }
        else {
            $('#content').unbind("scroll");
            console.log('unbinded');
        }
    }
});
