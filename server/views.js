import 'handlebars';
import views from 'koa-views';

const configViews = views(__dirname, {
    map: {
        html: 'handlebars'
    }
});

export default configViews;
