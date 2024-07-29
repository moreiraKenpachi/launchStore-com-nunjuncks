/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    celular: string;

    @Column()
    cpf: string;
}
