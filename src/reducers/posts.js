import Woowahan from 'woowahan';
import { FETCH_POSTS, ADD_FAVORITE } from '../actions';

export const fetchPost = Woowahan.Reducer.create(FETCH_POSTS, function(options) {
  this.onSuccess = function(response) {
		this.finish(response);
  };

  this.getData('http://scrap.api.anyjava.net:8081/articles?size=20&page=' + options.page);
});

export const addFavorite = Woowahan.Reducer.create(ADD_FAVORITE, function (options) {
    this.onSuccess = function(response) {
        this.finish(response);
    };

    this.postData('http://scrap.api.anyjava.net:8081/articles/' + options.id + '/favorites', options.data);

});

