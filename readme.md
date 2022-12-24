# **Proyecto AvisaYa Backend Acto Delictivo**
## **Pre-requisitos**
- [Node.js](https://nodejs.org/en/) - 16.00 o version superior.
- Tener cuenta en [Vercel](https://vercel.com/login).
- Tener cuenta en [redis cloud](https://app.redislabs.com/#/login) y una [database](https://docs.redis.com/latest/rc/rc-quickstart/#create-an-account).

## **Variables de entorno**
- REDIS_URL = redis://default:<password>@<public endpoint>
 Ingresar a su [base de datos](https://app.redislabs.com/#/login)
-- [public endpoint](https://docs.redis.com/latest/images/rc/quickstart-database-overview.png)
-- [contraseña](https://docs.redis.com/latest/images/rc/database-fixed-configuration-security.png)
- SECRET_TOKEN = cualquier palabra
-- si mayusculas ni caracateres especiales ni espacios.
## **Desplegar proyecto vercel CLI**
##### En la terminal ingresar el siguiente comando
**Solo se permiten caracteres alfanuméricos en minúsculas y guiones.
- vercel --yes --env REDIS_URL=<<ingresar valor del paso previo>> --env SECRET_TOKEN=<<ingresar valor del paso previo>>

## **Agregar variables de entorno**
##### En la terminal ingresar los siguientes comandos
- vercel env add REDIS_URL production
-- ingresar la coneccion con la BD, igual a: redis://default:<password>@<public endpoint>
- vercel env add SECRET_TOKEN production
-- ingresar cualquier palabra en minusculas
## Ejecutar el proyecto
Para poder instalar los paquetes
```javascript
npm install
```
Para ejecutar el proyecto backend en modo desarrollo
```javascript
npm run dev
```
Para ejecutar las pruebas unitarias 
```javascript
npm run test
```

Para observar la cobertura 
```javascript
npm run coverage
```
