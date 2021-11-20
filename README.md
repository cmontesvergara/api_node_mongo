# API Rest
## _Grupo 16 UNAB_




Api desarrollada en clase con el grupo 16 de la Uniiverdad Autonoma de Pereira bajo el programa mision TIC 2022.



## Features

- Crud de personas
- Crud de productos
- Autenticacion


And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Se requiere [Node.js](https://nodejs.org/)  para funcionar.

Instalar las dependencias y dependendecias de desarrollo para ejecutar.

```sh
npm install
```
- crear un archivo llamado .env
- agregar el campo PORT en el archivo .env
- agregar el campo DB_URI en el archivo .env
```sh
npm start   o   npm run dev
```
## EndPoints


| EndPoint | Ruta | Autenticacion | Metodo Http | Campos |
| ------ | ------ |---------------|-------------|--------|
| Raiz | / | si | get | Ninguno|
| Token | /persona/token | si | get | {cedula:String}|
| Personas | /personas | si | get | Ninguno |
| Persona | /persona/:cedula | si | get | cedula[numero] |
| Persona | /persona | si | post | {   cedula:String,                       nombre:String,                                                          apellido:String,                                                        telefono:String,                                                            direcciones: [{direccion:String,ciudad:String}] } |
| Persona | /persona/:cedula | si | put | {   cedula:String,                       nombre:String,                                                          apellido:String,                                                        telefono:String,                                                            direcciones: [{direccion:String,ciudad:String}] } |
| Persona |/persona/:cedula | si | delete | {   cedula:String } |
| Producto | /producto | si | get | {   codigo:String } |
| Producto | /producto/:codigo | si | get | {   codigo:String } |
| Producto | /producto | si | post | {   nombre:String,                       codigo:String,                                                          descripcion:String,                                                        precio:String,                                                               unidades: String } ||
| Producto | /producto/:codigo | si | put | {   nombre:String,                       codigo:String,                                                          descripcion:String,                                                        precio:String,                                                               unidades: String } |
| Producto | /producto/:codigo | si | delete | {   codigo:String } |


## License

MIT
