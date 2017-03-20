import Woowahan from 'woowahan';
import { FETCH_POSTS } from '../actions';

export const fetchPost = Woowahan.Reducer.create(FETCH_POSTS, function(options) {
  this.onSuccess = function(response) {
		this.finish(response);
  };

  // this.getData(`https://jsonplaceholder.typicode.com/posts`);
    this.finish({
        total: 20,
        pageNumber: 1,
        data: [
            {
                id: 1,
                url: "http://www.naver.com",
                subject: "naver",
                hit: 10,
            },
            {
                id: 2,
                url: "http://www.daum.net",
                subject: "daum",
                hit: 10,
            }
        ]

    });
});


