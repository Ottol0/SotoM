# **Promesas**

## **Descripcion**

Las promesas son un concepto para resolver el problema de asincronía de una forma mucho más elegante y práctica que, por ejemplo, utilizando funciones callbacks directamente.
Como su propio nombre indica, una promesa es algo que, en principio pensamos que se cumplirá, pero en el futuro pueden ocurrir varias cosas:
- La promesa se cumple (promesa resuelta)
- La promesa no se cumple (promesa se rechaza)
- La promesa se queda en un estado incierto indefinidamente (promesa pendiente)
## **Sintaxis**
 
    new Promise( /* ejecutor */ function(resolver, rechazar) { ... } );

## **Métodos**

**Promise.all(iterable)**

Devuelve una de dos promesas: una que se cumple cuando todas las promesas en el argumento iterable han sido cumplidas, o una que se rechaza tan pronto como una de las promesas del argumento iterable es rechazada. Si la promesa retornada es cumplida, lo hace con un arreglo de los valores de las promesas cumplidas en el mismo orden definido en el iterable. Si la promesa retornada es rechazada, es rechazada con la razón de la primera promesa rechazada en el iterable. Este método puede ser útil para agregar resultados de múltiples promesas

### **Promise.race(iterable)**
Devuelve una promesa que se cumple o rechaza tan pronto como una de las promesas del iterable se cumple o rechaza, con el valor o razón de esa promesa.

### **Promise.reject(reason)**

Devuelve un objeto Promise que es rechazado con la razón dada.

### **Promise.resolve(value)**

Devuelve un objeto Promise que es resuelto con el valor dado. Si el valor es un thenable (p.ej. tiene un método then), la promesa devuelta "seguirá" este thenable, adoptando su eventual estado; de lo contrario la promesa devuelta será cumplida con el valor. Generalmente, si se quiere saber si un valor es una promesa o no, se podría usar - Promise.resolve(value) y trabajar con el valor devuelto como una promesa.