# EXAMEN_PRUEBA_1 - ENUNCIADO:
Este es el primer examen de prueba para la asignatura DWEC

EJERCICIO 1: CLONAR EL REPOSITORIO ----------------------------------------------------------------------------------------------------------------------
- Abre en VSCode la carpeta Documentos/GIT
- Clona este repositorio en la carpeta utilizando el comando git clone

EJERCICIO 2: CREAR EL PROYECTO ANGULAR -------------------------------------------------------------------------------------------------------------------
- Cierra la carpeta que tienes abierta en VSCode y abre la carpeta de este repositorio (Se habrá creado dentro de Documentos/GIT)
- Crea un proyecto Angular no standalone usando el comando ng new. El proyecto se llamará solucionExamen1

EJERCICIO 3: CREAR LOS COMPONENTES ------------------------------------------------------------------------------------------------------------------------
- En este examen te vas a conectar a la siguiente API: https://thesimpsonsapi.com/
- Tienes que crear una lista de personajes y una vista detalle a la que se accederá desde la lista de personajes
- También tienes que crear una página de Inicio y una página de Contacto
- En la lista de personajes, se mostrará cada personaje en una tarjeta con su nombre y la imagen. La tarjeta tendrá un botón de VER DETALLE para acceder a
  la vista detalle
- En la vista de detalle, se mostrará la foto del personaje junto con los siguientes datos:
    * Nombre
    * Edad
    * Género
    * Ocupación
    * Descripción
  NOTA 1: En esta API la foto no viene con la etiqueta "image", sino que es la que pone "portrait_path" (Portrait significa retrato)
  NOTA 2: Si al cargar los datos en la tarjeta te muestra el nombre pero no la imagen, SIGUE CON LO DEMÁS. No te quedes bloqueada aquí, porque la ruta
  a la imagen es medio rara en este caso, así que lo miramos después a la tarde. Si te la muestra de primeras, bien. 

EJERCICIO 4: DEFINIR EL ROUTING ---------------------------------------------------------------------------------------------------------------------------
- Definir el routing para todos los componentes
- Incluye en app.html una barra de navegación para navegar entre el inicio, la lista de personajes y la página de contacto

EJERCICIO 5: CREAR EL MODELO DE PERSONAJE Y EL SERVICIO -----------------------------------------------------------------------------------------------------
- Recuerda añadir en el modelo todos los datos que te pido (No te olvides de la imagen)
- En el servicio, crea los métodos POST, PUT y DELETE, aunque en esta tarea no los vas a usar después

EJERCICIO 6: DEFINIR EL HTML, TS Y CSS PARA MOSTRAR LA LISTA DE TODOS LOS PERSONAJES -------------------------------------------------------------------------
- Puedes darles el formato que quieras. Recuerda que en la tarjeta se tiene que mostrar solamente el nombre y la foto (aunque no la cargue), y un botón de
  VER DETALLE

EJERCICIO 7: INTRODUCE UN FITLRADO DINÁMICO -------------------------------------------------------------------------------------------------------------------
- Campo de texto para filtrar por nombre
- Select para filtrar por género. Las opciones se verán en castellano, MASCULINO o FEMENINO

EJERCICIO 8: DEFINIR EL HTML, TS Y CSS PARA MOSTRAR EL DETALLE DEL PERSONAJE SELECCIONADO ---------------------------------------------------------------------
- Recuerda los datos que tiene que mostrar, según el ejercicio 3
- Incluye un botón para volver a la página de lista de personajes

EJERCICIO 9: INTRODUCIR UN FORMULARIO DE CONTACTO --------------------------------------------------------------------------------------------------------------
- Deberá poder introducirse el nombre, email y la consulta a realizar.
- Tendrá un botón de enviar. Al pulsarlo no pasará nada, solo mostrará por consola que la consulta se ha enviado correctamente

EJERCICIO 10: SUBE EL PROYECTO AL REPOSITORIO DE GITHUB QUE HAS CLONADO -----------------------------------------------------------------------------------------
- Utiliza correctamente los comandos git add, git commit y git push
- Una vez subido, copia el nombre del repositorio y pégalo en un e-mail, con la etiqueta "ENTREGA CON LA SOLUCIÓN:", NO ENVÍES EL E-MAIL TODAVÍA!!!

EJERCICIO 11: CREA UN REPOSITORIO NUEVO EN GITHUB, LLAMADO EXAMEN_PRUEBA_1_PAGES ---------------------------------------------------------------------------------
- Clona el nuevo repositorio en la misma carpeta DOCUMENTOS/GIT, igual que has hecho antes

EJERCICIO 12: COMPILA EL PROYECTO ---------------------------------------------------------------------------------------------------------------------------------
- Vuelve a abrir el proyecto que habías hecho
- Abre una terminal Powershell y ejecuta el comando ng build correctamente. Recuerda que es ng build Nombre_del_proyecto configuration: production --base-href Nombre_del_repositorio_nuevo
- Una vez compilado, vete al directorio "dist" que se te ha creado en el proyecto. Dentro, al directorio "browser". Copia los archivos que verás dentro y pégalos en la carpeta del repositorio nuevo

EJERCICIO 13: PUBLICACIÓN EN GITHUB PAGES --------------------------------------------------------------------------------------------------------------------------
- Haz una subida del repositorio nuevo con git add, git commit y git push
- Entra en el navegador, en el repositorio. Ve a Settings -> Pages
- En Build and deployment, dentro de Branch, en el primer select selecciona main y en el segundo select selecciona root. Pulsa Save
- Espera unos minutos. Vete refrescando la página, aún dentro de Settings -> Pages, hasta que encima de Build and deployment te salga una sección donde ponga "Your site is live at https://..."
- Copia ese enlace y pégalo en el mismo e-mail que antes, con la etiqueta "PUBLICACIÓN EN GITHUB PAGES:". Envía el e-mail a nadia014arg@gmail.com
