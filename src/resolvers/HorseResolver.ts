import {Resolver, Query, Mutation, Arg} from 'type-graphql'
import {Horse} from '../entity/horses'


@Resolver()
export class HorseResolver {

    @Mutation(() => Boolean)
    async createHorse(
        @Arg("reproductor") reproductor: string,
        @Arg("microchip") microchip: number,
        @Arg("servicios") servicios: string,
        @Arg("precio") precio: number,
        @Arg("cantidad") cantidad: number,
        @Arg("prestaciones") prestaciones: string,
        @Arg("propietario") propietario: string,
        @Arg("vendedor") vendedor: string
    ) {
        await Horse.insert({reproductor, microchip, servicios, precio, cantidad, prestaciones, propietario, vendedor})
        return true
    }
    @Query(() => [Horse])
    gethorses() {
        return Horse.find()
    }
}