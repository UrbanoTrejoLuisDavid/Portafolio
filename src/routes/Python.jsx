import React from 'react';

const Python = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-6 text-center">Proyectos en Python</h1>
      <p className="text-lg mb-4 text-center">
        Aquí encontrarás algunos de mis proyectos destacados en Python.
      </p>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">API para realizar operaciones CRUD</h3>
          <p className="mb-2">Proyecto en Python que crea una API para realizar operaciones CRUD en una tabla llamdad -rol-, permitiendo crear, leer, actualizar y eliminar roles en una base de datos.</p>
          <a href="https://github.com/UrbanoTrejoLuisDavid/API_CRUD" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
        
      </div>
    </div>
  );
};

export default Python;