let cliente = prompt("Escriba el nombre del cliente...");
let documento = prompt(`Escriba el documento de ${cliente}...`);
let producto = prompt("Escriba el nombre del producto...");
let precio = parseFloat(prompt(`Escriba el precio de ${producto}...`));
let cantidad = parseInt(prompt("Escriba la cantidad que desea llevar..."));
let envio = parseInt(prompt("Seleccione el tipo de envío (1. Express/2. Normal)..."));

let total=0;
let descuento=0;

let subtotal = precio*cantidad;
let valorEnvio=0;

if(cantidad>10){
  descuento = subtotal*0.1;
}

if(envio==1){

    if(subtotal>5000000){
        valorEnvio = 10000;
        descuento += 10000;
    }else{
        valorEnvio = 20000;
    }
}else{

    if (subtotal>5000000) {
        valorEnvio=0;
        descuento += 10000;
    } else {
        valorEnvio = 10000;
    }
}

total = valorEnvio + subtotal - descuento;

document.write(`
    <h3>Estimad@ ${cliente}, el resumén de su compra es:</h3>
    <ul>
        <li><b>Producto:</b> ${producto}</li>
        <li><b>Precio:</b> $${precio}</li>
        <li><b>Cantidad:</b> ${cantidad}</li>
        <li><b>Envío:</b>xxx</li>
        <li><b>Descuento aplicado:</b> $${descuento}</li>
    </ul>
    <h3>Total valor compra: $${total}</h3>
`);


