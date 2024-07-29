/* eslint-disable prettier/prettier */
import { IsEmpty, MinLength } from 'class-validator';

/* eslint-disable prettier/prettier */
export class CreateUserDto {
    @MinLength(3, { message: 'nome no mínimo 3 caracteres.'})
    @IsEmpty()
    nome: string;

    @IsEmpty()
    email: string;

    @IsEmpty()
    celular: string;

    @IsEmpty()
    cpf: string;
}
