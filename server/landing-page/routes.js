import 'babel-polyfill';
import Router from 'koa-router';
import views from 'koa-views';

const router = Router();

router.get('/', async (ctx) => {
  await ctx.render('landing-page/test', {title: 'Teste4'});
});

export default router;
