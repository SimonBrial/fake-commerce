PROYECTO = E-COMMERCE (Frontend)

    - Se usara Fetch para hacer las peticiones a la API.
    - API DE PLATZI = https://fakeapi.platzi.com/en/rest/introduction
    - Definir el diseño del proyecto con una plantilla de internet.
    - Se usara TypeScript para practicar.
    - PAra la manipulacion del estado, se usara la API CONTEXT de react.

    PROCEDIMIENTOS PARA EL DESARROLLO DE LA APP

        - Crear las bases del proyecto.
        - Revisar y crear los datos de prueba mediante la respuesta de la api.
        - Definir las rutas de la app.
        - Definir por separado cada seccion que compone al frontend para ir desarrollandolo poco a poco.
        
        ESTRUCTURA QUE VA A TENER LA SECCION CORRESPONDIENTE DE CADA CATEGORIA
          - Los endpoints de cada categoria tienen la siguiente estructura: [GET] `https://api.escuelajs.co/api/v1/categories/${categoryNumber}`.
          - El header de las categorias y el carrito estara disponible en cada categoria o seccion de la app.
          - Debera tener una opcion para filtrar.
            - Por rango de precio: [GET] `https://api.escuelajs.co/api/v1/products/?price_min=${minPrice}&price_max=${maxPrice}`.
            - Por categoria: [GET] `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryNumber}`.
            - Por titulo: [GET] `https://api.escuelajs.co/api/v1/products/?title=${title}`.
            - Por precio: [GET] `https://api.escuelajs.co/api/v1/products/price=${price}`.
          - La estructura de los campos para filtrar estaran en el lado izquierdo de la pagina y a la derecha se mostraran todos los productos que se tienen en stock.

        ESTRUCTURA DE LA SECCION CORRESPONDIENTE AL PRODUCTO, PARA AGREGARLOS AL CARRITO
          - 
        ESTRUCTURA DE LA SECCION DEL CARRITO DE COMPRAS 

NOTA: La seccion de "Others" no esta desarrollada ya que seria mejor mostrar informacion real en esa seccion, facilitando la seleccion de la imagen del hero y demas.