

// for (let i = 0; i < 5; i+=1) {    
    //     document.write(`Vuelta ${i}`);
    //     document.write("</br>");    
    // }
    
    // for (let elemento of listaProductos) {
        //         document.write(`Dato ${elemento}`);
        //         document.write("</br>");
        // }
        
        // while (condition) {
            
            //     break;
            // }
            
            // do {
                
                // } while (condition);
                
                
                // alert(`Cantidad de elementos: ${listaProductos.length}`);
                
                // listaProductos.pop();
                // listaProductos.push("Mouse");
                
                // listaProductos[5]="Pantalla";
                
                // let cadena = listaProductos.join("");
                
                // document.write(cadena);
                
                // listaProductos.splice(1, 1);
                
                // console.log(listaProductos);
     

                
                function saludar(nombre, edad){
                    let estado;
                     if (edad>=18) {
                         estado="Mayor de edad";
                         
                     } else {
                         estado="Menor de edad";
                     }
                    return `Hola ${nombre} desde función, ${estado}`;
                }

                const saludar_flecha = (nombre, edad)=>{
                    let estado;
                     if (edad>=18) {
                         estado="Mayor de edad";
                         
                     } else {
                         estado="Menor de edad";
                     }
                    return `Hola ${nombre} desde función, ${estado}`;
                };

                const saludar_abreviado = (nombre) => `Hola ${nombre} desde función`;
                
                let mensaje = saludar_abreviado("Juan", 25);
                document.write(mensaje);


                
                // listaProductos.forEach((elemento)=>{
                    //     document.write(elemento);
                    // });
                    
/*
let listaProductos = ["Disco Duro", "Teclado", "Mouse", "Pantalla", "Memoria USB"];
let valoresProductos = [200000, 100000, 80000, 800000, 50000];
                
let producto1 = {"nombre":"Disco Duro", "precio":200000};
let producto2 = {"nombre":"Teclado", "precio":100000};
let producto3 = {"nombre":"Mouse", "precio":80000};
let producto4 = {"nombre":"Pantalla", "precio":800000};
let producto5 = {"nombre":"Memoria USB", "precio":50000};

listaProductos = [producto1, producto2, producto3, producto4, producto5];

let continuar;

let menu = "";

for (let i in listaProductos) {
    let producto = listaProductos[i];
    menu += `${parseInt(i)+1}. ${producto.nombre} ($${producto.precio})\n`;
}
let nombresEnvio = ["Express", "Normal"];
let valoresEnvio = [20000, 10000];

let listadoCompras=[];

do{
    let compra={};

    compra.cliente = prompt("Escriba el nombre del cliente...");
    compra.documento = prompt(`Escriba el documento de ${compra.cliente}...`);

    let seleccion = parseInt(prompt(`${menu}\nSeleccione el producto...`));

    compra.producto = listaProductos[seleccion-1];

    compra.cantidad = parseInt(prompt("Escriba la cantidad que desea llevar..."));
    compra.envio = parseInt(prompt("Seleccione el tipo de envío (1. Express/2. Normal)..."));

    compra.total=0;
    compra.descuento=0;

    let subtotal = compra.producto.precio*compra.cantidad;
    let valorEnvio=0;

    if(compra.cantidad>10){
        compra.descuento = subtotal*0.1;
    }


    if(subtotal>5000000){
        if (compra.envio==1) {
            valorEnvio = valoresEnvio[compra.envio];
            
        } else {
            valorEnvio=0;
        }
        compra.descuento += valoresEnvio[compra.envio-1] - valorEnvio;
    }else{
        valorEnvio = valoresEnvio[compra.envio-1];
    }


    compra.total = valorEnvio + subtotal - compra.descuento;

    listadoCompras.push(compra);

    // console.log(listadoCompras);

    continuar = confirm("Ingresar otra compra?");

}while(continuar);


let xhtml = `<table>
                <thead>
                    <tr>
                        <th>CLIENTE</th>
                        <th>PRODUCTO</th>
                        <th>CANTIDAD</th>
                        <th>ENVÍO</th>
                        <th>DESCUENTO</th>
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>`;

for (let compra of listadoCompras) {
    
    xhtml+= `<tr>
                <td>${compra.cliente} (${compra.documento})</td>
                <td>${compra.producto.nombre} - $${compra.producto.precio}</td>
                <td>${compra.cantidad}</td>
                <td>${nombresEnvio[compra.envio-1]}</td>
                <td>$${compra.descuento}</td>
                <td>$${compra.total}</td>
            </tr>`;

}

xhtml += `</tbody>
        </table>`;


document.write(xhtml);

/*

let cliente = prompt("Escriba el nombre del cliente...");
let documento = prompt(`Escriba el documento de ${cliente}...`);



let menu = "";

for (let i in listaProductos) {
    let producto = listaProductos[i];
    menu += `${parseInt(i)+1}. ${producto.nombre} ($${producto.precio})\n`;
}

let seleccion = parseInt(prompt(`${menu}\nSeleccione el producto...`));
let cantidad = parseInt(prompt("Escriba la cantidad que desea llevar..."));
let envio = parseInt(prompt("Seleccione el tipo de envío (1. Express/2. Normal)..."));

let total=0;
let descuento=0;



let subtotal = valoresProductos[seleccion-1]*cantidad;
let nombresEnvio = ["Express", "Normal"];
let valoresEnvio = [20000, 10000];
let valorEnvio=0;

if(cantidad>10){
    descuento = subtotal*0.1;
}


if(subtotal>5000000){
    if (envio==1) {
        valorEnvio = valoresEnvio[envio];
        
    } else {
        valorEnvio=0;
    }
    descuento += valoresEnvio[envio-1] - valorEnvio;
}else{
    valorEnvio = valoresEnvio[envio-1];
}


total = valorEnvio + subtotal - descuento;

document.write(`
<h3>Estimad@ ${cliente}, el resumén de su compra es:</h3>
<ul>
<li><b>Producto:</b> ${listaProductos[seleccion-1]}</li>
<li><b>Precio:</b> $${valoresProductos[seleccion-1]}</li>
<li><b>Cantidad:</b> ${cantidad}</li>
<li><b>Envío:</b> ${nombresEnvio[envio-1]}</li>
<li><b>Descuento aplicado:</b> $${descuento}</li>
</ul>
<h3>Total valor compra: $${total}</h3>
`);

*/
