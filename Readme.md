# Consultas de la base de datos de mongoDB para el alquiler de autos

## Instalación
1. Clona este repositorio en tu máquina local.
2. Asegúrate de tener instalado Node.js
3. Crea un archivo .env
4. Copia las variables de entorno del archivo `.env.example` y pegalas en el archivo `.env` que creaste.

    `Nota`: porfavor llena los campos vacios con la informacion correspondiente.

    `Recuerda que la informacion solitada la debes ingresar entre las "" correspondientes`

    ![.env](/assets/img/configuracion-env.png)
5. Abre una terminal

    ![terminal](/assets/img/terminal.png)

    presiona en neva terminal:

    ![nueva-terminal](/assets/img/nueva-terminal.png)

6. Ejecuta el comando `npm run install` para instalar las dependencias del proyecto

    una vez que haya finalizado la instalacion de las dependencias ejecuta el comando `npm run install-dev` para instalar la dependencia de desarrollo.

    ![npm-run-install](/assets/img/npm-run-install.png)

7. Ejecuta el comando `npm run dev` para iniciar el servidor

​	 ![npm-install](/assets/img/npm-run-dev.png)

1. ¡Felicitaciones!, ya has iniciado el servidor y la base de datos y puedes proceder a  utilizar los endpoints

2. `NOTA`: Para utilizar los endpoints recuerda que debes tener un token que se genera con el endpoint `/autorizacion` (en la siguienta parte se te muestra como puedes pedir el token y utilizarlo)

## Endpoints

### Observacion: Para hacer los endpoints y generar los token debes tener ThunderClient instalado en visual studio code

- **Autorización**

  `NOTA`: Antes de utilizar cualquier endpoint debes pedir primero un token de autorizacion, se recomienda que lo guardes en un archivo de texto.

  *Obeservacion* el token solamente dura `30m`  después de este tiempo tendrás que pedir otro

  Este es el ejemplo para solicitar un token:
  ![token](/assets/img/pedirToken.png)

  - El `:id` es el id del usuario (por el momento puede ser cualquiera)
  - El `nombre_de_la_collection` es el nombre de la collection en la base de datos

  `NOTA`: No olvides reemplazar el `localhost` por la ip de tu servidor y el `5050` por el puerto que hayas definido en las variables de entorno, u/o que se estes utilizando.

```shell
  http://localhost:5050/autorizacion/:id/:nombre?tabla=nombre_de_la_tabla
```

`SPOILER`: se tiene pensado en el futuro reemplazar `:id` por el id de google al momento de generar el token, pero por el momento se queda así.

- Implementación del Token
    ![generar-token](assets/img/generar-token.png)
- Copia el token, ejemplo:
    - `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqc29uIjp7ImlkIjoiMTIzIiwibm9tYnJlIjoidXNlciIsImVuZHBvaW50Ijp7InRhYmxhIjoicm9sZXMifX0sImlhdCI6MTY5MDQ4MzExNywiZXhwIjoxNjkwNDg2NzE3fQ.2Mk17IBYsAmZi-e19E26E1oyObY43OBjBXK52ME8jvM`

- Luego debe colocar en la pestaña Headers de la siguiente manera:
  
- donde dice `header` escribe `Authorization` y pulsa en el recuadro para que se active el envió del token de autorización, así:

    ![implementacion-token](/assets/img/implementacion-token.png)

- y pega el token que habias copiado previamente:

    ![token-implementado](/assets/img/token-implementado.png)

- Una vez que hayas implementado el token puedes proceder a utilizar los endpoints.

**TENER EN CUENTA:**
  `NOTA`: recuerda que el token solamente dura `30m`  después de este tiempo tendrás que pedir otro
  `NOTA`: El token solo servira para la collection que lo solicitaste, si quieres acceder a otra collection deberas solicitar otro token y repetir el mismo proceso para implementarlo.
  `NOTA`: Si presentas algun error al momento de solicitar el token, revisa que hayas ingresado correctamente los datos, si el error persiste, revisa que la collection que estas solicitando exista en la base de datos.

