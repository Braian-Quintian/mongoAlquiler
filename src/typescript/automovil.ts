import { Expose } from 'class-transformer';
import { ValidateIf, IsNotEmpty, IsDefined} from "class-validator";
export class Automovil {

    @Expose({name: 'id'})
    @ValidateIf(o => o["id-unico"] !== undefined)
    @IsNotEmpty({ message: 'El id-unico no puede estar vacío' })
    @IsDefined({ message: 'El id-unico debe estar definido' })
    ["id-unico"]: number;

    @Expose({name: 'ID_Cliente'})
    @ValidateIf(o => o["id-cliente"] !== undefined)
    @IsNotEmpty({ message: 'El id-cliente no puede estar vacío' })
    @IsDefined({ message: 'El id-cliente debe estar definido' })
    ["id-cliente"]: number;

    @Expose({name: 'ID_Automovil'})
    @ValidateIf(o => o["id-automovil"] !== undefined)
    @IsNotEmpty({ message: 'El id-automovil no puede estar vacío' })
    @IsDefined({ message: 'El id-automovil debe estar definido' })
    ["id-automovil"]: number;

    @Expose({ name: 'Costo_Total'})
    @ValidateIf(o => o["costo-total"] !== undefined)
    @IsNotEmpty({ message: 'El costo-total no puede estar vacío' })
    @IsDefined({ message: 'El costo-total debe estar definido' })
    ["costo-total"]: number;

    @Expose({ name: 'Estado'})
    @ValidateIf(o => o["estado"] !== undefined)
    @IsNotEmpty({ message: 'El estado no puede estar vacío' })
    @IsDefined({ message: 'El estado debe estar definido' })
    ["estado"]: string;

    constructor(data: Partial<Automovil>){
        Object.assign(this, data);
    }

}

export class AutomovilDisponible {

    @Expose({name: 'id_'})
    @ValidateIf(o => o["id-automovil"] !== undefined)
    @IsNotEmpty({ message: 'El id-automovil-disponible no puede estar vacío' })
    @IsDefined({ message: 'El id-automovil-disponible debe estar definido' })
    ["id-automovil"]: number;

    @Expose({name: 'Marca'})
    @ValidateIf(o => o["marca-automovil"] !== undefined)
    @IsNotEmpty({ message: 'La marca-automovil no puede estar vacía' })
    @IsDefined({ message: 'La marca-automovil debe estar definida' })
    ["marca-automovil"]: string;

    @Expose({name: 'Modelo'})
    @ValidateIf(o => o["modelo-automovil"] !== undefined)
    @IsNotEmpty({ message: 'El modelo-automovil no puede estar vacío' })
    @IsDefined({ message: 'El modelo-automovil debe estar definido' })
    ["modelo-automovil"]: string;

    @Expose({name: 'Anio'})
    @ValidateIf(o => o["año-automovil"] !== undefined)
    @IsNotEmpty({ message: 'El año-automovil no puede estar vacío' })
    @IsDefined({ message: 'El año-automovil debe estar definido' })
    ["año-automovil"]: number;

    @Expose({name: 'Tipo'})
    @ValidateIf(o => o["tipo-automovil"] !== undefined)
    @IsNotEmpty({ message: 'El tipo-automovil no puede estar vacío' })
    @IsDefined({ message: 'El tipo-automovil debe estar definido' })
    ["tipo-automovil"]: string;

    @Expose({name: "Capacidad"})
    @ValidateIf(o => o["capacidad-automovil"] !== undefined)
    @IsNotEmpty({ message: 'La capacidad-automovil no puede estar vacía' })
    @IsDefined({ message: 'La capacidad-automovil debe estar definida' })
    ["capacidad-automovil"]: number;

    @Expose({name: "Precio_Diario"})
    @ValidateIf(o => o["precio-diario-automovil"] !== undefined)
    @IsNotEmpty({ message: 'El precio-diario-automovil no puede estar vacío' })
    @IsDefined({ message: 'El precio-diario-automovil debe estar definido' })
    ["precio-diario-automovil"]: number;
    
    constructor(data: Partial<AutomovilDisponible>){
        Object.assign(this, data);
    }
}