# Notas App

Este es un proyecto React generado con Vite y con estilos de Bootswatch para crear y almacenar notas. Utiliza el hook `useState` para manejar el estado de las notas y el hook `useEffect` para sincronizar las notas con el almacenamiento local del navegador.

## Funcionamiento

Cuando la página carga, el efecto `useEffect` se encarga de recuperar las notas almacenadas en el almacenamiento local y establecerlas como el estado inicial. Luego, cuando se agregan o eliminan notas, el estado se actualiza y el efecto `useEffect` se encarga de guardar las notas actualizadas en el almacenamiento local.

La interfaz de usuario permite agregar nuevas notas ingresando texto en el campo de entrada y haciendo clic en el botón "Agregar nota". Las notas se mostrarán debajo del campo de entrada en tarjetas que contienen el texto de la nota y un botón "Borrar" para eliminar la nota. También hay un botón "Borrar todo" que eliminará todas las notas.

## Uso

Para ejecutar la aplicación, primero debes instalar todas las dependencias usando el comando `npm install`. Luego, puedes iniciar la aplicación con el comando `npm start`.

## Créditos

Este proyecto fue creado por mi utilizando Vite y estilos de Bootswatch. Siéntete libre de utilizarlo y modificarlo como desees.

## Contacto

Si tienes alguna pregunta o sugerencia sobre este proyecto, no dudes en contactarme en Discord en **BooneDev#1961**

## Test

https://react-notes-boonedev.netlify.app/
