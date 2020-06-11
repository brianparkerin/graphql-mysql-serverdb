import {Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity} from 'typeorm'
import {Field, Int, ObjectType} from 'type-graphql'

@ObjectType()
@Entity()
export class Horse extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id!: number;

    @Field(() => String)
    @Column()
    reproductor!: string;

    @Field(() => Int)
    @Column("int", {default: 0})
    microchip!: number;

    @Field(() => String)
    @Column()
    servicios!: string;

    @Field(() => Int)
    @Column("int", {default: 0})
    precio!: number;

    @Field(() => Int)
    @Column("int", {default: 0})
    cantidad!: number;

    @Field(() => String)
    @Column()
    prestaciones!: string;

    @Field(() => String)
    @Column()
    propietario!: string;

    @Field(() => String)
    @Column()
    vendedor!: string;

    @Field(() => String)
    @CreateDateColumn({type: 'timestamp'})
    createdAt!: string;


}