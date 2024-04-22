document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/clientes')
     .then(response => response.json())
     .then(data => {
        const clientesDiv = document.getElementById('clientes');
        data.forEach(cliente => {
          clientesDiv.innerHTML += `<p>${cliente.nombre} ${cliente.apellido}</p>`;
        });
      });
  
    fetch('/api/productos')
     .then(response => response.json())
     .then(data => {
        const productosDiv = document.getElementById('productos');
        data.forEach(producto => {
          productosDiv.innerHTML += `<p>${producto.nombre} - $${producto.precio}</p>`;
        });
      });
  
    fetch('/api/ventas')
     .then(response => response.json())
     .then(data => {
        const ventasDiv = document.getElementById('ventas');
        data.forEach(venta => {
          ventasDiv.innerHTML += `<p>${venta.producto} - $${venta.precio} - ${venta.cliente}</p>`;
        });
      });
  });