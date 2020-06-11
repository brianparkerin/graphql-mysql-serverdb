import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {buildSchema} from 'type-graphql'
import {HorseResolver} from './resolvers/HorseResolver'
import {PingResolver} from './resolvers/ping'



export async function startServer() {
        const app = express();

    const server = new ApolloServer({
        schema: await buildSchema({
            resolvers: [PingResolver, HorseResolver]
        }),
        context: ({req, res}) => ({req, res})
    })

    server.applyMiddleware({app, path: '/graphql'});

    return app;
}




