import Woowahan from 'woowahan';
import LayoutView from './layouts/layout';
import HomeView from './views/home';
import PostsView from './views/posts';
import * as reducers from './reducers';
import './css/main.css';

global.$ = global.jQuery = Woowahan.$;

const app = new Woowahan();

app.use(reducers);

app.use(Woowahan.Layout('#app', LayoutView));

app.start({
  url: '/',
  container: '.contents',
  layout: 'LayoutView',
  view: PostsView,
  pages: [
  	{ url: '/posts', view: PostsView },
  ]
});
