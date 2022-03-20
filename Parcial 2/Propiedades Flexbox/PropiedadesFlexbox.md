# Propiedades de Flex box

## ¿Qué es flexbox?

 Flexbox es probablemente uno de los más completos y eficaces módulos de maquetación. 
 Todo lo que era complicado en versiones anteriores de CSS ( como centrar verticalmente 
 o diseñar estructuras que se redimensionen con elegancia ) con flexbox ( CSS3 ) es ya 
 una tarea muy fácil.

# Propiedades del contenedor flex
 ## *display*
display: flex  / inline-flex ;
display: -ms-flexbox / -ms-inline-flexbox;
> Si su valor es flex o inline-flex, la propiedad display define un contenedor flex (flexbox).
 ## *flex-direction*
 flex-direction: row / row-reverse / column / column-reverse
> Establece la dirección del eje principal y por tanto la dirección de los elementos flex.
El valor por defecto es row (fila).
 ## *flex-wrap*
 flex-wrap: nowrap / wrap / wrap-reverse
> Especifica si puede haber un cambio de línea ( wrap ) o no ( nowrap ).
El valor por defecto es nowrap.
 ## *flex-flow*
 flex-flow: flex-direction / flex-wrap
> Es la forma abreviada para las propiedades flex-direction y flex-wrap.
El valor por defecto es row nowrap.
 ## *align-items*
 align-items: flex-start / flex-end / center / baseline / stretch;
-ms-flex-align:start / end / center / baseline / stretch
> Define como se colocan los elementos dentro de una caja flexible flexbox relativamente al eje transversal.
El valor por defecto es stretch.
 ## *justify-content*
 justify-content: flex-start / flex-end / center / space-between / space-around;
-ms-flex-pack: start / end / center / justify / justify
> Define como se colocan los elementos dentro de una caja flexible ( flexbox ) relativamente al eje principal, cuando los elementos no ocupan toda la caja.
El valor por defecto es flex-start.
## *align-content*
 align-content: flex-start / flex-end / center / space-between / space-around / stretch;
-ms-flex-line-pack: start / end / center / justify / stretch
> Alinea los elementos del contenedor flex cuando los elementos no utilizan todo el espacio disponible en el eje transversal.
El valor por defecto es stretch.

# Propiedades de los elementos flex
 ## *align-self*
 align-self: auto / flex-start / flex-end / center / baseline / stretch
-ms-flex-item-align:auto / start / end / center / baseline / stretch
> Reposiciona elementos individuales relativamente al eje transversal. Generalmente se trata de elementos posicionados con align-items.
 ## *flex-grow*
 flex-grow: número / initial / inherit
 > Define cuánto puede crecer un elemento flex, si fuera necesario.
El valor por defecto es 0.
 ## *flex-shrink*
 flex-shrink: número / initial / inherit
 > Define cuánto puede disminuir ( contraerse ) un elemento flex, si fuera necesario.
El valor por defecto es 1.
 ## *flex-basis*
 flex-basis: número / auto / initial / inherit
 > Especifica el valor inicial del tamaño principal de un elemento flex.
El valor por defecto es auto.
 ## *flex*
 flex: none / flex-grow (flex-shrink) (flex-basis)
 > La forma abreviada para flex-grow, flex-shrink y flex-basis juntos.
El valor por defecto es 0 1 auto.
 ## *order*
 order: número / initial / inherit
 > Se utiliza para cambiar el orden en el que aparecen los elementos individuales.

## Luis Otoniel Soto Maldonado
## 19100799