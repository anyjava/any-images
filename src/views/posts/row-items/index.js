import Woowahan from 'woowahan';
import Template from './index.hbs';

export default Woowahan.ItemView.create('RowItem', {
  tagName: 'div',
  template: Template,

    viewWillMount(renderData) {
        renderData.imageSize = renderData.images.length;
        console.log(renderData);
    },
  onSelectedRow(event, trigger) {
    trigger({ id: this.getModel('id') });
  },
});
