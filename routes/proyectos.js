const express = require('express');
const router = express.Router();
const { proyectosService, documentosService } = require('../services/db');

// Middleware para verificar autenticación
const requireAuth = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.status(401).json({ error: 'No autenticado' });
  }
};

// Obtener todos los proyectos del usuario
router.get('/', requireAuth, async (req, res) => {
  try {
    const proyectos = await proyectosService.obtenerProyectosPorUsuario(req.session.user.id);
    res.status(200).json({ proyectos });
  } catch (error) {
    console.error('Error al obtener proyectos:', error.message);
    res.status(500).json({ error: 'Error al obtener proyectos' });
  }
});

// Crear un nuevo proyecto
router.post('/', requireAuth, async (req, res) => {
  try {
    const { nombre_proyecto, descripcion, lenguaje_programacion } = req.body;
    
    if (!nombre_proyecto) {
      return res.status(400).json({ error: 'El nombre del proyecto es requerido' });
    }
    
    const nuevoProyecto = {
      usuario_id: req.session.user.id,
      nombre_proyecto,
      descripcion,
      lenguaje_programacion,
      estado_procesamiento: 'pendiente'
    };
    
    const proyecto = await proyectosService.crearProyecto(nuevoProyecto);
    res.status(201).json({ proyecto });
  } catch (error) {
    console.error('Error al crear proyecto:', error.message);
    res.status(500).json({ error: 'Error al crear proyecto' });
  }
});

// Obtener un proyecto específico
router.get('/:id', requireAuth, async (req, res) => {
  try {
    const proyecto = await proyectosService.obtenerProyectoPorId(req.params.id);
    
    // Verificar que el proyecto pertenezca al usuario
    if (proyecto.usuario_id !== req.session.user.id) {
      return res.status(403).json({ error: 'No tienes permiso para acceder a este proyecto' });
    }
    
    res.status(200).json({ proyecto });
  } catch (error) {
    console.error('Error al obtener proyecto:', error.message);
    res.status(500).json({ error: 'Error al obtener proyecto' });
  }
});

// Actualizar estado de procesamiento de un proyecto
router.patch('/:id/estado', requireAuth, async (req, res) => {
  try {
    const { estado } = req.body;
    
    if (!estado) {
      return res.status(400).json({ error: 'El estado es requerido' });
    }
    
    // Verificar que el proyecto pertenezca al usuario
    const proyecto = await proyectosService.obtenerProyectoPorId(req.params.id);
    if (proyecto.usuario_id !== req.session.user.id) {
      return res.status(403).json({ error: 'No tienes permiso para modificar este proyecto' });
    }
    
    await proyectosService.actualizarEstadoProcesamiento(req.params.id, estado);
    res.status(200).json({ message: 'Estado actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar estado:', error.message);
    res.status(500).json({ error: 'Error al actualizar estado' });
  }
});

// Obtener documentos de un proyecto
router.get('/:id/documentos', requireAuth, async (req, res) => {
  try {
    // Verificar que el proyecto pertenezca al usuario
    const proyecto = await proyectosService.obtenerProyectoPorId(req.params.id);
    if (proyecto.usuario_id !== req.session.user.id) {
      return res.status(403).json({ error: 'No tienes permiso para acceder a este proyecto' });
    }
    
    const documentos = await documentosService.obtenerDocumentosPorProyecto(req.params.id);
    res.status(200).json({ documentos });
  } catch (error) {
    console.error('Error al obtener documentos:', error.message);
    res.status(500).json({ error: 'Error al obtener documentos' });
  }
});

module.exports = router;