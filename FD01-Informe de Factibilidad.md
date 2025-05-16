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


|CONTROL DE VERSIONES||||||
| :-: | :- | :- | :- | :- | :- |
|***Versión***|***Hecha por***|***Revisada por***|***Aprobada por***|***Fecha***|***Motivo***|
|1\.0|AHAO, CDAR, WESJ, BEAS|PCQ|-|24/04/2025|Versión 1.0|

## Índice General

## Índice General

1. [Descripción del Proyecto](#1-descripción-del-proyecto)  
   1.1 [Nombre del proyecto](#11-nombre-del-proyecto)  
   1.2 [Duración del proyecto](#12-duración-del-proyecto)  
   1.3 [Descripción](#13-descripción)  
   1.4 [Objetivos](#14-objetivos)  
    - 1.4.1 [Objetivo general](#141-objetivo-general)  
    - 1.4.2 [Objetivos Específicos](#142-objetivos-específicos)
2. [Riesgos](#2-riesgos)  
3. [Análisis de la Situación actual](#3-análisis-de-la-situación-actual)  
   3.1 [Planteamiento del problema](#31-planteamiento-del-problema)  
   3.2 [Consideraciones de hardware y software](#32-consideraciones-de-hardware-y-software)
4. [Estudio de Factibilidad](#4-estudio-de-factibilidad)  
   4.1 [Factibilidad Técnica](#41-factibilidad-técnica)  
   4.2 [Factibilidad Económica](#42-factibilidad-económica)  
      - 4.2.1 [Costos Generales](#421-costos-generales)  
      - 4.2.2 [Costos operativos durante el desarrollo](#422-costos-operativos-durante-el-desarrollo)  
      - 4.2.3 [Costos del ambiente](#423-costos-del-ambiente)  
      - 4.2.4 [Costos de personal](#424-costos-de-personal)  
      - 4.2.5 [Costos totales del desarrollo del sistema](#425-costos-totales-del-desarrollo-del-sistema)


# 1. <a name="_heading=h.qe1nit1yjric"></a>Descripción del Proyecto
   ## 1.1 <a name="_heading=h.tb0b5fbcx5ng"></a>**Nombre del proyecto**
   Generador de Documentación Impulsado por IA (GDI-IA)

   ## 1.2 <a name="_heading=h.mhingogb5ssd"></a>**Duración del proyecto**
   4 meses

   ## 1.3 <a name="_heading=h.mc38t4j1xhrp"></a>**Descripción**
   El proyecto será implementado en **DevStar Solutions**, una empresa tecnológica dedicada al desarrollo de software personalizado. Se ha detectado que los equipos invierten una cantidad significativa de tiempo en la creación de documentación técnica, lo que impacta directamente en la productividad general de los proyectos.
   
   El sistema GDI-IA tiene como objetivo automatizar la generación de documentación de software mediante el uso de inteligencia artificial, ofreciendo una plataforma accesible para todos los roles dentro del área informática. Los usuarios podrán describir su proyecto mediante formularios y seleccionar plantillas específicas según el tipo de documento requerido. La IA procesará esta información para generar documentación estructurada y profesional, incluyendo imágenes UML, sin necesidad de conocimientos avanzados.
   
   Este proyecto busca no sólo optimizar los tiempos de documentación, sino también estandarizar los entregables técnicos, facilitar el entendimiento entre equipos y mejorar la calidad general de los proyectos desarrollados.

   ## 1.4 <a name="_heading=h.wf87g5sor7w9"></a>**Objetivos**

   ### 1.4.1 <a name="_heading=h.nm6ncal3q0o"></a>**Objetivo general**
   - Desarrollar una plataforma web inteligente que permita a los usuarios generar documentación técnica de software de manera automatizada, mediante el uso de inteligencia artificial y plantillas personalizadas.

   ### 1.4.2 <a name="_heading=h.1bo0e3l303bp"></a>**Objetivos Específicos**
   - Diseñar formularios interactivos que permitan a los usuarios describir sus proyectos fácilmente.
   - Incorporar plantillas prediseñadas para distintos tipos de documentación (arquitectura, diseño, despliegue, API, etc.).
   - Integrar modelos de IA que comprendan el contexto del proyecto y generen contenido coherente y útil.
   - Conectar el sistema con APIs para la generación de diagramas UML.
   - Almacenar la documentación generada en formato PDF y permitir su descarga desde un servidor FTP.

   # 2. <a name="_heading=h.yuoabkv56yym"></a>Riesgos
   - Posible imprecisión inicial en los resultados de la IA al interpretar descripciones poco claras.
   - Sobrecarga en el servidor de almacenamiento FTP si la demanda crece considerablemente.
   - Dificultad de adaptación por parte de usuarios que prefieren documentación manual.
   - Dependencia de terceros (APIs) para la generación de diagramas.
   - Falta de internet en el usuario durante la generación del documento podría afectar la funcionalidad.

   # 3. <a name="_heading=h.ol788gbxj68s"></a>Análisis de la Situación actual
   ## 3.1 <a name="_heading=h.579qju1w3pxh"></a>**Planteamiento del problema**
   En la actualidad, los equipos de desarrollo de DevStar Solutions enfrentan dificultades en la elaboración eficiente de documentación técnica. Muchos desarrolladores y técnicos no están habituados a estructurar la información de manera formal, lo que genera inconsistencias, pérdida de tiempo y retrabajo. Esta situación ha evidenciado la necesidad de una solución que asista en este proceso, haciéndolo más accesible, rápido y uniforme, sin requerir conocimientos técnicos avanzados en documentación.
   
   ## 3.2 <a name="_heading=h.44cino8u7t2z"></a>**Consideraciones de hardware y software**
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

   # 4. <a name="_heading=h.nay0uioylif5"></a>Estudio de Factibilidad
   El estudio de factibilidad tiene como finalidad determinar la viabilidad de implementar el Sistema Generador de documentación impulsado por IA (GDI-IA). Para ello, se han evaluado aspectos técnicos, económicos, operativos, legales, sociales y ambientales, a fin de garantizar el éxito del proyecto.

   ### <a name="_heading=h.iawy8y945v3e"></a>**Actividades realizadas:**
   - *Análisis de tecnologías disponibles.*
   - *Diseño de flujos de interacción para usuarios sin experiencia avanzada.*
   - *Revisión de herramientas de IA generativa.*
   - *Validación con personal técnico de DevStar Solutions.*
   
   La evaluación determinó que la herramienta es viable, tanto técnica como económicamente, con un alto potencial de impacto positivo en la eficiencia interna.

   ## 4.1 <a name="_heading=h.90lp2p9cxjg0"></a>**Factibilidad Técnica:**
   El proyecto cuenta con el soporte de tecnologías maduras y ampliamente utilizadas. Las herramientas de IA, junto con las APIs de generación de diagramas y los motores de generación de texto como ChatGPT, permiten cubrir los requerimientos funcionales. Además, el personal de DevStar Solutions dispone de los conocimientos técnicos necesarios para el desarrollo y despliegue del sistema en su infraestructura.

   ## 4.2 <a name="_heading=h.1goal0xyqxe"></a>**Factibilidad Económica**
   En este apartado, analizo la viabilidad económica del proyecto GDI-IA (Generador de Documentación impulsado por IA), considerando los costos que representa su desarrollo e implementación frente a los beneficios que aportará a la empresa DevStar Solutions. Esta evaluación incluye recursos disponibles, posibles inversiones necesarias y una proyección financiera clara de la inversión total.

   ### 4.2.1 <a name="_heading=h.4onx8sgxqghk"></a>**Costos Generales**
   -----------------------------------------------------------
   |Concepto|Duración|Costo Mensual|Costo Total|
   | :-: | :-: | :-: | :-: |
   |Licencia de ofimática básica|3 meses|S/. 23.36|S/.70|
   |Licencia de software de diagramado|3 meses|s/. 20|S/.60|
   |**Total**|||S/. 130|

   ### 4.2.2 <a name="_heading=h.xrm0gsevh86f"></a>**Costos operativos durante el desarrollo**
   -----------------------------------------------------------
   |Concepto|Duración|Costo Mensual|Costo Total|
   | :-: | :-: | :-: | :-: |
   |Luz|3 meses|S/. 60|S/. 180|
   |Agua|3 meses|S/. 15|S/. 45|
   |Internet|3 meses|S/. 80|S/. 240|
   |Teléfono|3 meses|S/. 100|S/. 300|
   |**Total**|||S/.765|

   ### 4.2.3 <a name="_heading=h.rwml6ayopr76"></a>**Costos del ambiente**
   -----------------------------------------------------------
   |Concepto|Duración|Costo Mensual|Costo Total|
   | :-: | :-: | :-: | :-: |
   |Dominio y Hosting|3 meses|S/. 20|S/.60|
   |Servidor FTP|3 meses|s/. 25|S/.75|
   |**Total**|||S/. 135|

   ### 4.2.4 <a name="_heading=h.tcffs0pqqt5e"></a>**Costos de personal**
   -----------------------------------------------------------
   |Concepto|Duración|Costo Mensual|Costo Total|
   | :-: | :-: | :-: | :-: |
   |Project Manager|3 meses|S/. 30|S/.90|
   |Back End|3 meses|S/. 30|S/.90|
   |DevOps|3 meses|S/. 30|S/.90|
   |**Total**|||S/. 270|

   ### 4.2.5 <a name="_heading=h.upolkdf5b07j"></a>**Costos totales del desarrollo del sistema**
   ----------------------------------------------------------- 
   |<a name="_heading=h.8arg5c7sack6"></a>Concepto|Monto|
   | :-: | :-: |
   |Costos Generales|S/. 130|
   |Costos Operativos|S/. 765|
   |Costos del Ambiente|S/. 135|
   |Costos del Personal|S/. 270|
   |**Total General**|S/.1300|