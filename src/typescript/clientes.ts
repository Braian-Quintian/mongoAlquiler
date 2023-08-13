import { Expose } from 'class-transformer';
import { IsString, IsEmail, IsDefined, Matches, IsNumber, MaxLength } from 'class-validator';

export class Clientes {

    @Expose({name: "id-cliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "The id-cliente is required" } } })
    @IsNumber({}, { message: () => { throw { status: 406, message: "The id-cliente must be a number" } } })
    ID_Cliente: number

    @Expose({name: 'nombre-cliente'})
    @IsDefined({ message: () => { throw { status: 422, message: "The nombre-cliente is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The nombre-cliente must be a string" } } })
    @MaxLength(25, { message: () => { throw { status: 406, message: "The nombre-cliente cannot contain more than 25 characters"}}})
    Nombre: string;

    @Expose({name: "apellido-cliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "The apellido-cliente is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The apellido-cliente must be a string" } } })
    @MaxLength(25, { message: () => { throw { status: 406, message: "The apellido-cliente cannot contain more than 25 characters"}}})
    @Matches(/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/, { message: () => { throw { status: 406, message: "The apellido-cliente must only contain characters from a lastname " } } })
    Apellido: string

    @Expose({name: "dni-cliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "The dni-cliente is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The dni-cliente must be a string" } } })
    @MaxLength(15, { message: () => { throw { status: 406, message: "The dni-cliente cannot contain more than 15 characters"}}})
    @Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "The dni-cliente must be a number" } } })
    DNI: string

    @Expose({name: "direccion-cliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "The direccion-cliente is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The direccion-cliente must be a string" } } })
    @MaxLength(255, { message: () => { throw { status: 406, message: "The direccion-cliente cannot contain more than 100 characters"}}})
    Direccion: string

    @Expose({name: "telefono-cliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "The telefono-cliente is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The telefono-cliente must be a string" } } })
    @MaxLength(15, { message: () => { throw { status: 406, message: "The telefono-cliente cannot contain more than 15 characters"}}})
    @Matches(/^[0-9]+$/, { message: () => { throw { status: 406, message: "The telefono-cliente must be a number" } } })
    Telefono: string

    @Expose({name: "email-cliente"})
    @IsDefined({ message: () => { throw { status: 422, message: "The email-cliente is required" } } })
    @IsString({ message: () => { throw { status: 406, message: "The email-cliente must be a string" } } })
    @MaxLength(50, { message: () => { throw { status: 406, message: "The email-cliente cannot contain more than 50 characters"}}})
    @IsEmail({}, {message: () => { throw { status: 406, message: "The email-cliente must be a valid email address"}}})
    Email: string

    constructor(data: Partial<Clientes>){
        Object.assign(this, data);
        this.ID_Cliente = 0;       
        this.Nombre = "Faker";
        this.Apellido = "Faker";
        this.DNI = "0";
        this.Direccion = "Faker";
        this.Telefono = "0";
        this.Email = "Faker@faker.com";
    }
}