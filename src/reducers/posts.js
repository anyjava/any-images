import Woowahan from 'woowahan';
import { FETCH_POSTS } from '../actions';

export const fetchPost = Woowahan.Reducer.create(FETCH_POSTS, function(options) {
  this.onSuccess = function(response) {
		this.finish(response);
  };

  this.getData('http://13.124.106.31:8080/articles');
});


