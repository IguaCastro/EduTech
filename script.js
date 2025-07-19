// Contenido educativo para cada módulo
const moduleContent = {
    ciberseguridad: {
        title: "🔒 Ciberseguridad",
        content: `
            <h2>Fundamentos de Ciberseguridad</h2>
            <p>La ciberseguridad es la práctica de proteger sistemas, redes y programas de ataques digitales. Es fundamental en el mundo tecnológico actual.</p>
            
            <h3>Conceptos Clave:</h3>
            <ul>
                <li><strong>Malware:</strong> Software malicioso diseñado para dañar o infiltrarse en sistemas</li>
                <li><strong>Firewall:</strong> Sistema de seguridad que controla el tráfico de red</li>
                <li><strong>Criptografía:</strong> Técnica para proteger información mediante códigos</li>
                <li><strong>Phishing:</strong> Técnica de ingeniería social para robar información</li>
                <li><strong>Autenticación:</strong> Proceso de verificar la identidad de un usuario</li>
                <li><strong>VPN:</strong> Red privada virtual para conexiones seguras</li>
            </ul>
            
            <h3>Tipos de Amenazas:</h3>
            <ul>
                <li>Virus y gusanos informáticos</li>
                <li>Ataques de denegación de servicio (DDoS)</li>
                <li>Ransomware y secuestro de datos</li>
                <li>Ataques de fuerza bruta</li>
                <li>Ingeniería social</li>
            </ul>
            
            <div class="external-links">
                <h4>🌐 Recursos Externos Recomendados:</h4>
                <a href="https://www.owasp.org/www-project-top-ten/" target="_blank">OWASP Top 10</a>
                <a href="https://www.nist.gov/cyberframework" target="_blank">NIST Cybersecurity Framework</a>
                <a href="https://www.youtube.com/watch?v=inWWhr5tnEA" target="_blank">Curso Ciberseguridad YouTube</a>
                <a href="https://cybrary.it/" target="_blank">Cybrary - Cursos Gratuitos</a>
                <a href="https://www.sans.org/white-papers/" target="_blank">SANS White Papers</a>
            </div>
        `
    },
    
    sistemas: {
        title: "💻 Sistemas Operativos",
        content: `
            <h2>Sistemas Operativos Modernos</h2>
            <p>Un sistema operativo es el software que gestiona el hardware y proporciona servicios a las aplicaciones.</p>
            
            <h3>Principales Sistemas Operativos:</h3>
            <ul>
                <li><strong>Windows:</strong> Sistema más usado en escritorio, desarrollado por Microsoft</li>
                <li><strong>Linux:</strong> Sistema de código abierto, muy usado en servidores</li>
                <li><strong>macOS:</strong> Sistema de Apple, conocido por su interfaz intuitiva</li>
                <li><strong>Android:</strong> Sistema móvil basado en Linux</li>
                <li><strong>iOS:</strong> Sistema móvil de Apple</li>
            </ul>
            
            <h3>Conceptos Fundamentales:</h3>
            <ul>
                <li><strong>Procesos:</strong> Programas en ejecución en el sistema</li>
                <li><strong>Memoria:</strong> Gestión de RAM y memoria virtual</li>
                <li><strong>Sistema de Archivos:</strong> Organización y almacenamiento de datos</li>
                <li><strong>Drivers:</strong> Software que permite comunicación con hardware</li>
                <li><strong>Kernel:</strong> Núcleo del sistema operativo</li>
                <li><strong>Shell:</strong> Interfaz de línea de comandos</li>
            </ul>
            
            <h3>Administración del Sistema:</h3>
            <ul>
                <li>Gestión de usuarios y permisos</li>
                <li>Monitoreo de rendimiento</li>
                <li>Instalación y actualización de software</li>
                <li>Configuración de red</li>
                <li>Backup y recuperación</li>
            </ul>
            
            <div class="external-links">
                <h4>🌐 Recursos Externos Recomendados:</h4>
                <a href="https://docs.microsoft.com/en-us/windows-server/" target="_blank">Documentación Windows Server</a>
                <a href="https://www.linux.org/pages/download/" target="_blank">Linux.org</a>
                <a href="https://ubuntu.com/tutorials" target="_blank">Tutoriales Ubuntu</a>
                <a href="https://www.youtube.com/watch?v=ROjZy1WbCIA" target="_blank">Curso Linux YouTube</a>
                <a href="https://developer.apple.com/macos/" target="_blank">Documentación macOS</a>
            </div>
        `
    },
    
    redes: {
        title: "🌐 Redes de Computadoras",
        content: `
            <h2>Fundamentos de Redes</h2>
            <p>Las redes de computadoras permiten la comunicación y el intercambio de datos entre dispositivos conectados.</p>
            
            <h3>Protocolos de Internet:</h3>
            <ul>
                <li><strong>IPv4:</strong> Protocolo de Internet versión 4 (32 bits)</li>
                <li><strong>IPv6:</strong> Protocolo de Internet versión 6 (128 bits)</li>
                <li><strong>TCP:</strong> Protocolo de Control de Transmisión</li>
                <li><strong>UDP:</strong> Protocolo de Datagramas de Usuario</li>
                <li><strong>HTTP/HTTPS:</strong> Protocolo de Transferencia de Hipertexto</li>
                <li><strong>DNS:</strong> Sistema de Nombres de Dominio</li>
            </ul>
            
            <h3>Modelo OSI (7 Capas):</h3>
            <ul>
                <li><strong>Física:</strong> Transmisión de bits por medios físicos</li>
                <li><strong>Enlace de Datos:</strong> Control de errores y flujo</li>
                <li><strong>Red:</strong> Enrutamiento de paquetes (IP)</li>
                <li><strong>Transporte:</strong> Control de flujo extremo a extremo (TCP/UDP)</li>
                <li><strong>Sesión:</strong> Establecimiento y control de sesiones</li>
                <li><strong>Presentación:</strong> Cifrado y compresión de datos</li>
                <li><strong>Aplicación:</strong> Interfaz con aplicaciones de usuario</li>
            </ul>
            
            <h3>Equipos de Red:</h3>
            <ul>
                <li><strong>Router:</strong> Enruta paquetes entre redes diferentes</li>
                <li><strong>Switch:</strong> Conecta dispositivos en la misma red</li>
                <li><strong>Hub:</strong> Dispositivo de conexión básico (obsoleto)</li>
                <li><strong>Access Point:</strong> Punto de acceso inalámbrico</li>
                <li><strong>Firewall:</strong> Dispositivo de seguridad de red</li>
            </ul>
            
            <div class="external-links">
                <h4>🌐 Recursos Externos Recomendados:</h4>
                <a href="https://www.cisco.com/c/en/us/support/docs/ip/routing-information-protocol-rip/13769-5.html" target="_blank">Cisco Networking</a>
                <a href="https://tools.ietf.org/rfc/" target="_blank">RFC - Estándares Internet</a>
                <a href="https://www.netacad.com/" target="_blank">Cisco Networking Academy</a>
                <a href="https://www.youtube.com/watch?v=qiQR5rTSshw" target="_blank">Curso Redes YouTube</a>
                <a href="https://www.wireshark.org/" target="_blank">Wireshark - Análisis de Red</a>
            </div>
        `
    },
    
    programacion: {
        title: "📝 Lenguajes de Programación",
        content: `
            <h2>Lenguajes de Programación Esenciales</h2>
            <p>Los lenguajes de programación son herramientas fundamentales para crear software, aplicaciones web y sistemas.</p>
            
            <h3>HTML (HyperText Markup Language):</h3>
            <ul>
                <li>Lenguaje de marcado para crear páginas web</li>
                <li>Define la estructura y contenido de sitios web</li>
                <li>Elementos: etiquetas, atributos, contenido</li>
                <li>Semántica: header, nav, main, section, footer</li>
                <li>Formularios y elementos interactivos</li>
            </ul>
            
            <h3>CSS (Cascading Style Sheets):</h3>
            <ul>
                <li>Lenguaje para diseñar y dar estilo a páginas web</li>
                <li>Selectores, propiedades y valores</li>
                <li>Flexbox y CSS Grid para layouts</li>
                <li>Animaciones y transiciones</li>
                <li>Responsive design con media queries</li>
            </ul>
            
            <h3>JavaScript:</h3>
            <ul>
                <li>Lenguaje de programación para web interactiva</li>
                <li>Variables, funciones, objetos y arrays</li>
                <li>DOM manipulation y eventos</li>
                <li>Programación asíncrona (Promises, async/await)</li>
                <li>Frameworks: React, Vue, Angular</li>
            </ul>
            
            <h3>Python:</h3>
            <ul>
                <li>Lenguaje versátil para múltiples aplicaciones</li>
                <li>Sintaxis clara y legible</li>
                <li>Desarrollo web: Django, Flask</li>
                <li>Ciencia de datos: NumPy, Pandas, Matplotlib</li>
                <li>Inteligencia artificial: TensorFlow, PyTorch</li>
            </ul>
            
            <div class="external-links">
                <h4>🌐 Recursos Externos Recomendados:</h4>
                <a href="https://developer.mozilla.org/es/" target="_blank">MDN Web Docs</a>
                <a href="https://www.w3schools.com/" target="_blank">W3Schools</a>
                <a href="https://python.org/" target="_blank">Python.org</a>
                <a href="https://www.youtube.com/watch?v=hdI2bqOjy3c" target="_blank">Curso JavaScript YouTube</a>
                <a href="https://freecodecamp.org/" target="_blank">FreeCodeCamp</a>
                <a href="https://github.com/" target="_blank">GitHub - Repositorios</a>
            </div>
        `
    },
    
    servidores: {
        title: "⚙️ Administración de Servidores",
        content: `
            <h2>Administración de Servidores</h2>
            <p>La administración de servidores implica la configuración, mantenimiento y optimización de sistemas que proporcionan servicios a otros equipos.</p>
            
            <h3>Tipos de Servidores:</h3>
            <ul>
                <li><strong>Servidor Web:</strong> Apache, Nginx, IIS</li>
                <li><strong>Servidor de Base de Datos:</strong> MySQL, PostgreSQL, MongoDB</li>
                <li><strong>Servidor de Aplicaciones:</strong> Tomcat, Node.js, PHP-FPM</li>
                <li><strong>Servidor de Archivos:</strong> FTP, SFTP, NFS, SMB</li>
                <li><strong>Servidor de Correo:</strong> Postfix, Exchange, Zimbra</li>
                <li><strong>Servidor DNS:</strong> BIND, PowerDNS</li>
            </ul>
            
            <h3>Tareas de Administración:</h3>
            <ul>
                <li><strong>Instalación y Configuración:</strong> Setup inicial del servidor</li>
                <li><strong>Monitoreo:</strong> CPU, memoria, disco, red</li>
                <li><strong>Seguridad:</strong> Firewall, actualizaciones, hardening</li>
                <li><strong>Backup:</strong> Copias de seguridad automáticas</li>
                <li><strong>Logs:</strong> Análisis de registros del sistema</li>
                <li><strong>Performance:</strong> Optimización de rendimiento</li>
            </ul>
            
            <h3>Herramientas de Administración:</h3>
            <ul>
                <li><strong>SSH:</strong> Acceso remoto seguro</li>
                <li><strong>Cron:</strong> Programación de tareas automáticas</li>
                <li><strong>Systemd:</strong> Gestión de servicios en Linux</li>
                <li><strong>Docker:</strong> Contenedores para aplicaciones</li>
                <li><strong>Ansible:</strong> Automatización de configuraciones</li>
                <li><strong>Nagios/Zabbix:</strong> Monitoreo de infraestructura</li>
            </ul>
            
            <h3>Virtualización y Cloud:</h3>
            <ul>
                <li>VMware, VirtualBox, KVM</li>
                <li>AWS, Google Cloud, Microsoft Azure</li>
                <li>Kubernetes para orquestación</li>
                <li>Infrastructure as Code (Terraform)</li>
            </ul>
            
            <div class="external-links">
                <h4>🌐 Recursos Externos Recomendados:</h4>
                <a href="https://httpd.apache.org/docs/" target="_blank">Documentación Apache</a>
                <a href="https://nginx.org/en/docs/" target="_blank">Documentación Nginx</a>
                <a href="https://docs.docker.com/" target="_blank">Docker Documentation</a>
                <a href="https://www.youtube.com/watch?v=YFl2mCHdv24" target="_blank">Curso Administración Linux</a>
                <a href="https://aws.amazon.com/training/" target="_blank">AWS Training</a>
            </div>
        `
    },
    
    protocolos: {
        title: "🔗 Protocolos de Red",
        content: `
            <h2>Protocolos de Comunicación</h2>
            <p>Los protocolos de red definen las reglas y estándares para la comunicación entre dispositivos en una red.</p>
            
            <h3>Protocolos de Aplicación:</h3>
            <ul>
                <li><strong>HTTP:</strong> Protocolo de Transferencia de Hipertexto (puerto 80)</li>
                <li><strong>HTTPS:</strong> HTTP seguro con SSL/TLS (puerto 443)</li>
                <li><strong>FTP:</strong> Protocolo de Transferencia de Archivos (puerto 21)</li>
                <li><strong>SFTP:</strong> FTP seguro sobre SSH (puerto 22)</li>
                <li><strong>SMTP:</strong> Protocolo Simple de Transferencia de Correo (puerto 25)</li>
                <li><strong>POP3:</strong> Protocolo de Oficina de Correos v3 (puerto 110)</li>
                <li><strong>IMAP:</strong> Protocolo de Acceso a Mensajes de Internet (puerto 143)</li>
            </ul>
            
            <h3>Protocolos de Seguridad:</h3>
            <ul>
                <li><strong>SSH:</strong> Shell Seguro para acceso remoto (puerto 22)</li>
                <li><strong>SSL/TLS:</strong> Capa de conexión segura</li>
                <li><strong>IPSec:</strong> Seguridad del Protocolo de Internet</li>
                <li><strong>VPN:</strong> Red Privada Virtual</li>
                <li><strong>HTTPS:</strong> HTTP sobre SSL/TLS</li>
            </ul>
            
            <h3>Protocolos de Red:</h3>
            <ul>
                <li><strong>DHCP:</strong> Protocolo de Configuración Dinámica de Host</li>
                <li><strong>DNS:</strong> Sistema de Nombres de Dominio (puerto 53)</li>
                <li><strong>SNMP:</strong> Protocolo Simple de Gestión de Red</li>
                <li><strong>NTP:</strong> Protocolo de Tiempo de Red</li>
                <li><strong>ICMP:</strong> Protocolo de Mensajes de Control de Internet</li>
            </ul>
            
            <h3>Protocolos de Enrutamiento:</h3>
            <ul>
                <li><strong>RIP:</strong> Protocolo de Información de Enrutamiento</li>
                <li><strong>OSPF:</strong> Abrir Primero la Ruta Más Corta</li>
                <li><strong>BGP:</strong> Protocolo de Puerta de Enlace Fronterizo</li>
                <li><strong>EIGRP:</strong> Protocolo de Enrutamiento de Gateway Interior Mejorado</li>
            </ul>
            
            <div class="external-links">
                <h4>🌐 Recursos Externos Recomendados:</h4>
                <a href="https://tools.ietf.org/rfc/" target="_blank">RFC - Documentos Oficiales</a>
                <a href="https://www.iana.org/assignments/service-names-port-numbers/" target="_blank">IANA - Puertos Oficiales</a>
                <a href="https://www.wireshark.org/docs/" target="_blank">Wireshark Documentation</a>
                <a href="https://www.youtube.com/watch?v=e5DEVa9eSN0" target="_blank">Curso Protocolos YouTube</a>
                <a href="https://packetlife.net/" target="_blank">PacketLife - Cheat Sheets</a>
            </div>
        `
    }
};

