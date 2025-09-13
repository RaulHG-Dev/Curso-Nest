import { IsString, MinLength } from 'class-validator';

export class CreateCarDto {
    @IsString({ message: 'La marca debe ser un string' })
    readonly brand: string;

    @IsString()
    readonly model: string;

}