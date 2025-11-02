// ===================================
// Global State
// ===================================
let currentLang = 'en';
let currentTheme = 'light';

// ===================================
// Automation Configuration
// ===================================

// AUTOMATION URLS - Configured with actual trigger links
const AUTOMATION_URLS = {
    // Typeform-based automations
    'prompt-generator': 'https://g6jhbb0afjy.typeform.com/to/SrN9YgPT',
    'brandseo': 'https://g6jhbb0afjy.typeform.com/to/ntzMlRRJ',
    'extractstyle': 'https://g6jhbb0afjy.typeform.com/to/PmxNo7Wy',
    'blogger': 'https://g6jhbb0afjy.typeform.com/to/s5lO6t5j',
    
    // Fillout form
    'ai-focus-group': 'https://forms.fillout.com/t/41Avi3Vjtxus',
    
    // Google Drive folder
    'data-validation': 'https://drive.google.com/drive/folders/12sfBN4dYSlZJmNs1HmGrmssKZFLfPf4r?usp=sharing'
};

// AUTOMATION TYPES - All use redirect (open external forms)
const AUTOMATION_TYPES = {
    'prompt-generator': 'redirect',  // Redirect to Typeform
    'brandseo': 'redirect',          // Redirect to Typeform
    'ai-focus-group': 'redirect',    // Redirect to Fillout form
    'extractstyle': 'redirect',      // Redirect to Typeform
    'blogger': 'redirect',           // Redirect to Typeform
    'data-validation': 'redirect'    // Redirect to Google Drive folder
};

const FEEDBACK_EMAIL = 'gonzalo@menatech.cloud';
const NOTIFICATION_EMAIL = 'gonzalo@menatech.cloud';

// ===================================
// Translations
// ===================================
const translations = {
    en: {
        modalTitle: {
            'data-validation': 'Data Validation',
            'prompt-generator': 'Prompt Generator',
            'brandseo': 'BrandSEO',
            'ai-focus-group': 'AI Focus Group',
            'extractstyle': 'ExtractStyle',
            'blogger': 'Blogger'
        },
        formLabels: {
            email: 'Email Address',
            file: 'Upload File',
            platformName: 'Platform Name',
            useCase: 'Use Case Description',
            outputFormat: 'Desired Output Format',
            brandName: 'Brand/Company Name',
            websiteUrl: 'Website URL',
            industry: 'Industry/Sector',
            productDescription: 'Product/Service/Feature Description',
            targetSegment: 'Target Customer Segment',
            validationQuestions: 'Key Questions for Validation',
            textSamples: 'Text Samples',
            contentType: 'Content Type',
            blogTopic: 'Blog Topic/Keyword',
            targetAudience: 'Target Audience',
            desiredLength: 'Desired Length'
        },
        buttons: {
            submit: 'Submit',
            cancel: 'Cancel'
        },
        messages: {
            success: 'Your request has been submitted successfully! You will receive the results via email.',
            error: 'An error occurred. Please try again or contact us at gonzalo@menatech.cloud',
            processing: 'Processing your request...'
        }
    },
    es: {
        modalTitle: {
            'data-validation': 'Validación de Datos',
            'prompt-generator': 'Generador de Prompts',
            'brandseo': 'BrandSEO',
            'ai-focus-group': 'Grupo Focal IA',
            'extractstyle': 'ExtractStyle',
            'blogger': 'Blogger'
        },
        formLabels: {
            email: 'Correo Electrónico',
            file: 'Subir Archivo',
            platformName: 'Nombre de la Plataforma',
            useCase: 'Descripción del Caso de Uso',
            outputFormat: 'Formato de Salida Deseado',
            brandName: 'Nombre de Marca/Empresa',
            websiteUrl: 'URL del Sitio Web',
            industry: 'Industria/Sector',
            productDescription: 'Descripción del Producto/Servicio/Característica',
            targetSegment: 'Segmento de Cliente Objetivo',
            validationQuestions: 'Preguntas Clave para Validación',
            textSamples: 'Muestras de Texto',
            contentType: 'Tipo de Contenido',
            blogTopic: 'Tema/Palabra Clave del Blog',
            targetAudience: 'Audiencia Objetivo',
            desiredLength: 'Longitud Deseada'
        },
        buttons: {
            submit: 'Enviar',
            cancel: 'Cancelar'
        },
        messages: {
            success: '¡Tu solicitud ha sido enviada exitosamente! Recibirás los resultados por correo electrónico.',
            error: 'Ocurrió un error. Por favor intenta de nuevo o contáctanos en gonzalo@menatech.cloud',
            processing: 'Procesando tu solicitud...'
        }
    }
};

