import React from 'react';

const Javascript = () => {
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-5xl font-bold mb-6 text-center">Proyectos en JavaScript</h1>
      <p className="text-lg mb-4 text-center">
        Aquí encontrarás algunos de mis proyectos destacados en JavaScript.
      </p>

      <div className="mt-8">
        <h2 className="text-3xl font-bold mb-4">Proyectos</h2>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">Veterinaria</h3>
          <p className="mb-2">Proyecto en React para agregar mascotas, permitiendo ingresar informacion como nombre, contacto, imagen y padecimiento y lo almacena.</p>
          <a href="https://github.com/UrbanoTrejoLuisDavid/Ejercicio_Veterinaria" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">Pokedex</h3>
          <p className="mb-2">Proyecto en React que utiliza la Poke Api para mostrar una lista de Pokémon, permite cargar mas pokémon al hacer scroll y al seleccionar un pokémon muestra sus datos.</p>
          <a href="https://github.com/UrbanoTrejoLuisDavid/Poke_Api" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-4 transition-opacity duration-500 ease-in-out opacity-0 hover:opacity-100">
          <h3 className="text-2xl font-bold mb-2">Pagina</h3>
          <p className="mb-2">Proyecto en React que permite la navegación entre dos páginas diferentes mediante el cambio de estado -currentPage-.</p>
          <a href="https://github.com/UrbanoTrejoLuisDavid/Ejercicio_Pagina" className="text-blue-500" target="_blank" rel="noopener noreferrer">Ver más</a>
        </div>
      </div>
    </div>
  );
};

export default Javascript;