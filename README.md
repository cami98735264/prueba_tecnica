# Proyecto de Prueba: Aplicación Fullstack con NodeJS y React

Este proyecto consta de dos partes: una API en NodeJS con una base de datos MongoDB y una aplicación frontend en React que consume dicha API.

## Tabla de Contenidos

- [Descripción General](#descripción-general)
- [Backend](#backend)
  - [Instalación y Configuración](#instalación-y-configuración-backend)
  - [Endpoints](#endpoints)
  - [Ejecución](#ejecución-backend)
- [Frontend](#frontend)
  - [Instalación y Configuración](#instalación-y-configuración-frontend)
  - [Ejecución](#ejecución-frontend)
  - [Funcionalidades](#funcionalidades)

## Descripción General

Implementación de ambos stacks de aplicación; backend y frontend para desarrollar prueba técnica.

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

### Ejecución
1. **Utiliza el comando:**
    ```sh
    npm start
    ```
    La aplicación se ejecutará en http://localhost:5000.

## Frontend
### Instalación y Configuración FrontEnd
1. **Utiliza el comando:**
    ```sh
    cd frontend
    npm install
    ```
2. **Ejecución**
    Ejecuta:
    ```sh
    npm start
    ```
    La aplicación se ejecutará en http://localhost:3000.
    
### Funcionalidades
- Lista de Artículos: Muestra una lista de artículos recuperados del endpoint /articles.
- Redirección: Al hacer clic en un artículo, el usuario será redirigido al URL asociado con ese artículo (traído de la base de datos).
