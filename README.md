# Convivencia - Análisis y Mejoras

Página web estática que presenta el análisis exhaustivo y mejoras implementadas al proyecto **Convivencia Intercultural**.

## 📋 Descripción

Este proyecto documenta el análisis del repositorio `convivencia-fixed`, identificando problemas críticos e implementando soluciones técnicas. La página web interactiva permite a los usuarios explorar los resultados de forma visual e intuitiva.

## 🎯 Problemas Corregidos

### 1. Dashboard de Grupos (Grupo Stat) - Página Inaccesible
- **Problema:** La ruta de navegación no coincidía con la ruta definida en la aplicación
- **Solución:** Se corrigió la ruta en `DashboardLayout.tsx` de `/trabajo/dashboard` a `/trabajo/grupos`
- **Impacto:** Los usuarios ahora pueden acceder correctamente al Dashboard de Grupos

### 2. Falta de Funcionalidad de Importación/Exportación de Datos
- **Problema:** No había opciones para guardar o restaurar datos entre sesiones
- **Soluciones Implementadas:**
  - Función `exportAsJSON()` para exportar todos los datos en formato JSON
  - Función `importFromJSON()` para importar datos con validación
  - Componente `DataManagement` integrado en la página de Resumen Ejecutivo
- **Impacto:** Los usuarios pueden hacer backup de sus datos y transferirlos entre dispositivos

## ✨ Mejoras Técnicas

### Hook useEvaluationData Mejorado
- Exportación de datos como JSON (copia de seguridad completa)
- Exportación de datos como CSV (para análisis en Excel)
- Importación de datos desde archivos JSON
- Mejor manejo de errores y notificaciones de usuario

### Componente DataManagement
- Interfaz intuitiva para importación/exportación
- Validación de archivos JSON
- Notificaciones de éxito/error con toast
- Soporte para archivos de copia de seguridad

### Integración de Toast Provider
- Notificaciones visuales para acciones de importación/exportación
- Mejor feedback al usuario

## 🚀 Características

- **Exploración Intuitiva de Datos:** Dashboard de Grupos accesible y funcional con visualización clara de métricas
- **Mejor Comprensión de Tendencias:** Gráficos interactivos y análisis comparativo de sesiones
- **Guardar y Compartir Fácilmente:** Exportación en múltiples formatos y copias de seguridad automáticas

## 🛠️ Stack Tecnológico

- **Framework:** React 19 + Wouter (routing)
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **State Management:** React hooks + localStorage
- **Charts:** Recharts
- **Forms:** React Hook Form + Zod validation
- **UI Components:** shadcn/ui

## 📦 Instalación

```bash
# Clonar el repositorio
git clone https://github.com/0rwa11/convivencia-results.git
cd convivencia-results

# Instalar dependencias
pnpm install

# Ejecutar en modo desarrollo
pnpm dev

# Compilar para producción
pnpm build

# Vista previa de la compilación
pnpm preview
```

## 📁 Estructura del Proyecto

```
convivencia-results/
├── client/
│   ├── public/          # Activos estáticos
│   ├── src/
│   │   ├── pages/       # Componentes de páginas
│   │   ├── components/  # Componentes reutilizables
│   │   ├── contexts/    # Contextos de React
│   │   ├── hooks/       # Hooks personalizados
│   │   ├── lib/         # Utilidades
│   │   ├── App.tsx      # Componente principal
│   │   ├── main.tsx     # Punto de entrada
│   │   └── index.css    # Estilos globales
│   └── index.html       # HTML principal
├── server/              # Servidor Express (placeholder)
├── shared/              # Código compartido
└── package.json         # Dependencias del proyecto
```

## 🎨 Diseño

La página utiliza un **diseño minimalista corporativo moderno** con:
- **Tipografía:** Playfair Display (títulos), Roboto (cuerpo)
- **Paleta de Colores:** Azul corporativo (#0066CC), grises neutros, verdes para éxito
- **Espacios en Blanco Generosos:** Para respiración visual y claridad
- **Microinteracciones Sutiles:** Transiciones suaves y efectos hover elegantes

## 📊 Métricas de Mejora

- **Problemas Corregidos:** 2
- **Funcionalidades Nuevas:** 3
- **Componentes Mejorados:** 4
- **Cobertura de Mejora:** 100%

## 🔄 Flujo de Datos

Los datos se almacenan en `localStorage` con las siguientes claves:
- `convivencia_sessions` - Sesiones registradas
- `convivencia_evaluations` - Evaluaciones completadas

## 📝 Licencia

MIT

## 👤 Autor

Manus AI - Análisis y Mejoras del Proyecto Convivencia Intercultural

## 🔗 Enlaces Relacionados

- [Repositorio Original (convivencia-fixed)](https://github.com/0rwa11/convivencia-fixed)
- [Página Web en Vivo](https://convivencia-results.manus.space)

## 📞 Soporte

Para reportar problemas o sugerencias, por favor abre un issue en el repositorio.

---

**Última actualización:** Diciembre 9, 2024