// Respuestas del chatbot
const chatbotResponses = {
    // Saludos
    'hola': '¡Hola! 👋 Soy tu asistente virtual de EduTech. Puedo ayudarte con preguntas sobre ciberseguridad, sistemas operativos, redes, programación y más. ¿En qué tema te gustaría profundizar?',
    'buenos dias': '¡Buenos días! ☀️ ¿Listo para aprender algo nuevo hoy? Pregúntame sobre cualquier tema de informática.',
    'buenas tardes': '¡Buenas tardes! 🌅 ¿En qué puedo ayudarte con tus estudios de informática?',
    'buenas noches': '¡Buenas noches! 🌙 Aunque sea tarde, siempre es buen momento para aprender. ¿Qué te interesa saber?',
    
    // Ciberseguridad
    'ciberseguridad': 'La ciberseguridad protege sistemas digitales de amenazas. Incluye: firewall, antivirus, criptografía, autenticación y buenas prácticas. ¿Te interesa algún aspecto específico?',
    'malware': 'El malware es software malicioso que incluye virus, gusanos, trojanos, ransomware y spyware. Se previene con antivirus actualizado, firewall y navegación segura.',
    'firewall': 'Un firewall controla el tráfico de red según reglas de seguridad. Puede ser hardware o software, y actúa como barrera entre redes confiables y no confiables.',
    'phishing': 'El phishing es una técnica de ingeniería social para robar información personal. Se reconoce por emails sospechosos, URLs falsas y solicitudes urgentes de datos.',
    'ransomware': 'El ransomware cifra archivos y exige pago por la clave. Prevención: backups regulares, software actualizado y no abrir archivos sospechosos.',
    
    // Sistemas Operativos
    'sistemas operativos': 'Los SO gestionan hardware y software. Principales: Windows (escritorio), Linux (servidores), macOS (Apple), Android/iOS (móviles). ¿Cuál te interesa más?',
    'linux': 'Linux es un SO de código abierto, muy usado en servidores. Distribuciones populares: Ubuntu, CentOS, Debian. Ventajas: seguridad, estabilidad, personalización.',
    'windows': 'Windows es el SO más usado en escritorio. Versiones actuales: Windows 10/11. Ideal para gaming, oficina y aplicaciones comerciales.',
    'procesos': 'Los procesos son programas en ejecución. Tienen PID, estado (running, waiting, terminated), memoria asignada y prioridad. Se gestionan con el scheduler del SO.',
    
    // Redes
    'redes': 'Las redes conectan dispositivos para compartir recursos. Conceptos clave: IP, TCP/UDP, DNS, routing, switching. El modelo OSI tiene 7 capas. ¿Qué aspecto te interesa?',
    'ipv4': 'IPv4 usa direcciones de 32 bits (ej: 192.168.1.1). Clases: A, B, C. Problemas: agotamiento de direcciones. Soluciones: NAT, CIDR, migración a IPv6.',
    'ipv6': 'IPv6 usa direcciones de 128 bits para resolver el agotamiento de IPv4. Formato hexadecimal, autoconfiguración, mejor seguridad y QoS integrado.',
    'tcp': 'TCP es un protocolo confiable que garantiza entrega ordenada de datos. Usa three-way handshake, control de flujo y detección de errores.',
    'dns': 'DNS traduce nombres de dominio a direcciones IP. Jerarquía: root servers, TLD, authoritative servers. Tipos de registros: A, AAAA, MX, CNAME.',
    'router': 'Los routers conectan diferentes redes y determinan la mejor ruta para los paquetes. Usan tablas de enrutamiento y protocolos como OSPF, BGP.',
    
    // Programación
    'programacion': 'La programación crea software usando lenguajes como Python, JavaScript, Java, C++. Conceptos: variables, funciones, algoritmos, estructuras de datos. ¿Qué lenguaje te interesa?',
    'html': 'HTML estructura páginas web con etiquetas. Elementos semánticos: header, nav, main, section, footer. HTML5 añade canvas, video, audio y APIs.',
    'css': 'CSS da estilo a HTML. Selectores, propiedades, valores. Layouts: Flexbox, Grid. Responsive design con media queries. Preprocesadores: Sass, Less.',
    'javascript': 'JavaScript hace páginas web interactivas. ES6+ añade arrow functions, promises, async/await, modules. Frameworks: React, Vue, Angular.',
    'python': 'Python es versátil y fácil de aprender. Usos: web (Django, Flask), datos (Pandas, NumPy), IA (TensorFlow, PyTorch), automatización.',
    
    // Servidores
    'servidores': 'Los servidores proporcionan servicios a clientes. Tipos: web (Apache, Nginx), BD (MySQL, PostgreSQL), aplicaciones (Tomcat, Node.js). ¿Cuál te interesa?',
    'apache': 'Apache HTTP Server es muy popular para sitios web. Configuración con .htaccess, módulos, virtual hosts. Alternativa: Nginx (mejor rendimiento).',
    'nginx': 'Nginx es un servidor web de alto rendimiento. Excelente para sitios con mucho tráfico, proxy reverso, load balancing y servir contenido estático.',
    'docker': 'Docker usa contenedores para empaquetar aplicaciones con sus dependencias. Ventajas: portabilidad, escalabilidad, aislamiento, DevOps.',
    
    // Protocolos
    'protocolos': 'Los protocolos definen reglas de comunicación. Capas: aplicación (HTTP, FTP), transporte (TCP, UDP), red (IP), enlace (Ethernet). ¿Cuál te interesa?',
    'http': 'HTTP transfiere páginas web. Métodos: GET, POST, PUT, DELETE. Códigos de estado: 200 (OK), 404 (Not Found), 500 (Server Error). HTTPS añade seguridad.',
    'ftp': 'FTP transfiere archivos entre cliente y servidor. Puertos: 21 (control), 20 (datos). Modos: activo, pasivo. SFTP es la versión segura sobre SSH.',
    'ssh': 'SSH proporciona acceso remoto seguro. Puerto 22, autenticación por clave pública/privada, túneles seguros, transferencia de archivos (SCP, SFTP).',
    
    // Respuestas generales
    'ayuda': 'Puedo ayudarte con: 🔒 Ciberseguridad, 💻 Sistemas Operativos, 🌐 Redes, 📝 Programación, ⚙️ Servidores, 🔗 Protocolos. ¡Pregúntame lo que quieras!',
    'gracias': '¡De nada! 😊 Estoy aquí para ayudarte a aprender. Si tienes más preguntas sobre informática y redes, no dudes en preguntar.',
    'adios': '¡Hasta luego! 👋 Que tengas un excelente día estudiando. Recuerda que siempre estaré aquí para ayudarte con tus dudas.',
    
    // Respuesta por defecto
    'default': 'Interesante pregunta. Te recomiendo explorar los módulos de la plataforma para obtener información detallada. También puedes preguntarme sobre temas específicos como: ciberseguridad, redes, programación, sistemas operativos, servidores o protocolos. 🤔'
};

