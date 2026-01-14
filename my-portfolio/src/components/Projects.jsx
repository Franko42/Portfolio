import React from 'react';
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-16 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h3 className="text-3xl font-bold text-white ">{t("projectsTitle")}</h3>
        <div className="grid mt-4 gap-6 md:grid-cols-2 lg:grid-cols-2">
          <div className="bg-white shadow rounded p-4">
            <h4 className="text-xl font-bold mb-2">Conectando.com.ar</h4>
            <h2 className='font-bold'>Role : <spam className='font-normal'>Frontend Developer</spam> </h2>
            <p className="text-gray-600 mb-2">Conectando is a platform developed by Silicon Misiones that bridges the gap between startups, entrepreneurs, and digital professionals. It connects innovative projects with skilled tech talent, fostering meaningful collaborations that drive the future of technology in the region.</p>
            <a href="http://Conectando.com.ar" className="text-blue-600 underline hover:underline">{t("viewProject")}</a>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h4 className="text-xl font-bold mb-2">Simi-access</h4>
            <h2 className='font-bold'>Role : <spam className='font-normal'>FullStack Developer</spam> </h2>
            <p className="text-gray-600 mb-2">SIMI-ACCESS es un sistema de control de accesos y gestión de asistencia desarrollado para el edificio empresarial de Silicon Misiones. La aplicación permite registrar ingresos y egresos del personal, administrar usuarios y roles, y visualizar información de asistencia de forma centralizada y segura. Fue diseñada con foco en la confiabilidad de los datos, la trazabilidad de registros y una experiencia de uso clara para operadores administrativos. El proyecto implementa una arquitectura moderna orientada a escalabilidad y mantenimiento, utilizando tipado estricto y una capa de persistencia robusta.</p>
            <a href="http://Conectando.com.ar" className="text-blue-600 underline hover:underline">{t("viewProject")}</a>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h4 className="text-xl font-bold mb-2">SINAM</h4>
            <h2 className='font-bold'>Role : <spam className='font-normal'>Tester</spam> </h2>
            <p className="text-gray-600 mb-2">sistema web de gestion de casos internos para la defensoria de los derechos de los niño niñas y adolescentes de vice gobernación.</p>
            <a href="http://Conectando.com.ar" className="text-blue-600 underline hover:underline">{t("viewProject")}</a>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h4 className="text-xl font-bold mb-2">Spinlab</h4>
            <h2 className='font-bold'>Role : <spam className='font-normal'>Tester</spam> </h2>
            <p className="text-gray-600 mb-2">Notes is a technical test i did for a company, in wich i had three days to create a functional web app to manage Sticky notes, the frontend made with react and the backend with NodeJS and ExpressJS using PostgreSQL as a database and fully deployable with docker compose.</p>
            <a href="http://Conectando.com.ar" className="text-blue-600 underline hover:underline">{t("viewProject")}</a>
          </div> <div className="bg-white shadow rounded p-4">
            <h4 className="text-xl font-bold mb-2">Alarms</h4>
            <h2 className='font-bold'>Role : <spam className='font-normal'>Own Project</spam> </h2>
            <p className="text-gray-600 mb-2">Alarms es un proyecto de práctica desarrollado como un gestor simple de alarmas que permite crear, editar, eliminar y posponer alarmas. El sistema funciona mediante tareas programadas en el backend utilizando un motor de cron para ejecutar las alarmas en los horarios definidos. El proyecto integra persistencia de datos en una base PostgreSQL y una interfaz moderna desarrollada con Next.js, priorizando la claridad del código, el manejo correcto del tiempo y la consistencia de datos. Fue una experiencia clave para reforzar conceptos de backend, programación asincrónica y gestión de procesos programados.</p>
            <a href="http://Conectando.com.ar" className="text-blue-600 underline hover:underline">{t("viewProject")}</a>
          </div>
          <div className="bg-white shadow rounded p-4">
            <h4 className="text-xl font-bold mb-2">Notes</h4>
            <h2 className='font-bold'>Role : <spam className='font-normal'>Own Project</spam> </h2>
            <p className="text-gray-600 mb-2">Notes is a technical test i did for a company, in wich i had three days to create a functional web app to manage Sticky notes, the frontend made with react and the backend with NodeJS and ExpressJS using PostgreSQL as a database and fully deployable with docker compose.</p>
            <a href="http://Conectando.com.ar" className="text-blue-600 underline hover:underline">{t("viewProject")}</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;