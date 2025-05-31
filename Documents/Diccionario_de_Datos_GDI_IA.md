"Año de la recuperación y consolidación de la economía peruana"

UNIVERSIDAD PRIVADA DE TACNA

FACULTAD DE INGENIERÍA

Escuela Profesional de Ingeniería de Sistemas


“Generador de documentación impulsado por IA (GDI-IA)”

Curso: Calidad y Pruebas de Software
Docente: Mag. Patrick Cuadros Quiroga

Integrantes:

Akhtar Oviedo, Ahmed Hasan 		(2022074261)
Ayala Ramos, Carlos Daniel 		(2022074266)
Salas Jiménez, Walter Emmanuel 	(2022073896)
Ancco Suaña, Bruno Enrique 		(2023077472)

Tacna – Perú
2025












Generador de documentación impulsado por IA (GDI-IA)
Diccionario de Datos

Versión 1.0






























# ÍNDICE GENERAL


























Diccionario de Datos
# 1. Modelo Entidad / Relación
## 1.1 Diseño lógico
## 1.2 Diseño Físico

# 2. Diccionario de Datos
## 2.1 Tablas











## 2.2 Lenguaje de Definición de Datos (DDL)
Creación de Base de Datos
CREATE DATABASE docugen;
GO
## Creación de Tablas
USE docugen;
-- Tabla usuarios
CREATE TABLE usuarios (
id SERIAL PRIMARY KEY,
correo_electronico VARCHAR(255) NOT NULL,
contrasena VARCHAR(255) NOT NULL,
nombre VARCHAR(100),
apellidos VARCHAR(100),
nombre_completo VARCHAR(200) GENERATED ALWAYS AS (concat_ws(' ', nombre, apellidos)) STORED,
url_foto_perfil VARCHAR(2048),
numero_telefono VARCHAR(50),
esta_activo BOOLEAN DEFAULT TRUE,
correo_verificado_en TIMESTAMP NULL,
ultimo_inicio_sesion_en TIMESTAMP NULL,
zona_horaria VARCHAR(100) DEFAULT 'UTC',
idioma VARCHAR(10) DEFAULT 'es',
creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabla proyectos_codigo
CREATE TABLE proyectos_codigo (
id SERIAL PRIMARY KEY,
usuario_id INT NOT NULL,
nombre_proyecto VARCHAR(255) NOT NULL,
descripcion TEXT,
lenguaje_programacion VARCHAR(50),
contenido_codigo TEXT,
ruta_almacenamiento_codigo VARCHAR(2048),
estado_procesamiento VARCHAR(20) DEFAULT 'pendiente' CHECK (
estado_procesamiento IN (
'pendiente', 'subiendo', 'procesando',
'completado', 'error_subida', 'error_analisis'
)
),
ultimo_analisis_en TIMESTAMP NULL,
creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fk_proyecto_usuario FOREIGN KEY (usuario_id)
REFERENCES usuarios(id) ON DELETE CASCADE
);


-- Tabla documentos_generados
CREATE TABLE documentos_generados (
id SERIAL PRIMARY KEY,
proyecto_codigo_id INT NOT NULL,
usuario_id INT NOT NULL,
tipo_documento VARCHAR(100) NOT NULL,
formato_salida VARCHAR(20) DEFAULT 'texto_plano' CHECK (
formato_salida IN ('texto_plano', 'markdown', 'pdf_url', 'json')
),
contenido_documento TEXT,
url_documento VARCHAR(2048),
version VARCHAR(20) DEFAULT '1.0',
parametros_generacion_json TEXT,
generado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
actualizado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
CONSTRAINT fk_documento_proyecto FOREIGN KEY (proyecto_codigo_id)
REFERENCES proyectos_codigo(id) ON DELETE CASCADE,
CONSTRAINT fk_documento_usuario FOREIGN KEY (usuario_id)
REFERENCES usuarios(id) ON DELETE CASCADE
);
## 2.4 Lenguaje de Manipulación de Datos (DML)
SELECT * FROM usuarios
SELECT * FROM proyectos_codigo
SELECT * FROM documentos_generados
## 2.5 Índices
CREATE INDEX idx_usuario_correo ON usuarios (correo_electronico);
CREATE INDEX idx_proyecto_usuario ON proyectos_codigo (usuario_id);

