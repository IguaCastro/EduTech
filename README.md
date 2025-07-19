# 🎓 EduTech - Plataforma Educativa de Informática y Redes

Una aplicación web educativa moderna diseñada para estudiantes de informática y redes, con contenido interactivo y un asistente virtual integrado.

## 🚀 Características

- **6 Módulos Educativos Completos:**
  - 🔒 Ciberseguridad
  - 💻 Sistemas Operativos
  - 🌐 Redes de Computadoras
  - 📝 Lenguajes de Programación
  - ⚙️ Administración de Servidores
  - 🔗 Protocolos de Red

- **Interfaz Moderna:**
  - Fondo animado con estética cibernética
  - Diseño responsive para todos los dispositivos
  - Animaciones suaves y efectos visuales
  - Tipografía moderna con Google Fonts

- **Asistente Virtual Inteligente:**
  - Chatbot con respuestas contextuales
  - Más de 50 respuestas predefinidas
  - Reconocimiento de palabras clave
  - Interfaz de chat expandible/colapsable

- **Funcionalidades Adicionales:**
  - Estadísticas de uso local
  - Atajos de teclado
  - Notificaciones elegantes
  - Enlaces externos a recursos de calidad

## 📁 Estructura del Proyecto

```
edutech/
├── index.html          # Página principal
├── style.css           # Estilos y animaciones
├── script.js           # Lógica JavaScript
└── README.md           # Este archivo
```

## 🛠️ Instalación y Uso

### Opción 1: Uso Directo
1. Descarga todos los archivos en una carpeta
2. Abre `index.html` en tu navegador web
3. ¡Listo! La aplicación funcionará sin configuración adicional

### Opción 2: Servidor Local (Recomendado)
```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js instalado
npx http-server

# Luego abre http://localhost:8000 en tu navegador
```

## 🎯 Cómo Usar la Aplicación

### Navegación Principal
- **Módulos Educativos:** Haz clic en "Ver Contenido" en cualquier tarjeta de módulo
- **Contenido Detallado:** Cada módulo incluye teoría y enlaces externos
- **Enlaces Externos:** Se abren en nueva pestaña para no perder tu progreso

### Asistente Virtual
- **Activar Chat:** Haz clic en el chatbot en la esquina inferior derecha
- **Preguntas Ejemplo:**
  - "¿Qué es ciberseguridad?"
  - "Explícame sobre redes"
  - "¿Cómo aprender Python?"
  - "¿Qué es un firewall?"
- **Colapsar/Expandir:** Usa el botón "−" / "+" en el header del chat

### Atajos de Teclado
- **Ctrl/Cmd + K:** Enfocar el chat
- **Ctrl/Cmd + /:** Mostrar ayuda en el chat
- **Escape:** Cerrar modal abierto

## 📚 Contenido Educativo

### 🔒 Ciberseguridad
- Conceptos fundamentales de seguridad
- Tipos de malware y amenazas
- Herramientas de protección
- Enlaces a OWASP, NIST, Cybrary

### 💻 Sistemas Operativos
- Windows, Linux, macOS
- Gestión de procesos y memoria
- Administración del sistema
- Documentación oficial y tutoriales

### 🌐 Redes de Computadoras
- Protocolos IPv4 e IPv6
- Modelo OSI de 7 capas
- Equipos de red (routers, switches)
- RFC oficiales y Cisco Academy

### 📝 Lenguajes de Programación
- HTML, CSS, JavaScript, Python
- Sintaxis y mejores prácticas
- Frameworks y librerías
- MDN, W3Schools, FreeCodeCamp

### ⚙️ Administración de Servidores
- Tipos de servidores web y BD
- Herramientas de administración
- Virtualización y contenedores
- Documentación Apache, Nginx, Docker

### 🔗 Protocolos de Red
- HTTP/HTTPS, FTP, SSH, SMTP
- Protocolos de seguridad
- Protocolos de enrutamiento
- Documentación RFC y herramientas

## 🤖 Asistente Virtual - Palabras Clave

El chatbot reconoce estas palabras clave y temas:

**Saludos:** hola, buenos días, buenas tardes, buenas noches
**Ciberseguridad:** malware, firewall, phishing, ransomware, seguridad
**Sistemas:** linux, windows, procesos, sistemas operativos
**Redes:** ipv4, ipv6, tcp, dns, router, redes, internet
**Programación:** html, css, javascript, python, programacion, codigo
**Servidores:** apache, nginx, docker, servidores, hosting
**Protocolos:** http, ftp, ssh, protocolos
**Ayuda:** ayuda, gracias, adios

## 🎨 Personalización

### Colores del Tema
Puedes modificar los colores en `style.css`:
```css
:root {
    --primary-color: #00ffff;    /* Color principal (cyan) */
    --secondary-color: #0066ff;  /* Color secundario (azul) */
    --accent-color: #ff0080;     /* Color de acento (magenta) */
    --bg-dark: #0a0a0a;         /* Fondo oscuro */
}
```

### Añadir Nuevo Contenido
Para añadir un nuevo módulo, edita `script.js`:
```javascript
const moduleContent = {
    // ... módulos existentes
    nuevoModulo: {
        title: "🆕 Nuevo Módulo",
        content: `<h2>Contenido del nuevo módulo</h2>...`
    }
};
```

### Respuestas del Chatbot
Añade nuevas respuestas en `script.js`:
```javascript
const chatbotResponses = {
    // ... respuestas existentes
    'nueva-palabra-clave': 'Nueva respuesta del chatbot'
};
```

## 🌐 Compatibilidad

- **Navegadores:** Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Dispositivos:** Desktop, tablet, móvil
- **Resoluciones:** Desde 320px hasta 4K
- **Sin dependencias:** Funciona offline después de la primera carga

## 📊 Funcionalidades Avanzadas

### Estadísticas de Uso
- Se guardan localmente en el navegador
- Rastrea vistas por módulo
- Acceso mediante `EduTech.showStats()` en consola

### Modo Tema
- Tema oscuro por defecto
- Función `toggleTheme()` disponible
- Preferencia guardada en localStorage

### Compartir Módulos
- Función `shareModule(moduleId)` disponible
- Usa Web Share API cuando está disponible
- Fallback a copiar enlace al portapapeles

## 🔧 Desarrollo

### Estructura del Código
- **HTML:** Semántico y accesible
- **CSS:** Variables CSS, Flexbox, Grid, animaciones
- **JavaScript:** ES6+, modular, bien documentado

### Mejoras Futuras
- [ ] Modo offline completo con Service Worker
- [ ] Búsqueda avanzada con filtros
- [ ] Sistema de favoritos
- [ ] Progreso de aprendizaje
- [ ] Más idiomas
- [ ] Integración con APIs educativas

## 📝 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:
1. Fork el proyecto
2. Crea una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abre un Pull Request

## 📞 Soporte

Si encuentras algún problema o tienes sugerencias:
- Abre un issue en el repositorio
- Describe el problema detalladamente
- Incluye información del navegador y sistema operativo

---

**¡Disfruta aprendiendo con EduTech! 🚀📚**