- **LIMITES DE PETICION DE ENPOINTS**
    
    `NOTA`: Los endpoints tienen un limite de peticiones por minuto, si se excede el limite de peticiones por minuto, el servidor respondera con un error 429, si esto sucede, espera un minuto y vuelve a intentarlo.

- Cliente

    Se pueden utilizar los siguientes endpoints para la collection `cliente`

    - GET /clientes: muestra todos los clientes en la base de datos

    ![GET-clientes](/assets/img/GET-cliente.png)

    - GET /clientes/:id : muestra el cliente con el DNI especificado

    ![GET-clientes-id](/assets/img/GET-clientes-dni.png)

    - GET /clientes/alquiler : Se obtienen los datos de los clientes que realizaron al  menos un alquiler.

    ![GET-clientes-alquiler](/assets/img/GET-clientes-alquiler.png)

    -POST /clientes : Se crea un nuevo cliente

    ![POST-clientes](/assets/img/POST-cliente.png)

- Automviles

    Se pueden utilizar los siguientes endpoints para la collection `automovil`

    - GET /automoviles : Trae todos los automoviles disponibles para alquiler

    ![GET-automoviles](/assets/img/GET-automoviles.png)

    -GET /automoviles/disponibles : Trae todos los automoviles disponibles en cada sucursal

    ![GET-automoviles-disponibles](/assets/img/GET-disponibles-sucursal.png)

    - GET /automoviles/capacidad : Trae todos los automoviles disponibles con la capacidad mayor a 5 personas

    ![GET-automoviles-capacidad](/assets/img/GET-automoviles-capacidad.png)

    - GET /automoviles/ordenados : Trae todos los automóviles ordenados por marca y modelo.

    ![GET-automoviles-ordenados](/assets/img/GET-automoviles-ordenados.png)

    - GET /automoviles/sucursal : Trae la cantidad total de automóviles en cada sucursal junto con su dirección

    ![GET-automoviles-sucursal](/assets/img/GET-automoviles-sucursal.png)

    -GET /automoviles/capacidad-disponibles : Trae todos los automoviles disponibles con la capacidad mayor a 5 personas y que esten disponibles

    ![GET-automoviles-capacidad-disponibles](/assets/img/GET-automoviles-capacidad-disponibles.png)

- Alquileres

    Se pueden utilizar los siguientes endpoints para la collection `alquileres`

    - GET /alquileres : Trae todos los alquileres activos junto con los datos de los clientes

    ![GET-alquileres](/assets/img/GET-alquileres.png)

    - GET /alquileres/:id : Trae el alquiler activo con el id especificado junto con los datos del cliente

    ![GET-alquileres-id](/assets/img/GET-alquileres-id.png)

    -GET /alquileres/inicio : Trae todos los alquileres activos que iniciaron en la fecha '2023-07-05'

    ![GET-alquileres-inicio](/assets/img/GET-alquileres-inicio.png)

    - GET /alquileres/entre : Trae todos los alquileres activos que iniciaron entre las fechas '2023-07-05' y '2023-07-10'
    
    ![GET-alquileres-entre](/assets/img/GET-alquileres-entre.png)
    
- Reservas

    Se pueden utilizar los siguientes endpoints para la collection `reservas`

    - GET /reservas : Trae todas las reservas activas junto con los datos de los clientes y del automovil reservado

    ![GET-reservas](/assets/img/GET-reservas.png)

    -GET /reservas/:id : Trae la reserva con el id especificado 
    ![GET-reservas-id](/assets/img/GET-reservas-id.png)

    - GET /reservas/pendiente/:id : Lista las reservas pendientes realizadas por un cliente
    específico

    ![GET-reservas-id](/assets/img/GET-reservas-pendientes.png)

- Empleados

    Se pueden utilizar los siguientes endpoints para la collection `empleados`

    - GET /empleados : Trae todos los empleados que tengan el cargo de vendedor

    ![GET-empleados](/assets/img/GET-empleados.png)

    - GET /empleados/otros : Trae todos los empleados que tengan el cargo de gerente o asistente

    ![GET-empleados-otros](/assets/img/GET-otros-empleados.png)