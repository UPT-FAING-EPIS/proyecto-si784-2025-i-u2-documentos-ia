// Funcionalidad de drag and drop
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const uploadedFiles = document.getElementById('uploadedFiles');
const filesList = document.getElementById('filesList');
const generateBtn = document.getElementById('generateBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const resultados = document.getElementById('resultados');

// Variables para almacenar archivos y proyecto
let filesArray = [];
let currentProject = null;

// Eventos de drag and drop
uploadZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadZone.classList.add('dragover');
});

uploadZone.addEventListener('dragleave', () => {
    uploadZone.classList.remove('dragover');
});

uploadZone.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadZone.classList.remove('dragover');
    const files = e.dataTransfer.files;
    handleFiles(files);
});

fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

function handleFiles(files) {
    if (files.length > 0) {
        filesArray = Array.from(files);
        filesList.innerHTML = '';
        filesArray.forEach(file => {
            const fileDiv = document.createElement('div');
            fileDiv.className = 'file-info';
            fileDiv.innerHTML = `
                <div class="d-flex justify-content-between align-items-center">
                    <div>
                        <i class="fas fa-file-code me-2"></i>
                        <strong>${file.name}</strong>
                        <small class="text-muted ms-2">(${(file.size / 1024).toFixed(1)} KB)</small>
                    </div>
                    <i class="fas fa-check-circle text-success"></i>
                </div>
            `;
            filesList.appendChild(fileDiv);
        });
        uploadedFiles.style.display = 'block';
    }
}

// Crear proyecto y subir archivos
async function crearProyecto() {
    try {
        // Determinar el lenguaje principal basado en las extensiones de archivo
        const extensiones = filesArray.map(file => file.name.split('.').pop().toLowerCase());
        const lenguajesPrincipales = {
            js: 'JavaScript',
            py: 'Python',
            java: 'Java',
            cpp: 'C++',
            c: 'C',
            html: 'HTML',
            css: 'CSS',
            php: 'PHP',
            rb: 'Ruby',
            go: 'Go',
            ts: 'TypeScript',
            jsx: 'React',
            tsx: 'React TypeScript'
        };
        
        // Contar ocurrencias de cada extensión
        const conteoExtensiones = {};
        extensiones.forEach(ext => {
            conteoExtensiones[ext] = (conteoExtensiones[ext] || 0) + 1;
        });
        
        // Encontrar la extensión más común
        let extensionMasComun = '';
        let maxConteo = 0;
        
        for (const ext in conteoExtensiones) {
            if (conteoExtensiones[ext] > maxConteo) {
                maxConteo = conteoExtensiones[ext];
                extensionMasComun = ext;
            }
        }
        
        const lenguajePrincipal = lenguajesPrincipales[extensionMasComun] || 'Otro';
        
        // Crear proyecto en la base de datos
        const response = await fetch('/api/proyectos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre_proyecto: `Proyecto ${new Date().toLocaleDateString()}`,
                descripcion: `Proyecto con ${filesArray.length} archivos`,
                lenguaje_programacion: lenguajePrincipal
            })
        });
        
        if (!response.ok) {
            throw new Error('Error al crear el proyecto');
        }
        
        const data = await response.json();
        currentProject = data.proyecto;
        
        // Actualizar estado a 'subiendo'
        await fetch(`/api/proyectos/${currentProject.id}/estado`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                estado: 'subiendo'
            })
        });
        
        // Aquí iría la lógica para subir los archivos a un almacenamiento
        // Por ahora, simularemos que se han subido correctamente
        
        // Actualizar estado a 'procesando'
        await fetch(`/api/proyectos/${currentProject.id}/estado`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                estado: 'procesando'
            })
        });
        
        return currentProject;
    } catch (error) {
        console.error('Error al crear proyecto:', error);
        throw error;
    }
}

// Generar documentación
generateBtn.addEventListener('click', async () => {
    if (filesArray.length === 0) {
        alert('Por favor, sube al menos un archivo');
        return;
    }
    
    uploadedFiles.style.display = 'none';
    loadingSpinner.style.display = 'block';
    
    try {
        // Crear proyecto y subir archivos
        const proyecto = await crearProyecto();
        
        // Simular procesamiento
        setTimeout(async () => {
            try {
                // Actualizar estado a 'completado'
                await fetch(`/api/proyectos/${proyecto.id}/estado`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        estado: 'completado'
                    })
                });
                
                loadingSpinner.style.display = 'none';
                resultados.style.display = 'block';
                
                // Scroll suave a resultados
                resultados.scrollIntoView({ behavior: 'smooth' });
                
                // Animar las secciones de resultados
                const resultSections = document.querySelectorAll('.result-section');
                resultSections.forEach((section, index) => {
                    setTimeout(() => {
                        section.style.opacity = '0';
                        section.style.transform = 'translateY(20px)';
                        section.style.transition = 'all 0.5s ease';
                        
                        setTimeout(() => {
                            section.style.opacity = '1';
                            section.style.transform = 'translateY(0)';
                        }, 100);
                    }, index * 200);
                });
            } catch (error) {
                console.error('Error al actualizar estado:', error);
                alert('Error al procesar el proyecto');
                loadingSpinner.style.display = 'none';
            }
        }, 3000);
    } catch (error) {
        console.error('Error:', error);
        alert('Error al crear el proyecto');
        loadingSpinner.style.display = 'none';
        uploadedFiles.style.display = 'block';
    }
});

// Smooth scrolling para navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Actualizar pasos del progreso
function updateProgressSteps(activeStep) {
    const steps = document.querySelectorAll('.progress-step');
    steps.forEach((step, index) => {
        if (index < activeStep) {
            step.classList.add('active');
        } else {
            step.classList.remove('active');
        }
    });
}

// Simular progreso cuando se suben archivos
fileInput.addEventListener('change', () => {
    updateProgressSteps(2);
});

generateBtn.addEventListener('click', () => {
    updateProgressSteps(3);
});

// Verificar si el usuario está autenticado
async function checkAuth() {
    try {
        const response = await fetch('/api/auth/user');
        
        if (!response.ok) {
            // Si no está autenticado, redirigir a la página de login
            window.location.href = '/login';
            return;
        }
        
        const data = await response.json();
        
        // Mostrar información del usuario en la UI si es necesario
        if (data.user) {
            // Puedes añadir código aquí para mostrar el nombre del usuario en la UI
            console.log('Usuario autenticado:', data.user);
        }
    } catch (error) {
        console.error('Error al verificar autenticación:', error);
        window.location.href = '/login';
    }
}

// Manejar cierre de sesión
function setupLogout() {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async () => {
            try {
                const response = await fetch('/api/auth/logout', {
                    method: 'POST'
                });
                
                if (response.ok) {
                    window.location.href = '/login';
                }
            } catch (error) {
                console.error('Error al cerrar sesión:', error);
            }
        });
    }
}

// Ejecutar al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    checkAuth();
    setupLogout();
});