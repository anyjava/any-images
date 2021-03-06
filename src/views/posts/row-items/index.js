import Woowahan from 'woowahan';
import Template from './index.hbs';
import { ADD_FAVORITE } from '../../../actions';

export default Woowahan.ItemView.create('RowItem', { tagName: 'div',
    template: Template,

    currentIndex: 1,
    totalSize: 0,
    imageHost: "http://img.anyjava.net/upload/",
    images: [],

    events: {
        "click .btn-left": "onLeft",
        "click .btn-right": "onRight",
        'click .btn-favorite': 'onFavorite',
    },

    viewWillMount(renderData) {
        this.totalSize = renderData.images.length;
        renderData.hasAdditionalImage = this.totalSize > 1;
        renderData.titleImageUrl = this.imageHost + renderData.titleImageUrl;

        this.images = renderData.images;

        console.log(renderData);
    },

    viewDidMount() {
        $(this.refs.left).hide();
    },

    onSelectedRow(event, trigger) {
        trigger({ id: this.getModel('id') });
    },

    onLeft(e) {
        if (this.currentIndex > 1) {
            console.log('left');
            this.showLoadingImage();
            this.currentIndex--;
            this.replaceImage(this.images[this.currentIndex-1].url);
            $(this.refs.right).show();
            if (this.currentIndex === 1) $(this.refs.left).hide();
        }
    },

    onRight(e) {
        if (this.totalSize > this.currentIndex) {
            console.log('right');
            this.showLoadingImage();
            this.replaceImage(this.images[this.currentIndex].url);
            this.currentIndex++;
            $(this.refs.left).show();
            if (this.currentIndex === this.totalSize) $(this.refs.right).hide();
        }
    },

    showLoadingImage(el) {
        this.replaceImage("apple_loading.gif");
    },

    replaceImage(url) {
        console.log(url);
        this.refs.img.src = this.imageHost + url;
    },

    onFavorite(e) {
        const id = $(e.currentTarget).data('id');
        this.dispatch(Woowahan.Action.create(ADD_FAVORITE, {id: id, data: {}}), this.notiResult);
    },

    notiResult(data) {
        $("#noti").addClass('in alert');
        setTimeout(function () {
            $("#noti").removeClass('in alert');
        }, 2000);
        let m = this.getModel();
        m.countOfFavorite++;
        this.setModel(m);
    },
});
