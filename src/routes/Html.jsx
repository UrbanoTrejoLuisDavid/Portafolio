import React from 'react';

const Html = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-6 text-center">Proyectos en HTML</h1>
      <p className="text-lg mb-4 text-center">
        Aquí encontrarás algunos de mis proyectos destacados en HTML.
      </p>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">Analizador de nivel de violencia</h3>
          <p className="mb-2">Proyecto en HTML para analizar y proporcionar consejos basados en el nivel de violencia seleccionado.</p>
          <a href="https://github.com/UrbanoTrejoLuisDavid/Ejercicio_Violentometro" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">Pagina de presentación</h3>
          <p className="mb-2">Proyecto en HTML que muestra información basica de mi.</p>
          <a href="https://github.com/UrbanoTrejoLuisDavid/Ejercicio_PaginaAcerca" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
        
      </div>
    </div>
  );
};

export default Html;