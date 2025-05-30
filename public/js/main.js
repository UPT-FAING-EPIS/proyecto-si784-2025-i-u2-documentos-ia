// Funcionalidad de drag and drop
const uploadZone = document.getElementById('uploadZone');
const fileInput = document.getElementById('fileInput');
const uploadedFiles = document.getElementById('uploadedFiles');
const filesList = document.getElementById('filesList');
const generateBtn = document.getElementById('generateBtn');
const loadingSpinner = document.getElementById('loadingSpinner');
const resultados = document.getElementById('resultados');

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

// Eliminar este evento
// uploadZone.addEventListener('click', () => {
//     fileInput.click();
// });

fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

function handleFiles(files) {
    if (files.length > 0) {
        filesList.innerHTML = '';
        Array.from(files).forEach(file => {
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

generateBtn.addEventListener('click', () => {
    uploadedFiles.style.display = 'none';
    loadingSpinner.style.display = 'block';
    
    // Simular procesamiento
    setTimeout(() => {
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
    }, 3000);
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