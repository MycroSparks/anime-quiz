import Fastify from "fastify";

const fastify = Fastify();

const start = async () => {
  fastify.route({
    method: "GET",
    url: "/test",
    handler: (req, res) => {
      res.send("O-yaaaa");
    },
  });

  fastify.listen({ port: 3000 });
};

start();