// Variables globales
let chatExpanded = true;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeChatbot();
    addScrollAnimation();
});

// Función para abrir modal de módulo
function openModule(moduleId) {
    const modal = document.getElementById('module-modal');
    const modalBody = document.getElementById('modal-body');
    
    if (moduleContent[moduleId]) {
        modalBody.innerHTML = `
            <div class="module-content">
                ${moduleContent[moduleId].content}
            </div>
        `;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevenir scroll del body
    }
}

// Función para cerrar modal
function closeModule() {
    const modal = document.getElementById('module-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('module-modal');
    if (event.target === modal) {
        closeModule();
    }
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModule();
    }
});

// Función para alternar chatbot
function toggleChat() {
    const chatContainer = document.getElementById('chat-container');
    const toggleBtn = document.getElementById('toggle-chat');
    
    chatExpanded = !chatExpanded;
    
    if (chatExpanded) {
        chatContainer.classList.remove('collapsed');
        toggleBtn.textContent = '−';
    } else {
        chatContainer.classList.add('collapsed');
        toggleBtn.textContent = '+';
    }
}

// Inicializar chatbot
function initializeChatbot() {
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatHistory = document.getElementById('chat-history');

    // Función para enviar mensaje
    const sendMessage = () => {
        const inputValue = chatInput.value.trim();
        
        if (inputValue === '') {
            showNotification('Por favor, escribe una pregunta antes de enviar.', 'warning');
            return;
        }

        // Añadir mensaje del usuario
        addMessageToChat(inputValue, 'usuario');
        
        // Limpiar input
        chatInput.value = '';

        // Simular "escribiendo..."
        const typingIndicator = addMessageToChat('Escribiendo...', 'bot');
        
        // Generar respuesta después de un delay
        setTimeout(() => {
            // Remover indicador de escritura
            typingIndicator.remove();
            
            // Generar y mostrar respuesta
            const response = generateChatbotResponse(inputValue);
            addMessageToChat(response, 'bot');
        }, 1000 + Math.random() * 1000); // Delay aleatorio entre 1-2 segundos
    };

    // Event listeners
    chatSend.addEventListener('click', sendMessage);
    
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });

    // Auto-focus en el input cuando se abre el chat
    chatInput.addEventListener('focus', () => {
        if (!chatExpanded) {
            toggleChat();
        }
    });
}

