# Usa una imagen de Node.js como base. La versión 18-alpine es ligera y estable.
FROM node:20-alpine

# Establece el directorio de trabajo dentro del contenedor.
RUN mkdir -p /var/www/nest-app
WORKDIR /var/www/nest-app

# Copia los archivos package.json y package-lock.json para instalar dependencias.
# Esto mejora el caché de Docker, ya que si las dependencias no cambian,
# esta capa no se reconstruye.
COPY package*.json ./

# Instala las dependencias de la aplicación.
RUN npm install

# Copia el resto del código fuente de la aplicación al contenedor.
COPY . .

# Dar permiso para ejecutar aplicación
RUN adduser --disabled-password nestuser
RUN chown -R nestuser:nestuser /var/www/nest-app
USER nestuser

# Expone el puerto en el que se ejecutará la aplicación.
# Por defecto, las aplicaciones NestJS usan el puerto 3000.
EXPOSE 3000

# Compila el código de TypeScript a JavaScript.
RUN npm run build

# Define el comando para ejecutar la aplicación.
CMD ["node", "dist/main"]