import $ from 'jquery';
import _ from 'underscore';
import * as Backbone from 'backbone';
import itemTemplate from '../../templates/Item/item.html';
import Common from '../../common';

export default Backbone.View.extend({

    tagName:  'li',

    el: '#ul',

    className: 'rel panel panel-primary',

    template: _.template(itemTemplate),

    events: {
    },

    initialize: function () {
    },

    render: function () {
        //this.el.html(this.template);
        //this.$el.toggleClass('completed', this.model.get('completed'));
        //
        //this.toggleVisible();
        //this.$taskDescription = this.$('.edit');
        //return this;
        return this.template;
    },

    toggleVisible: function () {
        this.$el.toggleClass('hidden',  this.isHidden());
    },

    isHidden: function () {
        var isCompleted = this.model.get('completed');
        return (
            (!isCompleted && Common.TodoFilter === 'completed') ||
            (isCompleted && Common.TodoFilter === 'active')
        );
    },

    toggleCompleted: function () {
        this.model.toggle();
    },

    edit: function () {
        this.$el.addClass('editing');
        this.$taskDescription.focus();
    },

    close: function () {
        var value = this.$taskDescription.val();
        var trimmedValue = value.trim();

        if (trimmedValue) {
            this.model.save({ title: trimmedValue });

            if (value !== trimmedValue) {
                this.model.trigger('change');
            }
        } else {
            this.clear();
        }

        this.$el.removeClass('editing');
    },

    updateOnEnter: function (e) {
        if (e.keyCode === Common.ENTER_KEY) {
            this.close();
        }
    },

    revertOnEscape: function (e) {
        if (e.which === Common.ESCAPE_KEY) {
            this.$el.removeClass('editing');
            this.$taskDescription.val(this.model.get('title'));
        }
    },

    clear: function () {
        this.model.destroy();
    }
});
