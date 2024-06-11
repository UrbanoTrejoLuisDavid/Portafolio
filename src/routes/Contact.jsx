import React from 'react';
import { FaGithub, FaPhoneVolume, FaUserAlt, FaSchool, FaFacebookSquare } from 'react-icons/fa';
import { FaPersonCircleCheck } from "react-icons/fa6";

const ContactDetail = ({ icon: Icon, label, value, link }) => (
  <p className="flex items-center mb-4 text-lg text-black"> {/* Cambiada la clase text-blue-600 a text-black */}
    <Icon className="mr-3 text-black" aria-label={label} /> {/* Cambiada la clase text-blue-600 a text-black */}
    {link ? (
      <a href={link} className="text-black hover:underline"> {/* Se mantiene la clase text-blue-500 */}
        {value}
      </a>
    ) : (
      value
    )}
  </p>
);

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-black">Contacto</h2>
        <ContactDetail icon={FaUserAlt} label="Nombre" value="Luis David Urbano Trejo" />
        <ContactDetail icon={FaPhoneVolume} label="Teléfono" value="5527147453" />
        <ContactDetail icon={FaSchool} label="Institución" value="Tecnológico de Estudios Superiores de Jilotepec" />
        <ContactDetail icon={FaFacebookSquare} label="Facebook" value="Urbano David" />
        <ContactDetail icon={FaGithub} label="GitHub" value="https://github.com/UrbanoTrejoLuisDavid" link="https://github.com/UrbanoTrejoLuisDavid" />

        <h3 className="text-2xl font-bold mt-8 text-center mb-4 text-black">Referencias</h3>
        <ContactDetail icon={FaPersonCircleCheck} label="Nombre" value="Iris Atenea Silva Lara" />
        <ContactDetail icon={FaPhoneVolume} label="Teléfono" value="7225477526" />
      </div>
    </div>
  );
};

export default Contact;


