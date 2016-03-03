import * as Backbone from 'backbone';
import AppView from './js/views/applicationView';
import AppRouter from './js/router';

new AppRouter();

Backbone.history.start();

new AppView();