// Función para añadir mensaje al chat
function addMessageToChat(message, sender) {
    const chatHistory = document.getElementById('chat-history');
    const messageDiv = document.createElement('div');
    
    messageDiv.className = `mensaje-${sender}`;
    messageDiv.textContent = message;
    
    // Añadir timestamp para mensajes del usuario
    if (sender === 'usuario') {
        const timestamp = new Date().toLocaleTimeString('es-ES', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
        messageDiv.innerHTML = `${message} <small style="opacity: 0.7; font-size: 0.8em;">${timestamp}</small>`;
    }
    
    chatHistory.appendChild(messageDiv);
    
    // Scroll automático hacia abajo
    chatHistory.scrollTop = chatHistory.scrollHeight;
    
    return messageDiv;
}

// Función para generar respuesta del chatbot
function generateChatbotResponse(userInput) {
    const input = userInput.toLowerCase().trim();
    
    // Buscar palabras clave en la entrada del usuario
    for (const keyword in chatbotResponses) {
        if (input.includes(keyword)) {
            return chatbotResponses[keyword];
        }
    }
    
    // Si no encuentra coincidencias específicas, buscar temas generales
    if (input.includes('seguridad') || input.includes('hack') || input.includes('virus')) {
        return chatbotResponses['ciberseguridad'];
    }
    
    if (input.includes('red') || input.includes('internet') || input.includes('conexion')) {
        return chatbotResponses['redes'];
    }
    
    if (input.includes('programa') || input.includes('codigo') || input.includes('desarrollo')) {
        return chatbotResponses['programacion'];
    }
    
    if (input.includes('servidor') || input.includes('hosting') || input.includes('web')) {
        return chatbotResponses['servidores'];
    }
    
    if (input.includes('sistema') || input.includes('windows') || input.includes('linux')) {
        return chatbotResponses['sistemas operativos'];
    }
    
    // Respuesta por defecto
    return chatbotResponses['default'];
}

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    // Crear elemento de notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Estilos inline para la notificación
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        opacity: 0;
        transform: translateX(100%);
        transition: all 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Colores según el tipo
    switch(type) {
        case 'success':
            notification.style.background = 'linear-gradient(45deg, #00ff88, #00cc66)';
            break;
        case 'warning':
            notification.style.background = 'linear-gradient(45deg, #ffaa00, #ff8800)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(45deg, #ff4444, #cc0000)';
            break;
        default:
            notification.style.background = 'linear-gradient(45deg, #0066ff, #0044cc)';
    }
    
    // Añadir al DOM
    document.body.appendChild(notification);
    
    // Animar entrada
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remover después de 4 segundos
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Función para añadir animación de scroll suave
function addScrollAnimation() {
    // Observador de intersección para animaciones
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observar tarjetas de módulos
    const moduleCards = document.querySelectorAll('.module-card');
    moduleCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// Función para búsqueda rápida (funcionalidad adicional)
function quickSearch(query) {
    const modules = document.querySelectorAll('.module-card');
    const searchTerm = query.toLowerCase();
    
    modules.forEach(module => {
        const title = module.querySelector('h3').textContent.toLowerCase();
        const description = module.querySelector('p').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            module.style.display = 'block';
            module.style.opacity = '1';
        } else {
            module.style.display = 'none';
        }
    });
    
    // Si no hay query, mostrar todos
    if (!query.trim()) {
        modules.forEach(module => {
            module.style.display = 'block';
            module.style.opacity = '1';
        });
    }
}

// Función para modo oscuro/claro (funcionalidad adicional)
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Cargar tema guardado
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
}

