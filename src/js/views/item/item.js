import $ from 'jquery';
import _ from 'underscore';
import * as Backbone from 'backbone';
import itemTemplate from '../../templates/Item/item.html';
import Common from '../../common';

export default Backbone.View.extend({

    tagName:  'div',

    el: '#content',

    className: 'gallery-elem-container pull-left',

    template: _.template(itemTemplate),

    events: {
    },

    initialize: function () {
        console.log(this.model);
        this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
        //alert('!');
        //this.el.html(this.template);
        //this.$el.toggleClass('completed', this.model.get('completed'));

        //this.toggleVisible();
        //this.$taskDescription = this.$('.edit');
        //return this;
        //return this.template;
    }
});
