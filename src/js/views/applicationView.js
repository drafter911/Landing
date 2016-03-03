import $ from 'jquery';
import _ from 'underscore';
import * as Backbone from 'backbone';
import List from '../collections/itemsList';
import ItemView from '../views/item/item';
import controlsTemplate from '../templates/controls/controls.html';
import Common from '../common';
import tpl from '../templates/Item/item.html';

export default Backbone.View.extend({

    el: '#task-manager',
    //template: _.template(controlsTemplate),
    template: _.template(tpl),

    events: {},

    initialize: function () {
        this.$body = $('#content');
        var view = new ItemView();
        //this.$body.append(view.render().el);
        for(let i=1; i<4; i++){
            this.$body.append(this.template);
        }
    },

    render: function () {
        //var view = new ItemView();
        //this.$body.append(view.render().el);
        //var completed = List.completed().length;
        //var remaining = List.remaining().length;
        //
        //if (List.length) {
        //    this.$main.show();
        //    this.$filterPanel.show();
        //
        //    this.$filterPanel.html(this.template({
        //        completed: completed,
        //        remaining: remaining
        //    }));
        //
        //    this.$('#filters li a')
        //        .removeClass('selected')
        //        .filter('[href="#/' + (Common.TodoFilter || '') + '"]')
        //        .addClass('selected');
        //} else {
        //    this.$main.hide();
        //    this.$filterPanel.hide();
        //}
        //
        //this.allCheckbox.checked = !remaining;
    },

    addOne: function (todo) {
        //var view = new ItemView({model: todo});
        //this.$todoList.append(view.render().el);
    },

    addAll: function () {
        this.$todoList.empty();
        List.each(this.addOne, this);
    },

    filterOne: function (todo) {
        todo.trigger('visible');
    },

    filterAll: function () {
        List.each(this.filterOne, this);
    },

    newAttributes: function () {
        let date = new Date(),
            newDate = date.getMonth() +1 + '.' + date.getDate() + '.'+ date.getFullYear()
                + ' ' + date.getHours() + ":" + date.getMinutes();

        return {
            title: this.$taskTitle.val().trim(),
            description: this.$taskDescription.val().trim(),
            order: List.nextOrder(),
            completed: false,
            priority: this.$priority.text(),
            createdAt: newDate,
            deadLine: this.$deadDate.val() + ' ' + this.$deadHour.text() + ':' + this.$deadMinutes.text()
        };
    },

    createTask: function (e) {
        if (!this.$taskDescription.val().trim()) {
            return;
        }
        this.createNewTask();
    },

    createOnEnter: function (e) {
        if (e.which !== Common.ENTER_KEY || !this.$taskDescription.val().trim()) {
            return;
        }
        this.createNewTask();
    },

    createNewTask: function() {
        List.create(this.newAttributes());
        this.$taskDescription.val('');
        this.$taskTitle.val('');
    },

    clearCompleted: function () {
        _.invoke(List.completed(), 'destroy');
        return false;
    },

    toggleAllComplete: function () {
        var completed = this.allCheckbox.checked;

        List.each(function (todo) {
            todo.save({
                completed: completed
            });
        });
    }
});