// Función para compartir módulo (funcionalidad adicional)
function shareModule(moduleId) {
    if (navigator.share) {
        navigator.share({
            title: `EduTech - ${moduleContent[moduleId].title}`,
            text: 'Aprende sobre ' + moduleContent[moduleId].title + ' en EduTech',
            url: window.location.href + '#' + moduleId
        });
    } else {
        // Fallback: copiar al portapapeles
        const url = window.location.href + '#' + moduleId;
        navigator.clipboard.writeText(url).then(() => {
            showNotification('Enlace copiado al portapapeles', 'success');
        }).catch(() => {
            showNotification('No se pudo copiar el enlace', 'error');
        });
    }
}

// Función para estadísticas de uso (funcionalidad adicional)
function trackModuleView(moduleId) {
    let stats = JSON.parse(localStorage.getItem('edutech-stats') || '{}');
    stats[moduleId] = (stats[moduleId] || 0) + 1;
    stats.totalViews = (stats.totalViews || 0) + 1;
    localStorage.setItem('edutech-stats', JSON.stringify(stats));
}

// Función para mostrar estadísticas
function showStats() {
    const stats = JSON.parse(localStorage.getItem('edutech-stats') || '{}');
    let message = 'Estadísticas de uso:\n\n';
    
    Object.keys(stats).forEach(key => {
        if (key !== 'totalViews') {
            const moduleName = moduleContent[key] ? moduleContent[key].title : key;
            message += `${moduleName}: ${stats[key]} vistas\n`;
        }
    });
    
    message += `\nTotal de vistas: ${stats.totalViews || 0}`;
    alert(message);
}

