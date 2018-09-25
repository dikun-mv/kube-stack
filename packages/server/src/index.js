const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');
const faker = require('faker');

void async function () {
  await mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

  const User = mongoose.model('User', new mongoose.Schema({ name: String }));

  await User.deleteMany({});
  await User.insertMany(Array.from(Array(10), () => ({ name: faker.name.findName() })));

  const app = new Koa();
  const router = new Router({ prefix: '/api' });

  router
    .get('/users', async (ctx) => {
      ctx.body = await User.find({});
    });

  app
    .use(router.routes())
    .use(router.allowedMethods());

  app.listen(3000);
}()
