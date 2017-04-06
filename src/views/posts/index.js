import Woowahan from 'woowahan';
import Template from './index.hbs';
import RowItem from './row-items';
import Pager from '../control/pager';

import { FETCH_POSTS } from '../../actions';

export default Woowahan.CollectionView.create('PostView', {
    template: Template,
    rowView: RowItem,
    rowContainer: '#items',

    events: {
        '@paging': 'onPaging',
    },

    initialize(options) {
        this.super();
    },
    viewWillMount() {
    },
    viewDidMount() {
        this.onSearch(0);
    },

    onSearch(page) {
        this.dispatch(Woowahan.Action.create(FETCH_POSTS, {page: page}), this.fetchPosts);
    },
    fetchPosts(data) {
        console.log(data);
        this.reload(data.content);

        var pageinfo = {
            currentPage: data.number,
                total: data.totalElements,
            numOfRows: data.size,
        };
        this.updateView('.pager-container', Pager, pageinfo);
        window.scrollTo(0,0);
    },

    onPaging(data) {
        console.log(data);
        this.onSearch(data);
    }

});
