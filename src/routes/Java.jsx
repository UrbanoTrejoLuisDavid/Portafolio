import React from 'react';

const Java = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-6 text-center">Proyectos en Java</h1>
      <p className="text-lg mb-4 text-center">
        Aquí encontrarás algunos de mis proyectos destacados en Java.
      </p>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">Papeleria</h3>
          <p className="mb-2">Proyecto en Java con GUI para calcular el costo total de copias en una papeleria.</p>
          <a href="https://github.com/UrbanoTrejoLuisDavid/Ejercicio_Papeleria" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">Conversor de temperatura</h3>
          <p className="mb-2">Proyecto en Java con GUI para convertir entre diferentes escalas de temperatura: Celsius, Fahrenheit y Kelvin.</p>
          <a href="https://github.com/UrbanoTrejoLuisDavid/Ejercicio_Temperatura" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">Sistema de ventas de hamburguesas</h3>
          <p className="mb-2">Proyecto en Java con GUI para generar ventas de hamburguesas y calcular el total a pagar.</p>
          <a href="https://github.com/UrbanoTrejoLuisDavid/Ejercicio_Hamburguesas" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
      </div>
    </div>
  );
};

export default Java;