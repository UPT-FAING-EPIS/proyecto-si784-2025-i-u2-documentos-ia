**UNIVERSIDAD PRIVADA DE TACNA**

**FACULTAD DE INGENIERÍA**

**Escuela Profesional de Ingeniería de Sistemas**

![Logo](media/logo-upt.png)

**Proyecto** 

**“*Generador de documentación impulsado por IA (GDI-IA)”***

**Informe de Vision**

**Curso:**

*Calidad y Pruebas de Software*


**Docente:** 

*Mag. Patrick Cuadros Quiroga*


**Integrantes:**

- *Akhtar Oviedo, Ahmed Hasan (2022074261)*
- *Ayala Ramos, Carlos Daniel (2022074266)*
- *Salas Jiménez, Walter Emmanuel (2022073896)*
- *Ancco Suaña, Bruno Enrique (2023077472)*


**Tacna – Perú**

**2025**

![Logo1](media/logo1.png) ![Logo2](media/logo2.png)

|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|***Versión***|***Hecha por***|***Revisada por***|***Aprobada por***|***Fecha***|***Motivo***|
|1\.0|AHAO, CDAR, WESJ, BEAS|PCQ|-|25/04/2025|Versión 1.0|


## Índice General

1. [Introducción](#1-introducción)
   - [Propósito](#a-propósito)
   - [Alcance](#b-alcance)
   - [Definiciones, Siglas y Abreviaturas](#c-definiciones-siglas-y-abreviaturas)
   - [Referencias](#d-referencias)
   - [Visión General](#e-visión-general)
2. [Posicionamiento](#2-posicionamiento)
   - [Oportunidad de negocio](#a-oportunidad-de-negocio)
   - [Definición del problema](#b-definición-del-problema)
3. [Descripción de los interesados y usuarios](#3-descripción-de-los-interesados-y-usuarios)
   - [Resumen de los interesados](#a-resumen-de-los-interesados)
   - [Resumen de los usuarios](#b-resumen-de-los-usuarios)
   - [Entorno de usuario](#c-entorno-de-usuario)
   - [Perfiles de los interesados](#d-perfiles-de-los-interesados)
   - [Perfiles de los usuarios](#e-perfiles-de-los-usuarios)
   - [Necesidades de los interesados y usuarios](#f-necesidades-de-los-interesados-y-usuarios)
4. [Vista General del Producto](#4-vista-general-del-producto)
   - [Perspectiva del producto](#a-perspectiva-del-producto)
   - [Resumen de capacidades](#b-resumen-de-capacidades)
   - [Suposiciones y dependencias](#c-suposiciones-y-dependencias)
   - [Costos y precios](#d-costos-y-precios)
   - [Licenciamiento e instalación](#e-licenciamiento-e-instalación)
5. [Características del producto](#5-características-del-producto)
6. [Restricciones](#6-restricciones)
7. [Rangos de calidad](#7-rangos-de-calidad)
8. [Precedencia y Prioridad](#8-precedencia-y-prioridad)
9. [Otros requerimientos del producto](#9-otros-requerimientos-del-producto)
   - [Estándares legales](#a-estándares-legales)
   - [Estándares de comunicación](#b-estándares-de-comunicación)
   - [Estándares de cumplimiento de la plataforma](#c-estándares-de-cumplimiento-de-la-plataforma)
   - [Estándares de calidad y seguridad](#d-estándares-de-calidad-y-seguridad)
10. [Conclusiones](#10-conclusiones)
11. [Recomendaciones](#11-recomendaciones)
12. [Webgrafía](#12-webgrafía)


   # 1. Introducción
   ## a. **Propósito**
   El propósito de este proyecto es diseñar e implementar una plataforma web capaz de ayudar a completar documentos estructurados de manera automática, utilizando diversas IAs especializadas en redacción, análisis de contenido y generación de referencias. La solución permitirá a los usuarios a terminar los documentos en poco tiempo siguiendo formatos predefinidos, reduciendo el esfuerzo manual y asegurando la coherencia y calidad del contenido.

   ## b. **Alcance**
   El sistema abarca:
   - Ayuda de manera automatizada en los documentos para formatos estandarizados (FD01-FD06).
   - Un módulo de captura de datos donde el usuario ingresará información clave.
   - La integración de varias IAs para procesar y generar contenido por secciones.
   - La generación de documentos en formatos PDF y DOCX.
   - Almacenamiento y gestión de documentos generados. No incluye la edición manual posterior al documento generado dentro de la plataforma.

   ## c. **Definiciones, Siglas y Abreviaturas**
   - IA: Inteligencia Artificial.
   - MCP: Multi-Component Platform (Plataforma de Múltiples Componentes).
   - FD01-FD06: Formatos documentales estandarizados para proyectos de software.
   - API: Application Programming Interface.
   - PDF/DOCX: Formatos de salida de documentos.

   ## d. **Referencias**
   - Manuales institucionales de formatos documentales.
   - Documentación oficial de OpenAI, Hugging Face y Ollama.
   - Guías de integración API REST con PHP.
   - Buenas prácticas de generación de documentos automatizados.

   ## e. **Visión General**
   El proyecto busca convertirse en una herramienta de ayuda para estudiantes, desarrolladores y profesionales, facilitando la creación de documentos formales mediante una plataforma inteligente, modular y escalable. La visión a largo plazo es integrar más formatos, personalizar plantillas y ofrecer servicios de análisis documental avanzado.
   
