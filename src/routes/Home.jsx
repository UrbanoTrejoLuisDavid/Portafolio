import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-5xl font-bold mb-6 text-center text-black">Bienvenido a mi portafolio</h2>
        <p className="text-lg mb-4 text-center text-black">
          Aquí podrás descubrir información detallada sobre mis proyectos en diversos lenguajes de programación.
        </p>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4 text-black">Sobre mí</h2>
          <p className="mb-4 text-black">
            Estudiante comprometido, motivado por un constante deseo de aprender y crecer día a día. Estoy siempre dispuesto a enfrentar nuevos desafíos y adquirir conocimientos que me permitan expandir mis habilidades y perspectivas.
          </p>
          <img src="/images/dead.jpg" alt="Foto de [Tu Nombre]" className="w-40 h-40 rounded-full mx-auto shadow-md"/>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4 text-black">Habilidades</h2>
          <ul className="list-disc pl-5 text-black">
            <li className="mb-2">Comunicación efectiva</li>
            <li className="mb-2">Trabajo en equipo</li>
            <li className="mb-2">Resolución de problemas</li>
            <li className="mb-2">Adaptabilidad</li>
            <li className="mb-2">Liderazgo</li>
          </ul>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4 text-black">Pasatiempos</h2>
          <ul className="list-disc pl-5 text-black">
            <li className="mb-2">Escuchar música</li>
            <li className="mb-2">Jugar videojuegos</li>
            <li className="mb-2">Leer</li>
            <li className="mb-2">Praticar deportes</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;



