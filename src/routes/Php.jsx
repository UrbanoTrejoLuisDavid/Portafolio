import React from 'react';

const Php = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-6 text-center">Proyectos en PHP</h1>
      <p className="text-lg mb-4 text-center">
        Aquí encontrarás algunos de mis proyectos destacados en PHP.
      </p>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">Tienda de colchones</h3>
          <p className="mb-2">Proyecto en PHP para calcular el costo total y la ganancia de la venta de colchones, considerando tipos y cantidades.</p>
          <a href="https://github.com/UrbanoTrejoLuisDavid/Ejercicio_Colchones" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">Papeleria</h3>
          <p className="mb-2">Proyecto en PHP para calcular el costo total de copias en una papeleria, considerando membresia y posibles descuentos.</p>
          <a href="https://github.com/UrbanoTrejoLuisDavid/Ejercicio_Fotocopiadora" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
      </div>
    </div>
  );
};

export default Php;