// Event listeners adicionales
document.addEventListener('DOMContentLoaded', function() {
    // Cargar tema guardado
    loadSavedTheme();
    
    // Añadir tracking a los botones de módulos
    const moduleButtons = document.querySelectorAll('.module-btn');
    moduleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const moduleCard = this.closest('.module-card');
            const moduleId = moduleCard.getAttribute('data-module');
            if (moduleId) {
                trackModuleView(moduleId);
            }
        });
    });
    
    // Atajos de teclado
    document.addEventListener('keydown', function(e) {
        // Ctrl/Cmd + K para enfocar el chat
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('chat-input').focus();
        }
        
        // Ctrl/Cmd + / para mostrar ayuda
        if ((e.ctrlKey || e.metaKey) && e.key === '/') {
            e.preventDefault();
            addMessageToChat(chatbotResponses['ayuda'], 'bot');
            if (!chatExpanded) {
                toggleChat();
            }
        }
    });
});

// Función para inicializar tooltips (funcionalidad adicional)
function initializeTooltips() {
    const elements = document.querySelectorAll('[data-tooltip]');
    
    elements.forEach(element => {
        element.addEventListener('mouseenter', function(e) {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(0, 0, 0, 0.9);
                color: white;
                padding: 8px 12px;
                border-radius: 6px;
                font-size: 14px;
                z-index: 10000;
                pointer-events: none;
                opacity: 0;
                transition: opacity 0.3s ease;
            `;
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
            
            setTimeout(() => tooltip.style.opacity = '1', 100);
            
            this.addEventListener('mouseleave', function() {
                if (tooltip.parentNode) {
                    tooltip.style.opacity = '0';
                    setTimeout(() => {
                        if (tooltip.parentNode) {
                            tooltip.parentNode.removeChild(tooltip);
                        }
                    }, 300);
                }
            }, { once: true });
        });
    });
}

// Inicializar tooltips cuando se carga la página
document.addEventListener('DOMContentLoaded', initializeTooltips);

// Función para manejar errores globales
window.addEventListener('error', function(e) {
    console.error('Error en EduTech:', e.error);
    showNotification('Ha ocurrido un error. Por favor, recarga la página.', 'error');
});

// Función para manejar promesas rechazadas
window.addEventListener('unhandledrejection', function(e) {
    console.error('Promesa rechazada:', e.reason);
    showNotification('Error de conexión. Verifica tu internet.', 'warning');
});

// Exportar funciones para uso global (si es necesario)
window.EduTech = {
    openModule,
    closeModule,
    toggleChat,
    quickSearch,
    toggleTheme,
    shareModule,
    showStats
};

