import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class UpdateCarDto {
    @IsString()
    @IsUUID()
    @IsOptional()
    readonly id: string;

    @IsString({ message: 'La marca debe ser un string' })
    @IsOptional()
    readonly brand: string;

    @IsString()
    @IsOptional()
    readonly model: string;

}