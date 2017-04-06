import Woowahan from 'woowahan';
import Template from './index.hbs';

export default Woowahan.ItemView.create('RowItem', {
    tagName: 'div',
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
            this.currentIndex--;
            this.replaceImage(this.images[this.currentIndex-1].url);
            $(this.refs.right).show();
            if (this.currentIndex === 1) $(this.refs.left).hide();
        }
    },

    onRight(e) {
        if (this.totalSize > this.currentIndex) {
            console.log('right');
            this.replaceImage(this.images[this.currentIndex].url);
            this.currentIndex++;
            $(this.refs.left).show();
            if (this.currentIndex === this.totalSize) $(this.refs.right).hide();
        }
    },

    replaceImage(url) {
        console.log(url);
        this.refs.img.src = this.imageHost + url;
    },

    onFavorite() {
        alert('comming soon...');
    },
});
