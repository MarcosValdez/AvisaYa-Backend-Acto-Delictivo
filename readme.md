# **Proyecto AvisaYa Backend Acto Delictivo**
Descargar el el archivo *.env* y colocarlo al mismo nivel de *index.js*

## **Pre-requisitos**
- *Redis*
- *Node.js - 16.00 superior a la version*

## **Instalacion en WSL2**
- **Redis**
	- curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
	- echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list
	- sudo apt-get update
	- sudo apt-get install redis
	- sudo service redis-server start
- **Node.js**
	- sudo apt install curl
	- sudo curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
	- source ~/.profile
	- nvm install 16.15.0
	- sudo apt-get install npm
	- node -v

## Ejecutar el proyecto
Para poder instalar los paquetes
```javascript
npm install
```
Para ejecutar el proyecto backend en modo desarrollo
```javascript
npm run dev
```