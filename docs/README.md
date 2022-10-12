# :bulb: Whatsapp button custom

![image](https://user-images.githubusercontent.com/96321122/195454040-e199b21b-1812-4c23-a731-94f4bde23c18.png)


## :pencil2: Informacion general

Este repositorio contiene el codigo necesario para crear un componente personalizado el cual permite agregar un boton de whatsaap para comunicacion con la tienda

este componente fue creado para una tienda diseñada en vtex io.

## :wrench: Configuracion 

### Paso 1 - Clonacion del repositorio

Primero se debe crear un nuevo repositorio que contiene ([react-app-template](https://github.com/vtex-apps/react-app-template)) de vtex io 

![image](https://user-images.githubusercontent.com/96321122/194419247-940ccb1b-566d-4b25-b5e0-c4ce319bb802.png)

una vez creado el repositorio lo clonarlo y ya estaria listo para empezar a trabajar

### paso 2 - Editar el manifest.json

teniendo el repositorio clonado se debe configurar el `manifest.json` que llega por defecto en el template

ejemplo:
```json
{
  "vendor": "itgloberspartnercl",
  "name": "whatsapp-button",
  "version": "0.0.1",
  "title": "WhatsApp Button Component",
  "description": "boton de componente para WhatsApp que recibira un telefono, un logo y un mensaje",
}
 ```
Ademas configurar los `builders`, agregando store:
```json
"builders": {
    "react": "3.x",
    "messages": "1.x",
    "docs": "0.x",
    "store": "0.x"
  },
 ```
### paso 3 - Editar el Package.json

Se modificara el archivo de `package.json` global
```json
{
  "version": "0.0.1",
  "name": "whatsapp-button",
}
 ``` 
De la misma manera se modifica el archivo `Package.json` que se encuentra en la carpeta `react`

### Paso - 4 Instalar dependencias en React

Teniendo configurado los pasos anteriores, se procede a instalar las depencias desde la terminal ubicado en la carpeta `react`, usando el comando `yarn` se instalara todas las dependencias para poder comenzar con el trabajo.

### Paso - 5 Creacion de la carpeta store

Se procede a crear una carpeta `store` que se encontrara independiente dentro de la carpeta general del proyecto, dentro de esta carpeta se creara el archivo `interfaces.json` donde sera configurado y este permitira ser usado para renderizar el componente en la tienda `vtex io`
```json
{
 "whatsapp-button": {
    "component": "WhatsappButton"
  }
}
 ``` 
### Paso - 6 Creacion del componente

Despues de las configuraciones generales se procede a la creacion del componente desde `react`, para ver en navegador los cambios y avances del componente se debera linkear la pagina con el comando `vtex link`

## :video_game: Colaboradores

(https://github.com/daniel17110290)
