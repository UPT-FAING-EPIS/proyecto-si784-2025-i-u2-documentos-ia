**UNIVERSIDAD PRIVADA DE TACNA**

**FACULTAD DE INGENIERÍA**

**Escuela Profesional de Ingeniería de Sistemas**

![Logo](media/logo-upt.png)

**Proyecto** 

**“*Generador de documentación impulsado por IA (GDI-IA)”***

**Informe de Factibilidad**

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
|1\.0|AHAO, CDAR, WESJ, BEAS|PCQ|-|24/04/2025|Versión 1.0|


## Índice General

1. [Descripción del Proyecto](#1-descripción-del-proyecto)  
   1.1 [Nombre del proyecto](#11-nombre-del-proyecto)  
   1.2 [Duración del proyecto](#12-duración-del-proyecto)  
   1.3 [Descripción](#13-descripción)  
   1.4 [Objetivos](#14-objetivos)  
   - 1.4.1 [Objetivo general](#141-objetivo-general)  
   - 1.4.2 [Objetivos específicos](#142-objetivos-específicos)  
2. [Riesgos](#2-riesgos)  
3. [Análisis de la situación actual](#3-análisis-de-la-situación-actual)  
   3.1 [Planteamiento del problema](#31-planteamiento-del-problema)  
   3.2 [Consideraciones de hardware y software](#32-consideraciones-de-hardware-y-software)  
4. [Estudio de Factibilidad](#4-estudio-de-factibilidad)  
   4.1 [Factibilidad técnica](#41-factibilidad-técnica)  
   4.2 [Factibilidad económica](#42-factibilidad-económica)  
   - 4.2.1 [Costos generales](#421-costos-generales)  
   - 4.2.2 [Costos operativos durante el desarrollo](#422-costos-operativos-durante-el-desarrollo)  
   - 4.2.3 [Costos del ambiente](#423-costos-del-ambiente)  
   - 4.2.4 [Costos de personal](#424-costos-de-personal)  
   - 4.2.5 [Costos totales del desarrollo del sistema](#425-costos-totales-del-desarrollo-del-sistema)  
   
   4.3 [Factibilidad operativa](#43-factibilidad-operativa)  
   4.4 [Factibilidad legal](#44-factibilidad-legal)  
   4.5 [Factibilidad social](#45-factibilidad-social)  
   4.6 [Factibilidad ambiental](#46-factibilidad-ambiental)  
5. [Análisis financiero](#5-análisis-financiero)  
   5.1 [Justificación de la inversión](#51-justificación-de-la-inversión)  
   - 5.1.1 [Beneficios del proyecto](#511-beneficios-del-proyecto)  
   - 5.1.2 [Criterios de inversión](#512-criterios-de-inversión)  
6. [Conclusiones](#6-conclusiones)


# 1. Descripción del Proyecto
   ## 1.1 **Nombre del proyecto**
   Generador de Documentación Impulsado por IA (GDI-IA)

   ## 1.2 **Duración del proyecto**
   4 meses

   ## 1.3 **Descripción**
   El proyecto será implementado en **DevStar Solutions**, una empresa tecnológica dedicada al desarrollo de software personalizado. Se ha detectado que los equipos invierten una cantidad significativa de tiempo en la creación de documentación técnica, lo que impacta directamente en la productividad general de los proyectos.
   
   El sistema GDI-IA tiene como objetivo automatizar la generación de documentación de software mediante el uso de inteligencia artificial, ofreciendo una plataforma accesible para todos los roles dentro del área informática. Los usuarios podrán describir su proyecto mediante formularios y seleccionar plantillas específicas según el tipo de documento requerido. La IA procesará esta información para generar documentación estructurada y profesional, incluyendo imágenes UML, sin necesidad de conocimientos avanzados.
   
   Este proyecto busca no sólo optimizar los tiempos de documentación, sino también estandarizar los entregables técnicos, facilitar el entendimiento entre equipos y mejorar la calidad general de los proyectos desarrollados.

   ## 1.4 **Objetivos**

   ### 1.4.1 **Objetivo general**
   - Desarrollar una plataforma web inteligente que permita a los usuarios generar documentación técnica de software de manera automatizada, mediante el uso de inteligencia artificial y plantillas personalizadas.

   ### 1.4.2 **Objetivos Específicos**
   - Diseñar formularios interactivos que permitan a los usuarios describir sus proyectos fácilmente.
   - Incorporar plantillas prediseñadas para distintos tipos de documentación (arquitectura, diseño, despliegue, API, etc.).
   - Integrar modelos de IA que comprendan el contexto del proyecto y generen contenido coherente y útil.
   - Conectar el sistema con APIs para la generación de diagramas UML.
   - Almacenar la documentación generada en formato PDF y permitir su descarga desde un servidor FTP.

   # 2. Riesgos
   - Posible imprecisión inicial en los resultados de la IA al interpretar descripciones poco claras.
   - Sobrecarga en el servidor de almacenamiento FTP si la demanda crece considerablemente.
   - Dificultad de adaptación por parte de usuarios que prefieren documentación manual.
   - Dependencia de terceros (APIs) para la generación de diagramas.
   - Falta de internet en el usuario durante la generación del documento podría afectar la funcionalidad.

   # 3. Análisis de la Situación actual
   ## 3.1 **Planteamiento del problema**
   En la actualidad, los equipos de desarrollo de DevStar Solutions enfrentan dificultades en la elaboración eficiente de documentación técnica. Muchos desarrolladores y técnicos no están habituados a estructurar la información de manera formal, lo que genera inconsistencias, pérdida de tiempo y retrabajo. Esta situación ha evidenciado la necesidad de una solución que asista en este proceso, haciéndolo más accesible, rápido y uniforme, sin requerir conocimientos técnicos avanzados en documentación.
   
   ## 3.2 **Consideraciones de hardware y software**
   - Hardware:
        - *Servidor con mínimo 8 GB de RAM, 100 GB de almacenamiento SSD.*
        - *Acceso estable a Internet.*
        - *Equipos cliente con navegador actualizado y conexión de red funcional.*
        - *Alojado en una máquina virtual en Linux*
   - Software:
        - *Lenguaje backend: PHP*
        - *Frontend: HTML, CSS, JavaScript*
        - *Generación de PDFs: Librerías como TCPDF o DomPDF*
        - *Generación de diagramas: Integración con APIs como PlantUML o Mermaid*
        - *Almacenamiento: Servidor FTP + Base de datos MySQL*