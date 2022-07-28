
![](https://pngimage.net/wp-content/uploads/2018/05/dibujo-lentes-png-5.png)

# Cipher pass

 Cipher pass es un proyecto realizado con Vainilla Javascript para ser usado como aplicación web. Está pensando para cifrar contraseñas con el principio de Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Sobre del proyecto](#2-sobre-del-proyecto)
* [3. Proceso de diseño](#3-proceso-de-diseño)
* [4. Funcionalidad](#4-funcionalidad)
* [5. Usuarios](#6-usuarios)
* [6. Autor](#7-autor)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)


Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

Aunado a eso, también podrás cifrar tu mensaje con caracteres especiales, espacios, minúsculas y mayúsculas. En resúmen, utilizaremos como base el código ASCII inspirandonos en el cifrado César. 


## 2. Sobre del proyecto

La seguridad de nuestras contraseñas, entre varios, está tan desestimada que se prefiere que sea fácil de recordar y no mas segura. Este proyecto está pensando para las personas que deseen incrementar la seguridad de sus contraseñas donde el resultado se mostrará con los carácteres indicados por el desfasamiento que indique el usuario. 

Acá te dejamos una tabla comparativa de la seguridad de las contraseñas y que tanto se tardarían en ser descifradas según que características y/o carácteres incluyas. 

![Seguridad de las contraseñas](https://www.hostinet.com/formacion/wp-content/uploads/2020/09/tabla-seguridad-contrasena.jpg)



## 3. Proceso de diseño

El proceso de diseño fue pensando para que el usuario no tuviera que navegar entre múltiples ventanas u opciones. Consta de dos ventanas. La primera da la bienvenida al usuario, y contiene y botón de `Ingresar` que redirige a la segunda venta donde se realiza la funcionalidad principal del programa. En la sección de [Funcionalidad](#4-funcionalidad) describiremos cada una de las parte que la conforman.

## 4. Funcionalidad

Las partes y pasos que conforman la funcionalidad son las siguientes: 

- Paso 1: En ` Input desfase` el usuario ingresará un número para desfasar los carácteres a través de del codigo ASCII.  
- Paso 2: `Input mensaje a cifrar` es el recuadro situado a la izquierda de la página y en el ingresarás tus contraseñas a cifrar. 
- Paso 3: `Botón Cifrar` Una vez ingresada(s) la(s) contraseña(s) a cifrar se da click en esté botón y se cifrará(n)
- Paso 4: `Input mensaje descifrado` en este recuadro situado a la derecha de la página se mostrarán la(s) contraseña(s) cifrada(s) 
- Paso 5: Para regresar el mensaje a su estado orginal, volver a indicar el número de desfse, ingresar la contraseña cifrada en `Input mensaje a cifrar` y dar clcick en`Botón Descifrar`


## 5. Usuarios

Este programa está dirigido a cualquier usuario que desee cifrar sus contraseñas. 

## 6. Autor

- Andrea Barajas - Laboratorian MX013