// ===================================
// Initialization
// ===================================
document.addEventListener('DOMContentLoaded', function() {
    initializeTheme();
    initializeLanguage();
    attachEventListeners();
    trackPageView();
});

// ===================================
// Theme Management
// ===================================
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    currentTheme = savedTheme;
    document.body.className = savedTheme === 'dark' ? 'dark-mode' : 'light-mode';
}

function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.body.className = currentTheme === 'dark' ? 'dark-mode' : 'light-mode';
    localStorage.setItem('theme', currentTheme);
    
    // Track theme change
    trackEvent('theme_change', { theme: currentTheme });
}

// ===================================
// Language Management
// ===================================
function initializeLanguage() {
    const savedLang = localStorage.getItem('language') || 'en';
    currentLang = savedLang;
    document.body.setAttribute('data-lang', currentLang);
    updateLanguageToggleButton();
    updatePageLanguage();
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'es' : 'en';
    document.body.setAttribute('data-lang', currentLang);
    localStorage.setItem('language', currentLang);
    updateLanguageToggleButton();
    updatePageLanguage();
    
    // Track language change
    trackEvent('language_change', { language: currentLang });
}

function updateLanguageToggleButton() {
    const langBtn = document.getElementById('langToggle');
    const langText = langBtn.querySelector('.lang-text');
    langText.textContent = currentLang === 'en' ? 'ES' : 'EN';
}

function updatePageLanguage() {
    const elements = document.querySelectorAll('[data-en]');
    elements.forEach(el => {
        const text = currentLang === 'en' ? el.getAttribute('data-en') : el.getAttribute('data-es');
        if (text) {
            el.textContent = text;
        }
    });
}

// ===================================
// Event Listeners
// ===================================
function attachEventListeners() {
    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Language toggle
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    
    // Share button
    document.getElementById('shareBtn').addEventListener('click', shareWebsite);
    
    // Feedback form
    document.getElementById('feedbackForm').addEventListener('submit', handleFeedbackSubmit);
    
    // Modal close
    const modal = document.getElementById('automationModal');
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal on outside click
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
}

// ===================================
// Automation Modal Functions
// ===================================
function openAutomation(automationType) {
    const integrationType = AUTOMATION_TYPES[automationType];
    const url = AUTOMATION_URLS[automationType];
    
    // Check if URL is configured
    if (!url || url.includes('YOUR_') || url.includes('_HERE')) {
        alert(currentLang === 'en' 
            ? 'This automation is not yet configured. Please contact gonzalo@menatech.cloud' 
            : 'Esta automatización aún no está configurada. Por favor contacta a gonzalo@menatech.cloud');
        return;
    }
    
    // Handle redirect-type automations (Fillout, Chat UI, Google Drive)
    if (integrationType === 'redirect') {
        window.open(url, '_blank');
        trackEvent('automation_redirect', { 
            automation: automationType,
            url: url 
        });
        return;
    }
    
    // Handle webhook-type automations (show form modal)
    const modal = document.getElementById('automationModal');
    const modalBody = document.getElementById('modalBody');
    
    // Get modal title
    const title = translations[currentLang].modalTitle[automationType];
    
    // Generate form based on automation type
    let formHTML = `<h2 style="margin-bottom: 1.5rem; color: var(--text-primary);">${title}</h2>`;
    
    switch(automationType) {
        case 'prompt-generator':
            formHTML += generatePromptGeneratorForm(automationType);
            break;
        case 'brandseo':
            formHTML += generateBrandSEOForm(automationType);
            break;
        default:
            formHTML += `<p>Form not configured for ${automationType}</p>`;
    }
    
    modalBody.innerHTML = formHTML;
    modal.style.display = 'block';
    
    // Attach form submit handler
    const form = modalBody.querySelector('form');
    if (form) {
        form.addEventListener('submit', (e) => handleAutomationSubmit(e, automationType));
    }
    
    // Track modal open
    trackEvent('automation_modal_open', { automation: automationType });
}

function closeModal() {
    const modal = document.getElementById('automationModal');
    modal.style.display = 'none';
}

