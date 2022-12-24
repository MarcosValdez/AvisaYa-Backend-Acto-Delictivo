# **Proyecto AvisaYa Backend Acto Delictivo**
## **Pre-requisitos**
- [Node.js](https://nodejs.org/en/) - 16.00 o version superior.
- Tener cuenta en [Vercel](https://vercel.com/login).
- Tener cuenta en [redis cloud](https://app.redislabs.com/#/login) y seguir los pasos para crear una [base de datos](https://docs.redis.com/latest/rc/rc-quickstart/#create-an-account).

## **Clonar el proyecto**
Puede elegir entre clonar por HTTPS o SSH.
- [HTTPS] git clone https://github.com/MarcosValdez/avisaya-backend-acto-delictivo.git
- [SSH] git clone git@github.com:MarcosValdez/avisaya-backend-acto-delictivo.git

## **Variables de entorno**
- REDIS_URL = ```redis://default:<password>@<public_endpoint>```

 Ingresar a su [base de datos](https://app.redislabs.com/#/login)

-- [password](https://docs.redis.com/latest/images/rc/database-fixed-configuration-security.png)

-- [public endpoint](https://docs.redis.com/latest/images/rc/quickstart-database-overview.png)

- SECRET_TOKEN = ```cualquierpalabra```

-- sin mayusculas ni caracateres especiales ni espacios.

Ejemplo del resultado:
- ```REDIS_URL = redis://default:dPjPxAM3OwRqODvHFhl@redis-16024.c289.asia-northeast2-2.gce.cloud.redislabs.com:16024```
- ```SECRET_TOKEN = tokensecreto```

## **Desplegar proyecto vercel CLI**
##### En la terminal, donde esta ubicado el proyecto, ingresar los siguientes comandos:

- npm i -g vercel

- vercel --yes --env REDIS_URL=<<valor del paso previo>> --env SECRET_TOKEN=<<valor del paso previo>>

Retornara el link de despligue similar a: 
- ```Production: https://avisaya-backend-acto-delictivo.vercel.app```
 
## Correr proyecto en local 

Crear un archivo .env y agregar las variables de entorno.
 
Para poder instalar los paquetes.
```javascript
npm install
```
Para ejecutar el proyecto backend en modo desarrollo.
```javascript
npm run dev
```
Para ejecutar las pruebas unitarias.
```javascript
npm run test
```

Para observar la cobertura.
```javascript
npm run coverage
```