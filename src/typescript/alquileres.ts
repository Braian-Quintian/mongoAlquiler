import { Expose } from 'class-transformer';
import { IsDefined, ValidateIf,IsNotEmpty } from 'class-validator';

export class Alquileres {
    @Expose({ name: 'id' })
    @ValidateIf(o => o["id-alquiler"] !== undefined)
    @IsNotEmpty({ message: 'El id-alquiler no puede estar vacío' })
    @IsDefined({ message: 'El id-alquiler debe estar definido' })
    ["id-alquiler"]: number;

    @Expose({ name: 'ID_Cliente' })
    @ValidateIf(o => o["id-cliente"] !== undefined)
    @IsNotEmpty({ message: 'El id-cliente no puede estar vacío' })
    @IsDefined({ message: 'El id-cliente debe estar definido' })
    ["id-cliente"]: number;

    @Expose({ name: 'ID_Automovil' })
    @ValidateIf(o => o["id-automovil"] !== undefined)
    @IsNotEmpty({ message: 'El id-automovil no puede estar vacío' })
    @IsDefined({ message: 'El id-automovil debe estar definido' })
    ["id-automovil"]: number;

    @Expose({ name: 'Fecha_Inicio'})
    @ValidateIf(o => o["fecha-inicio"] !== undefined)
    @IsNotEmpty({ message: 'El fecha-inicio no puede estar vacío' })
    @IsDefined({ message: 'El fecha-inicio debe estar definido' })
    ["fecha-inicio"]: string;

    @Expose({ name: 'Fecha_Fin'})
    @ValidateIf(o => o["fecha-fin"] !== undefined)
    @IsNotEmpty({ message: 'El fecha-fin no puede estar vacío' })
    @IsDefined({ message: 'El fecha-fin debe estar definido' })
    ["fecha-fin"]: string;

    @Expose({name:'Costo_Total'})
    @ValidateIf(o => o["costo-total"] !== undefined)
    @IsNotEmpty({ message: 'El costo-total no puede estar vacío' })
    @IsDefined({ message: 'El costo-total debe estar definido' })
    ["costo-total"]: number;

    @Expose({name:'Estado'})
    @ValidateIf(o => o["estado"] !== undefined)
    @IsNotEmpty({ message: 'El estado no puede estar vacío' })
    @IsDefined({ message: 'El estado debe estar definido' })
    ["estado"]: string;

    constructor(data: Partial<Alquileres>) {
        Object.assign(this, data);
    }
}

export class AlquileresDto {
    
    @Expose({ name: 'id' })
    @ValidateIf(o => o["id-alquiler"] !== undefined)
    @IsNotEmpty({ message: 'El id-alquiler no puede estar vacío' })
    @IsDefined({ message: 'El id-alquiler debe estar definido' })
    ["id-alquiler"]: number;

    @Expose({ name: 'Nombre'})
    @ValidateIf(o => o["nombre-cliente"] !== undefined)
    @IsNotEmpty({ message: 'El nombre-cliente no puede estar vacío' })
    @IsDefined({ message: 'El nombre-cliente debe estar definido' })
    ["nombre-cliente"]: string;

    @Expose({ name: 'Apellido'})
    @ValidateIf(o => o["apellido-cliente"] !== undefined)
    @IsNotEmpty({ message: 'El apellido-cliente no puede estar vacío' })
    @IsDefined({ message: 'El apellido-cliente debe estar definido' })
    ["apellido-cliente"]: string;

    @Expose({name: 'DNI'})
    @ValidateIf(o => o["dni-cliente"] !== undefined)
    @IsNotEmpty({ message: 'El dni-cliente no puede estar vacío' })
    @IsDefined({ message: 'El dni-cliente debe estar definido' })
    ["dni-cliente"]: number;

    @Expose({name: 'Direccion'})
    @ValidateIf(o => o["direccion-cliente"] !== undefined)
    @IsNotEmpty({ message: 'El direccion-cliente no puede estar vacío' })
    @IsDefined({ message: 'El direccion-cliente debe estar definido' })
    ["direccion-cliente"]: string;

    @Expose({name: 'Telefono'})
    @ValidateIf(o => o["telefono-cliente"] !== undefined)
    @IsNotEmpty({ message: 'El telefono-cliente no puede estar vacío' })
    @IsDefined({ message: 'El telefono-cliente debe estar definido' })
    ["telefono-cliente"]: number;

    @Expose({name: 'Email'})
    @ValidateIf(o => o["email-cliente"] !== undefined)
    @IsNotEmpty({ message: 'El email-cliente no puede estar vacío' })
    @IsDefined({ message: 'El email-cliente debe estar definido' })
    ["email-cliente"]: string;

    constructor(data: Partial<AlquileresDto>){
        Object.assign(this, data);
    }
}