# Markdown Editor

Bienvenido a **Markdown Editor**, una aplicación web simple y eficiente para escribir y editar contenido en formato Markdown. Con una interfaz intuitiva y diseño responsivo, este editor está diseñado para facilitarte la creación de contenido de una forma rápida y sencilla.

## Características

- **Editor en tiempo real**: Edita Markdown y visualiza la vista previa en tiempo real.
- **Fácil configuración**: Utiliza Docker y Prisma para gestionar la base de datos de forma sencilla.
- **Compatibilidad total con Markdown**: Soporte completo para la sintaxis Markdown.
- **Listo para usar**: Proyecto optimizado para entornos de desarrollo y producción.

## Requisitos

Asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (para la base de datos PostgreSQL)
- [Prisma CLI](https://www.prisma.io/docs/getting-started) (instalado automáticamente)

## Instalación

Sigue los siguientes pasos para poner en marcha el proyecto localmente.

1. **Clona el repositorio** y navega dentro de él:

   ```bash
   git clone https://github.com/tu-usuario/markdown-editor.git
   cd markdown-editor
   ```

2. **Renombra el archivo `.env.example` a `.env`:**

   Este archivo contiene las variables de entorno necesarias para el funcionamiento del proyecto. Asegúrate de completar las siguientes variables dentro del archivo `.env`.

   ### Variables de entorno necesarias:

   - **AUTH_SECRET**: Una clave secreta que puedes generar manualmente o utilizando una herramienta de generación de secretos como [1Password](https://1password.com/) o la función `openssl rand -base64 32` en la terminal.
   - **DB_USER**: Nombre de usuario de la base de datos.
   - **DB_NAME**: Nombre de la base de datos.
   - **DB_PASSWORD**: Contraseña de acceso a la base de datos.
   - **DATABASE_URL**: La cadena de conexión completa de la base de datos PostgreSQL, que sigue este formato:

     ```plaintext
     postgres://user:password@localhost:5432/markdown_editor
     ```

   - **AUTH_GITHUB_ID** y **AUTH_GITHUB_SECRET**: Puedes obtenerlos registrando una nueva aplicación OAuth en GitHub desde [GitHub Developer Settings](https://github.com/settings/developers).
   - **AUTH_GOOGLE_ID** y **AUTH_GOOGLE_SECRET**: Puedes obtenerlos creando credenciales de OAuth 2.0 en la consola de Google Cloud desde [Google Cloud Console](https://console.cloud.google.com/apis/credentials).

3. **Instala las dependencias:**

   ```bash
   npm install
   ```

4. **Levanta el contenedor de la base de datos:**

   Utiliza Docker Compose para iniciar el servicio de PostgreSQL en segundo plano.

   ```bash
   docker-compose up -d
   ```

5. **Aplica los cambios a la base de datos con Prisma:**

   Prisma sincronizará el esquema definido en `prisma/schema.prisma` con la base de datos.

   ```bash
   npx prisma db push
   ```

6. **Inicia el servidor en modo desarrollo:**

   Ahora puedes iniciar la aplicación en modo desarrollo con el siguiente comando:

   ```bash
   npm run dev
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Uso

Con la aplicación corriendo, puedes acceder a la interfaz en tu navegador e iniciar la edición de archivos en formato Markdown. Puedes visualizar en tiempo real cómo se renderiza tu contenido.
