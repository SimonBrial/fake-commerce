PROYECTO = E-COMMERCE (Frontend)

    - Se usara "Fetch" para hacer las peticiones a la API.
    - API DE DummyJSON = https://dummyjson.com/docs    https://dummyjson.com/products
    - Definir el diseño del proyecto con una plantilla de internet.
    - Se usara TypeScript para practicar.
    - Para la manipulacion del estado, se usara la API CONTEXT de react.
    - Las peticiones se haran con Fetch, nada de axios o librerias externas.
    - React Spinners para control de solicitudes y cargas de datos: https://mhnpd.github.io/react-loader-spinner/docs/components/rotating-lines

    PROCEDIMIENTOS PARA EL DESARROLLO DE LA APP

        ✅ Crear las bases del proyecto.
        ✅ Revisar y crear los datos de prueba mediante la respuesta de la api.
        ✅ Definir las rutas de la app.
        ✅ Definir por separado cada seccion que compone al frontend para ir desarrollandolo poco a poco.
        
        ------------------------------------------------- Diseño UI -------------------------------------------------

        (DONE) ESTRUCTURA QUE VA A TENER LA SECCION CORRESPONDIENTE DE CADA CATEGORIA
          ✅ Los endpoints de cada categoria tienen la siguiente estructura: [GET] `https://dummyjson.com/products/category/{Category}`.
          ✅ El header de las categorias y el carrito estara disponible en cada categoria o seccion de la app.
          ✅ Debera tener una opcion para filtrar. 
            * Por rango de precio: Se debe hacer mediante logica, ya que la api no contine un endpoint para filtrar por rango de precio.
            * Por categoria: [GET] `https://dummyjson.com/products/category/{CategoryName}`.
            * Por precio: Se debe hacer mediante logica, ya que la api no contine un endpoint para filtrar por precio.
          ✅ Los filtro usados solo seran los de filtrado por precio, los filtrados por rango de precio y por categoria.
          ✅ La estructura de los campos para filtrar estaran en el lado izquierdo de la pagina y a la derecha se mostraran todos los productos que se tienen en stock.
        
        (DONE) ESTRUCTURA DE LAS CARDS DE LOS ARTICULOS A VENDER
          ✅ Carrusel de imagenes para mostrar todas las imagenes que trae API, junto con sus flechas direccionales en los extremos del contenedor.
          ✅ Precio.
          ✅ Rating.
          ✅ Indice del descuento.
          ✅ Su titulo en la parte inferior de la card.
          ✅ Un boton para "ver mas" (a la derecha) y uno para "agregar al carrito" (a la izquierda).
          ✅ Carrusel de imagenes para mostrar todas las imagenes que trae API, junto con sus flechas direccionales en los extremos del contenedor.
        
        (DONE) ESTRUCTURA DEL DEL CARRITO DE COMPRAS
          ✅ Debe mostrar cada uno de los elementos agregados y que al final tenga un boton para pasar a comprarlos en la siguiente seccion.
          ✅ Debe estar definido por una imagen que lo represente, el titulo, el brand, el precio y un boton para eliminar del carrito.

        (DONE) SECCION DEL CARRITO DE COMPRAS PARA PAGAR
          ✅ Modelo a seguir https://onilab.com/blog/shopping-cart-ux/
          ✅ Se implemento de forma dinamica el indice de productos en el carrito para tener una referencia numerica cuando la cantidad de productos sobre pase el alto de la pantalla.
          ✅ Cada una de las cards de esta seccion estaran compuestas por: 
            * Titulo.
            * Brand.
            * Categoria.
            * Descripcion.
            * Una imagen del thumbnail o la primely imagen del conjunto de imagenes que vienen por defecto en el array de "images[]" en la respuesta de la API.
            * Para controlar la cantidad de productos que se agragan por cada uno, se debe hacer uso de un contador que tenga como limite superior el stock que se extrae de la API y como limite inferior, el cero.
            * Indicar el costo por producto para para saber cuanto es su valor real por producto en caso de que se desee llevar mas de uno.
            * En caso de poseer un descuento (si lo hay, es por cuestiones de diseño), se debe mostrar el precio real tachado para tener una forma de comparar el valor si el descuento y con el descuento, es para mejor experiencia del usuario.
            * Un icono (boton) que me permita eliminar desde ahi (asi como en el carrito de compras) los elementos que no me interesen comprar de ultimo momento.
          ✅ Debe tener incluido una seccion que se llamara "SUMMARY" que permite organizar la informacion del cliente para poder en realizar la compra, mostrando:
            * Cantidad de productos totales.
            * Precio total por producto.
            * Los TAX a pagar, son como un impuesto por cada compra.
            * Gastos de envio "Shipping fees"
            * Una identificacion del descuento aplicado de forma llamativa para el usuario.
            * Un boton para poder completar el proceso de compra.
            * Un boton para regresar a la seccion en la que se estaba antes de ir a la seccion del carrito de compras, eso es para el caso en el que se desee continuar con la compra de productos.
          
          PAGINACION
          - Solo se mostraran 10 elementos por pantalla para asi poder dejar mas elementos a la paginacion.
          - En caso de poseer menos de 10 elementos para mostrar en la pantalla, no se hara uso de la misma.
          - Se debe es actualizar solamente la seccion de las cards, para mejorar el rendimiento de la app o garantizar una mejor UX.
          - Para movil, se usara el ancho de la pantalla para mostrarla.
        
        ------------------------------------------------- Diseño UI -------------------------------------------------
        -------------------------------------------------- Logica --------------------------------------------------

          - Se tienen 2 arreglos basicos, los cuales son "Products" y "Cart":
            * Products: Para manipular los productos que se mostraran en el area de la tienda.
            * Cart: Es usado para los productos que se ubicaran el carrito de compras y en la seccion del carrito de compras.
          - Se debe tener la capacidad de eliminar cada elemento:
            * Carrito de compras
            * Seccion del carrito de compras.
          - Se deben agregar productos de la tienda al arreglo de cart mediante el boton de agregar al acarrito, ubicado en cada card.
          ✅ Para el consumo de la API, se debe hacer por cada categoria y cada seccion debe realizar las peticiones segun sea el nombre, cabe mencionar que en cada seccion, se deben filtrar por categorias asociadas a la misma.
            * Se debe hacer una logica para hacer el consumo de la API por cada seccion, mediante un filtrado.
          - Implementar la logica de filtrado en el seccion de de los productos.
          - 
        -------------------------------------------------- Logica --------------------------------------------------
        ------------------------------------------- Pendientes por hacer -------------------------------------------

        - Volver a diseñar toda la esctructura del carrusel de imagenes porque no esta bien definido en el espacio que se le asigna en el card.
        - 
        ------------------------------------------- Pendientes por hacer -------------------------------------------

NOTA: La seccion de "Others" no esta desarrollada ya que seria mejor mostrar informacion real en esa seccion, facilitando la seleccion de la imagen del hero y demas.
NOTA: Breakpoint **375px**