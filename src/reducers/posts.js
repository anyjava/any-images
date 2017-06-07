import Woowahan from 'woowahan';
import { FETCH_POSTS, ADD_FAVORITE } from '../actions';

// const HOST = 'http://localhost:8080';
// const HOST = 'http://scrap.api.anyjava.net:8081';
const HOST = 'http://scrap.api.anyjava.net:8080';

export const fetchPost = Woowahan.Reducer.create(FETCH_POSTS, function(options) {
  this.onSuccess = function(response) {
		this.finish(response);
  };

  this.getData(HOST + '/articles?size=20&page=' + options.page);
});

export const addFavorite = Woowahan.Reducer.create(ADD_FAVORITE, function (options) {
    this.onSuccess = function(response) {
        this.finish(response);
    };

    this.postData(HOST + '/articles/' + options.id + '/favorites', options.data);

});

