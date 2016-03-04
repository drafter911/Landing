import Backbone from 'backbone';

export default Backbone.Model.extend({
    defaults: {
        title: '',
        paragraph: '',
        image: null
    }
});