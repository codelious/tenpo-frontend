# Tenpo Frontend

## Descripción
Tenpo Frontend es una aplicación web desarrollada con React que permite a los usuarios gestionar transacciones financieras. La aplicación ofrece funcionalidades como listar, agregar, editar y eliminar transacciones, además de validaciones y manejo de errores a través de `react-query` y `axios`.

## Tecnologías Utilizadas

- **React**: Biblioteca para la creación de interfaces de usuario.
- **TypeScript**: Lenguaje que añade tipos estáticos a JavaScript.
- **React Query**: Manejador de estados y sincronización de datos del servidor.
- **Axios**: Cliente HTTP para realizar peticiones al backend.
- **Formik**: Biblioteca para la gestión de formularios.
- **Yup**: Biblioteca para validación de esquemas de objetos.
- **React Router**: Manejo de rutas dentro de la aplicación.

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tenpo-frontend.git
   ```
2. Navegar al directorio del proyecto:
   ```bash
   cd tenpo-frontend
   ```
3. Instalar las dependencias:
   ```bash
   npm install
   ```

## Scripts Disponibles

- `npm start`: Inicia la aplicación en modo desarrollo.
- `npm run build`: Construye la aplicación para producción.
- `npm test`: Ejecuta los tests.
- `npm run lint`: Ejecuta el linter para verificar la calidad del código.

## Estructura del Proyecto

```
|-- src/
    |-- api/
    |   |-- client.ts
    |-- components/
    |   |-- TransactionForm.tsx
    |-- hooks/
    |   |-- useFetchTransactions.ts
    |   |-- useAddTransaction.ts
    |-- types/
    |   |-- transaction.types.ts
    |-- App.tsx
    |-- index.tsx
```

## Características Principales

- **Gestor de Transacciones**: Listar, agregar, editar y eliminar transacciones.
- **Validación de Formularios**: Validación de campos usando Formik y Yup.
- **Manejo de Errores**: Captura y manejo de errores de peticiones HTTP.
- **Rutas Dinámicas**: Navegación entre distintas vistas con React Router.

## Configuración

### Variables de Entorno

Para configurar el cliente HTTP, puedes definir las siguientes variables de entorno en un archivo `.env`:

```
REACT_APP_API_BASE_URL=http://localhost:3000/api
```

## Contribución

Si deseas contribuir a este proyecto, por favor sigue los pasos a continuación:

1. Haz un fork del repositorio.
2. Crea una rama con la nueva funcionalidad o corrección de errores:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y haz un commit:
   ```bash
   git commit -m "Agrega nueva funcionalidad"
   ```
4. Sube tus cambios al repositorio remoto:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
5. Abre un Pull Request en GitHub.
