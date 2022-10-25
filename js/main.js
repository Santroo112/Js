//funciones
let PIN = "5461";

function login() {
  let ingresar = false;
  for (let i = 2; i >= 0; i--) {
    let userPIN = prompt("Ingresa tu PIN");
    if (userPIN === PIN) {
      alert("Bienvenido/a Ingreso exitoso");
      ingresar = true;
      break;
    } else {
      alert("Error te quedan " + i + " intentos");
    }
  }
  return ingresar;
}
let logueo = login();
console.log(logueo);

if (logueo) {
  let saldo = 20000;

  let opcion = prompt(
    "Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \n4 - Plazo fijo \nPresioná X para finalizar."
  );

  while (opcion != "X" && opcion != "x") {
    switch (opcion) {
      case "1":
        alert("Tu saldo es $ " + saldo);
        break;
      case "2":
        let retiro = parseInt(prompt("Ingresa el monto a retirar"));

        if (retiro <= saldo) {
          saldo = saldo - retiro;
          alert("Retiraste $" + retiro + " tu saldo es  $ " + saldo);
        } else {
          alert("Saldo insuficente anda a laburar");
        }
        break;
      case "3":
        let deposito = parseInt(prompt("Igresa el monto a depositar"));
        saldo = saldo + deposito;
        alert("Depósito exitoso, tu nuevo saldo es de $ " + saldo);
        break;

      default:
        alert("Opción no válida");
        break;
      
      
        
        
    }
    opcion = prompt(
      "Desea seguir operando? \n Elegí una opción: \n1- Saldo. \n2 - Retiro de dinero. \n3 - Depósito. \nPresioná X para finalizar."
    );
  }
} else {
  alert("Retuvimos tu tarjeta");
}

alert("Gracias por operar con nosotros");