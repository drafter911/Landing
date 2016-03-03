import Backbone from 'backbone';

export default Backbone.Model.extend({
    defaults: {
        title: '',
        description: '',
        completed: false,
        priority: '',
        createdAt: null,
        deadLine: null
    },

    toggle: function () {
        this.save({
            completed: !this.get('completed')
        });
    }
});