// ===================================
// Form Generators
// ===================================
function generateFileUploadForm(automationType, acceptedTypes) {
    const t = translations[currentLang];
    const accept = acceptedTypes.map(type => '.' + type).join(',');
    
    return `
        <form id="automationForm" class="feedback-form">
            <div class="form-group">
                <label for="userEmail">${t.formLabels.email}</label>
                <input type="email" id="userEmail" name="email" required>
            </div>
            <div class="form-group">
                <label for="fileUpload">${t.formLabels.file}</label>
                <input type="file" id="fileUpload" name="file" accept="${accept}" required>
            </div>
            ${automationType === 'extractstyle' ? `
            <div class="form-group">
                <label for="contentType">${t.formLabels.contentType}</label>
                <input type="text" id="contentType" name="contentType" placeholder="e.g., emails, blog posts, social media" required>
            </div>
            ` : ''}
            <div style="display: flex; gap: 1rem;">
                <button type="submit" class="submit-btn">${t.buttons.submit}</button>
                <button type="button" class="submit-btn" onclick="closeModal()" style="background: var(--bg-secondary); color: var(--text-primary);">${t.buttons.cancel}</button>
            </div>
        </form>
    `;
}

function generatePromptGeneratorForm(automationType) {
    const t = translations[currentLang];
    
    return `
        <form id="automationForm" class="feedback-form">
            <div class="form-group">
                <label for="userEmail">${t.formLabels.email}</label>
                <input type="email" id="userEmail" name="email" required>
            </div>
            <div class="form-group">
                <label for="platformName">${t.formLabels.platformName}</label>
                <input type="text" id="platformName" name="platformName" placeholder="e.g., ChatGPT, Claude, Gemini" required>
            </div>
            <div class="form-group">
                <label for="useCase">${t.formLabels.useCase}</label>
                <textarea id="useCase" name="useCase" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="outputFormat">${t.formLabels.outputFormat}</label>
                <input type="text" id="outputFormat" name="outputFormat" placeholder="e.g., JSON, Markdown, Plain text" required>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button type="submit" class="submit-btn">${t.buttons.submit}</button>
                <button type="button" class="submit-btn" onclick="closeModal()" style="background: var(--bg-secondary); color: var(--text-primary);">${t.buttons.cancel}</button>
            </div>
        </form>
    `;
}

function generateBrandSEOForm(automationType) {
    const t = translations[currentLang];
    
    return `
        <form id="automationForm" class="feedback-form">
            <div class="form-group">
                <label for="userEmail">${t.formLabels.email}</label>
                <input type="email" id="userEmail" name="email" required>
            </div>
            <div class="form-group">
                <label for="brandName">${t.formLabels.brandName}</label>
                <input type="text" id="brandName" name="brandName" required>
            </div>
            <div class="form-group">
                <label for="websiteUrl">${t.formLabels.websiteUrl}</label>
                <input type="url" id="websiteUrl" name="websiteUrl" placeholder="https://" required>
            </div>
            <div class="form-group">
                <label for="industry">${t.formLabels.industry}</label>
                <input type="text" id="industry" name="industry" required>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button type="submit" class="submit-btn">${t.buttons.submit}</button>
                <button type="button" class="submit-btn" onclick="closeModal()" style="background: var(--bg-secondary); color: var(--text-primary);">${t.buttons.cancel}</button>
            </div>
        </form>
    `;
}

function generateFocusGroupForm(automationType) {
    const t = translations[currentLang];
    
    return `
        <form id="automationForm" class="feedback-form">
            <div class="form-group">
                <label for="userEmail">${t.formLabels.email}</label>
                <input type="email" id="userEmail" name="email" required>
            </div>
            <div class="form-group">
                <label for="productDescription">${t.formLabels.productDescription}</label>
                <textarea id="productDescription" name="productDescription" rows="4" required></textarea>
            </div>
            <div class="form-group">
                <label for="targetSegment">${t.formLabels.targetSegment}</label>
                <input type="text" id="targetSegment" name="targetSegment" required>
            </div>
            <div class="form-group">
                <label for="validationQuestions">${t.formLabels.validationQuestions}</label>
                <textarea id="validationQuestions" name="validationQuestions" rows="3" required></textarea>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button type="submit" class="submit-btn">${t.buttons.submit}</button>
                <button type="button" class="submit-btn" onclick="closeModal()" style="background: var(--bg-secondary); color: var(--text-primary);">${t.buttons.cancel}</button>
            </div>
        </form>
    `;
}

