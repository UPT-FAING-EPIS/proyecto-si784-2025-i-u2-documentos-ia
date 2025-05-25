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
   
   # 2. Posicionamiento
   El sistema GDI-IA se posiciona como una solución innovadora dentro del mercado de automatización documental, enfocándose específicamente en la generación inteligente de documentos técnicos y académicos. Su ventaja competitiva radica en la integración modular de múltiples servicios de inteligencia artificial, lo que le permite adaptarse a distintos formatos y estándares establecidos, superando las limitaciones de herramientas convencionales.
   
   ## a. **Oportunidad de negocio**
   Actualmente, existe una notoria falta de plataformas accesibles que automaticen de forma eficiente la creación de documentos personalizados y estructurados. Esta carencia representa una oportunidad para ofrecer un servicio escalable y flexible dirigido a estudiantes, profesionales independientes, equipos de desarrollo y organizaciones que requieren generar documentación formal de forma frecuente y estandarizada. GDI-IA puede ser adoptado por instituciones educativas, agencias tecnológicas y freelancers que deseen optimizar su flujo de trabajo documental.
   
   ## b. **Definición del problema**
   La elaboración manual de documentos formales es un proceso que consume tiempo, requiere alta atención al detalle y es susceptible a errores de formato, redacción y organización del contenido. No existe actualmente una herramienta que permita, de manera integrada, aprovechar las capacidades de diferentes IAs para automatizar este proceso bajo una misma plataforma, generando así una solución flexible, precisa y adaptable a distintas necesidades documentales.
   
   # 3. Descripción de los interesados y usuarios
   ## a. **Resumen de los interesados**
   Los interesados en el proyecto incluyen directivos de empresas tecnológicas, responsables de áreas académicas, gestores de proyectos, y entidades educativas que buscan optimizar la producción documental. También se consideran partes interesadas los desarrolladores encargados del mantenimiento del sistema y los inversores potenciales.
   
   ## b. **Resumen de los usuarios**
   Los usuarios principales del sistema serán estudiantes universitarios, desarrolladores de software, asistentes de investigación, y profesionales que requieren elaborar documentación técnica o académica siguiendo formatos establecidos. Estos usuarios valoran la rapidez, precisión, facilidad de uso y confiabilidad del sistema.
   
   ## c. **Entorno de usuario**
   El entorno de usuario será una plataforma web accesible desde navegadores modernos, compatible con dispositivos de escritorio y móviles. Requiere conexión a internet y acceso a una cuenta para interactuar con los módulos de generación, edición, descarga y almacenamiento de documentos.
   
   ## d. **Perfiles de los interesados**
   - **Directores de TI**: Interesados en soluciones que mejoren la eficiencia operativa de sus equipos.
   - **Coordinadores académicos**: Buscan herramientas para estandarizar y facilitar la generación de documentos institucionales.
   - **Desarrolladores del sistema**: Interesados en el rendimiento, escalabilidad y mantenimiento de la solución.
   - **Inversionistas o patrocinadores**: Evaluarán el retorno de inversión y la viabilidad comercial del producto.
   
   ## e. **Perfiles de los Usuarios**
   - **Trabajadores de empresas de desarrollo de software:** Necesitan agilizar la producción de documentación del producto software para sus clientes.
   - **Desarrolladores freelance**: Necesitan agilizar la producción de documentación para proyectos.
   - **Asistentes de investigación**: Demandan una herramienta que les permita enfocarse en el contenido, dejando el formato y redacción a la IA.
   - **Profesionales técnicos**: Buscan soluciones eficientes para entregar informes formales sin distracciones operativas.
   
   ## f. **Necesidades de los interesados y usuarios**
   - Generación rápida de documentos estructurados.
   - Reducción de errores en formato, estilo y ortografía.
   - Acceso a plantillas normalizadas y automatización de referencias.
   - Interfaz intuitiva y adaptable.
   - Módulos de IA confiables para redacción y análisis.
   - Control de versiones y almacenamiento en línea.
   - Compatibilidad con diferentes tipos de documentos (PDF, DOCX).