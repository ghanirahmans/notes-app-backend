const Hapi = require('@hapi/hapi');
const routes = require('./routes')

const init = async() => {
  const server = Hapi.server({
    host : 'localhost',
    port : 5000,
    routes : {
      cors : {
        origin : ['*'],
      },
    },
  });
  

server.route(routes);

server.start();
console.log(`server berjalan di ${server.info.uri}`);
};

init();