function generateBloggerForm(automationType) {
    const t = translations[currentLang];
    
    return `
        <form id="automationForm" class="feedback-form">
            <div class="form-group">
                <label for="userEmail">${t.formLabels.email}</label>
                <input type="email" id="userEmail" name="email" required>
            </div>
            <div class="form-group">
                <label for="blogTopic">${t.formLabels.blogTopic}</label>
                <input type="text" id="blogTopic" name="blogTopic" required>
            </div>
            <div class="form-group">
                <label for="targetAudience">${t.formLabels.targetAudience}</label>
                <input type="text" id="targetAudience" name="targetAudience" required>
            </div>
            <div class="form-group">
                <label for="desiredLength">${t.formLabels.desiredLength}</label>
                <input type="text" id="desiredLength" name="desiredLength" placeholder="e.g., 1000 words, 5 minutes read" required>
            </div>
            <div style="display: flex; gap: 1rem;">
                <button type="submit" class="submit-btn">${t.buttons.submit}</button>
                <button type="button" class="submit-btn" onclick="closeModal()" style="background: var(--bg-secondary); color: var(--text-primary);">${t.buttons.cancel}</button>
            </div>
        </form>
    `;
}

// ===================================
// Form Submission Handlers
// ===================================
async function handleAutomationSubmit(event, automationType) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = translations[currentLang].messages.processing;
    submitBtn.disabled = true;
    
    try {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Send to Activepieces webhook
        const webhookUrl = AUTOMATION_URLS[automationType];
        
        if (!webhookUrl || webhookUrl.includes('YOUR_') || webhookUrl.includes('_HERE')) {
            // For prototype, just show success message
            console.log('Automation triggered:', automationType, data);
            showMessage('success', translations[currentLang].messages.success);
            
            // Send notification email (prototype simulation)
            await sendNotificationEmail(automationType, data);
            
            closeModal();
        } else {
            // Send to actual webhook
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (response.ok) {
                showMessage('success', translations[currentLang].messages.success);
                await sendNotificationEmail(automationType, data);
                closeModal();
            } else {
                throw new Error('Webhook request failed');
            }
        }
        
        // Track automation trigger
        trackEvent('automation_triggered', { 
            automation: automationType,
            email: data.email 
        });
        
    } catch (error) {
        console.error('Error submitting automation:', error);
        showMessage('error', translations[currentLang].messages.error);
    } finally {
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

async function handleFeedbackSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // Show loading state
    submitBtn.classList.add('loading');
    submitBtn.innerHTML = translations[currentLang].messages.processing;
    submitBtn.disabled = true;
    
    try {
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };
        
        // Send feedback via Netlify function with Resend
        const response = await fetch('/.netlify/functions/send-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        const result = await response.json();
        
        if (response.ok && result.success) {
            showMessage('success', translations[currentLang].messages.success);
            form.reset();
            
            // Track successful feedback submission
            trackEvent('feedback_submitted', { 
                email: data.email,
                emailId: result.emailId 
            });
        } else {
            throw new Error(result.error || 'Feedback submission failed');
        }
        
    } catch (error) {
        console.error('Error submitting feedback:', error);
        showMessage('error', error.message || translations[currentLang].messages.error);
    } finally {
        submitBtn.classList.remove('loading');
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    }
}

// ===================================
// Email Notification (Prototype)
// ===================================
async function sendNotificationEmail(automationType, data) {
    // For prototype, log the notification
    console.log('Notification email would be sent to:', NOTIFICATION_EMAIL);
    console.log('Automation:', automationType);
    console.log('Data:', data);
    
    // In production, this would integrate with your email service
    // or be handled by the Activepieces workflow
}

// ===================================
// UI Helper Functions
// ===================================
function showMessage(type, message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.textContent = message;
    
    // Insert at the top of the page
    const container = document.querySelector('.container');
    container.insertBefore(messageDiv, container.firstChild);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// ===================================
// Share Function
// ===================================
function shareWebsite() {
    const shareData = {
        title: 'Menatech Apps',
        text: 'Check out these powerful AI-driven automation workflows!',
        url: window.location.href
    };
    
    if (navigator.share) {
        navigator.share(shareData)
            .then(() => trackEvent('share_success', { method: 'native' }))
            .catch((error) => console.log('Error sharing:', error));
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                alert(currentLang === 'en' ? 'Link copied to clipboard!' : '¡Enlace copiado al portapapeles!');
                trackEvent('share_success', { method: 'clipboard' });
            })
            .catch((error) => console.log('Error copying:', error));
    }
}

// ===================================
// Google Analytics Functions
// ===================================
function trackPageView() {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: document.title,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
}

function trackEvent(eventName, eventParams) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventParams);
    }
    console.log('Event tracked:', eventName, eventParams);
}

// ===================================
// Make functions globally accessible
// ===================================
window.openAutomation = openAutomation;
window.closeModal = closeModal;

