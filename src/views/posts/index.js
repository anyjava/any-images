import Woowahan from 'woowahan';
import Template from './index.hbs';
import RowItem from './row-items';
import Pager from '../control/pager';

import { FETCH_POSTS } from '../../actions';

export default Woowahan.CollectionView.create('PostView', {
    template: Template,
    rowView: RowItem,
    rowContainer: '#items',

    initialize(options) {
        this.super();
    },
    viewWillMount() {
    },
    viewDidMount() {
        this.dispatch(Woowahan.Action.create(FETCH_POSTS), this.fetchPosts);
    },
    fetchPosts(data) {
        this.reload(data.data);

        var pageinfo = {
            currentPage: data.pageNumber,
                total: data.total,
            numOfRows: 10,
        };
        this.updateView('.pager-container', Pager, pageinfo);
    }
});
