
let radios = document.getElementsByName("envio"); 

let titulo2 = document.querySelector("h2");

let titulos = document.querySelectorAll("h2");

let producto1 = {"nombre":"Disco Duro", "precio":200000};
let producto2 = {"nombre":"Teclado", "precio":100000};
let producto3 = {"nombre":"Mouse", "precio":80000};
let producto4 = {"nombre":"Pantalla", "precio":800000};
let producto5 = {"nombre":"Memoria USB", "precio":50000};

let listaProductos = [producto1, producto2, producto3, producto4, producto5];

let nombresEnvio = ["Express", "Normal"];
let valoresEnvio = [20000, 10000];


const cargarProductos = ()=>{

    let select = document.getElementById("productos");
    select.innerHTML=`<option value="-1">Seleccione el producto</option>`;

    for (let index = 0; index < listaProductos.length; index++) {
        const producto = listaProductos[index];
        select.innerHTML += `<option value="${index}">
                                ${producto.nombre} - $${producto.precio}
                            </option>`        
    }

};

cargarProductos();

const agregarCompra = (compra)=>{

    let tabla = document.getElementById("datos_compras");

    tabla.innerHTML += `<tr>
                <td>${compra.cliente} (${compra.documento})</td>
                <td>${compra.producto.nombre} - $${compra.producto.precio}</td>
                <td>${compra.cantidad}</td>
                <td>${nombresEnvio[compra.envio]}</td>
                <td>$${compra.descuento}</td>
                <td>$${compra.total}</td>
            </tr>`;

};

const procesarInformacion = ()=>{
    
    let formulario = document.getElementById("form_compra");

    let compra = {};
    compra.cliente = formulario.cliente.value;
    compra.documento = formulario.documento.value;
    let seleccion = formulario.producto.value;
    compra.producto = listaProductos[seleccion];
    compra.cantidad = formulario.cantidad.value;
    compra.envio = formulario.envio.value;

    compra.total=0;
    compra.descuento=0;

    let subtotal = compra.producto.precio*compra.cantidad;
    let valorEnvio=0;

    if(compra.cantidad>10){
        compra.descuento = subtotal*0.1;
    }


    if(subtotal>5000000){
        if (compra.envio==0) {
            valorEnvio = valoresEnvio[1];
            
        } else {
            valorEnvio=0;
        }
        compra.descuento += valoresEnvio[compra.envio] - valorEnvio;
    }else{
        valorEnvio = valoresEnvio[compra.envio];
    }


    compra.total = valorEnvio + subtotal - compra.descuento;

    formulario.reset();

    agregarCompra(compra);
    


};
