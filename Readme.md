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
    1. ¡Felicitaciones!, ya has iniciado el servidor y la base de datos y puedes proceder a  utilizar los endpoints+
    2. `NOTA`: Para utilizar los endpoints recuerda que debes tener un token que se genera con el endpoint `/autorizacion` (en la siguienta parte se te muestra como puedes pedir el token y utilizarlo)

## Endpoints