# Proyecto de Prueba: Aplicación Fullstack con NodeJS y React

Este proyecto consta de dos partes: una API en NodeJS con una base de datos MongoDB y una aplicación frontend en React que consume dicha API.

## Tabla de Contenidos
- [Descripción General](#descripción-general)
- [Demo video](#demo-video)
- [Base de datos](#base-de-datos)
- [Backend](#backend)
  - [Instalación y Configuración](#instalación-y-configuración-backend)
  - [Endpoints](#endpoints)
  - [Ejecución](#ejecución-backend)
  - [Funcionalidades] (#funcionalidades-backend)
- [Frontend](#frontend)
  - [Instalación y Configuración](#instalación-y-configuración-frontend)
  - [Ejecución](#ejecución-frontend)
  - [Funcionalidades](#funcionalidades-frontend)

## Descripción General

Implementación de ambos stacks de aplicación; backend y frontend para desarrollar prueba técnica.

## Demo video
![gif-sample](https://github.com/cami98735264/prueba_tecnica/blob/main/gif-sample.gif)

## Base de datos
La base de datos utilizada y exportada se encuentra en "./database/Database.json"
Los datos en los cuales se basó la importación de la base de datos utilizada se encuentra en "./database/Articles.json"

## Backend

### Instalación y Configuración Backend

1. **Clonar el Repositorio**:
   ```sh
   git clone https://github.com/cami98735264/prueba_tecnica.git
   cd prueba_tecnica
   ```
   
2. **Instalar Dependencias**:
   ```sh
   cd backend
   npm install
   ```

3. **Configuración de variables de entorno**
    ```env
    MONGO_URI=mongodb://127.0.0.1:27017/Articles
    PORT=5000
    ```
### Endpoints
- **GET /articles:** Devuelve todos los artículos almacenados en la base de datos.

### Ejecución BackEnd
1. **Utiliza el comando:**
    ```sh
    npm start
    ```
    La aplicación se ejecutará en http://localhost:5000.

### Funcionalidades BackEnd
- Manejo de excepciones, casos de uso y modularidad
- Estructura de proyecto definida

## Frontend
### Instalación y Configuración FrontEnd
1. **Utiliza el comando:**
    ```sh
    cd frontend
    npm install
    ```
### Ejecución FrontEnd
1. **Utiliza el comando:**
    ```sh
    npm start
    ```
    La aplicación se ejecutará en http://localhost:3000.
    
### Funcionalidades FrontEnd
- Lista de Artículos: Muestra una lista de artículos recuperados del endpoint /articles.
- Redirección: Al hacer clic en un artículo, el usuario será redirigido al URL asociado con ese artículo (traído de la base de datos).
- Manejo de errores tanto para instancias, requests, imágenes no cargadas/encontradas, etc.
- Estructura de proyecto definida.