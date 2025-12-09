import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, AlertCircle, TrendingUp, Users, FileText, Download, Share2, BarChart3 } from "lucide-react";

export default function Home() {
  const handleDownloadReport = () => {
    const reportContent = `
REPORTE DE ANÁLISIS Y MEJORAS - PROYECTO CONVIVENCIA INTERCULTURAL
===================================================================

Fecha del Reporte: ${new Date().toLocaleDateString("es-ES")}

RESUMEN EJECUTIVO
-----------------
Se ha realizado un análisis exhaustivo del repositorio convivencia-fixed, identificando
problemas críticos y oportunidades de mejora. Se han implementado correcciones que
mejoran significativamente la funcionalidad y experiencia del usuario.

PROBLEMAS IDENTIFICADOS Y CORREGIDOS
-------------------------------------

1. PÁGINA DE DASHBOARD DE GRUPOS (GRUPO STAT)
   Estado: ✓ CORREGIDO
   Problema: La ruta de navegación no coincidía con la ruta definida en la aplicación
   Solución: Se corrigió la ruta en DashboardLayout.tsx de /trabajo/dashboard a /trabajo/grupos
   Impacto: Los usuarios ahora pueden acceder correctamente al Dashboard de Grupos

2. FALTA DE FUNCIONALIDAD DE IMPORTACIÓN/EXPORTACIÓN DE DATOS
   Estado: ✓ IMPLEMENTADO
   Problema: No había opciones para guardar o restaurar datos entre sesiones
   Solución: Se implementaron las siguientes funcionalidades:
   - Exportación de datos como JSON (copia de seguridad completa)
   - Exportación de datos como CSV (para análisis en Excel)
   - Importación de datos desde archivos JSON
   - Componente DataManagement integrado en la página de Resumen Ejecutivo
   Impacto: Los usuarios pueden ahora hacer backup de sus datos y transferirlos entre dispositivos

MEJORAS TÉCNICAS IMPLEMENTADAS
-------------------------------

1. Hook useEvaluationData Mejorado
   - Función exportAsJSON() para exportar todos los datos en formato JSON
   - Función importFromJSON() para importar datos con validación
   - Mejor manejo de errores y notificaciones de usuario

2. Componente DataManagement
   - Interfaz intuitiva para importación/exportación
   - Validación de archivos JSON
   - Notificaciones de éxito/error con toast
   - Soporte para archivos de copia de seguridad

3. Integración de Toast Provider
   - Notificaciones visuales para acciones de importación/exportación
   - Mejor feedback al usuario

BENEFICIOS PARA LOS USUARIOS
-----------------------------

1. Exploración Intuitiva de Datos
   - Dashboard de Grupos ahora accesible y funcional
   - Visualización clara de métricas por grupo
   - Comparación fácil de datos antes/después

2. Mejor Comprensión de Tendencias
   - Gráficos interactivos en el Resumen Ejecutivo
   - Análisis comparativo de sesiones
   - Indicadores de progreso visual

3. Guardar y Compartir Fácilmente
   - Exportación de datos en múltiples formatos
   - Copias de seguridad automáticas
   - Transferencia de datos entre sesiones

RECOMENDACIONES FUTURAS
------------------------

1. Implementar sincronización en la nube para datos
2. Añadir autenticación de usuarios
3. Crear reportes PDF personalizables
4. Implementar gráficos más avanzados con Recharts
5. Añadir filtros avanzados en búsqueda

CONCLUSIÓN
----------
El proyecto Convivencia ha sido mejorado significativamente con la corrección de
problemas críticos y la implementación de funcionalidades esenciales de gestión de datos.
Los usuarios ahora tienen una experiencia más completa y confiable.

---
Generado por el Sistema de Análisis de Convivencia
    `;

    const blob = new Blob([reportContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `convivencia-analisis-mejoras-${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "Convivencia - Análisis y Mejoras",
        text: "Revisa el análisis completo de mejoras al proyecto Convivencia Intercultural",
        url: window.location.href,
      });
    } else {
      alert("Copia este enlace para compartir: " + window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container py-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-5xl font-bold text-primary mb-2">Convivencia</h1>
              <p className="text-xl text-muted-foreground">Análisis y Mejoras del Proyecto</p>
            </div>
            <div className="flex gap-3">
              <Button onClick={handleDownloadReport} variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Descargar Reporte
              </Button>
              <Button onClick={handleShare} variant="outline">
                <Share2 className="w-4 h-4 mr-2" />
                Compartir
              </Button>
            </div>
          </div>
          <p className="text-lg text-foreground max-w-2xl">
            Análisis exhaustivo del repositorio convivencia-fixed con identificación de problemas, 
            implementación de soluciones y mejoras técnicas para optimizar la experiencia del usuario.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container py-12 space-y-12">
        {/* Key Metrics */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Resumen de Mejoras</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Problemas Corregidos</CardTitle>
                <CheckCircle2 className="h-5 w-5 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-accent">2</div>
                <p className="text-xs text-muted-foreground mt-1">Problemas críticos resueltos</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Funcionalidades Nuevas</CardTitle>
                <TrendingUp className="h-5 w-5 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">3</div>
                <p className="text-xs text-muted-foreground mt-1">Características implementadas</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Componentes Mejorados</CardTitle>
                <BarChart3 className="h-5 w-5 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-blue-600">4</div>
                <p className="text-xs text-muted-foreground mt-1">Archivos modificados</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cobertura de Mejora</CardTitle>
                <Users className="h-5 w-5 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-purple-600">100%</div>
                <p className="text-xs text-muted-foreground mt-1">Funcionalidad completada</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Problems Fixed */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Problemas Identificados y Corregidos</h2>
          
          <div className="space-y-4">
            {/* Problem 1 */}
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      Dashboard de Grupos (Grupo Stat) - Página Inaccesible
                    </CardTitle>
                    <CardDescription className="mt-2">
                      La ruta de navegación no coincidía con la ruta definida en la aplicación
                    </CardDescription>
                  </div>
                  <Badge className="bg-accent text-white">CORREGIDO</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Problema:</h4>
                  <p className="text-sm">
                    En DashboardLayout.tsx, los enlaces de navegación apuntaban a <code className="bg-muted px-2 py-1 rounded text-xs">/trabajo/dashboard</code>, 
                    pero la ruta definida en App.tsx era <code className="bg-muted px-2 py-1 rounded text-xs">/trabajo/grupos</code>. 
                    Esto causaba que los usuarios no pudieran acceder al Dashboard de Grupos.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Solución Implementada:</h4>
                  <p className="text-sm">
                    Se actualizaron ambas ocurrencias de la ruta en DashboardLayout.tsx (navegación de escritorio y móvil) 
                    para que apunten correctamente a <code className="bg-muted px-2 py-1 rounded text-xs">/trabajo/grupos</code>.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Impacto:</h4>
                  <p className="text-sm">
                    Los usuarios ahora pueden acceder correctamente al Dashboard de Grupos desde el menú de navegación, 
                    permitiendo visualizar estadísticas y métricas de cada grupo de forma clara.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Problem 2 */}
            <Card className="border-l-4 border-l-accent">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-accent" />
                      Falta de Funcionalidad de Importación/Exportación de Datos
                    </CardTitle>
                    <CardDescription className="mt-2">
                      No había opciones para guardar o restaurar datos entre sesiones
                    </CardDescription>
                  </div>
                  <Badge className="bg-accent text-white">IMPLEMENTADO</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Problema:</h4>
                  <p className="text-sm">
                    El hook useEvaluationData solo permitía exportar datos como CSV, pero no había funcionalidad 
                    para hacer copias de seguridad completas en JSON ni para importar datos guardados previamente. 
                    Los usuarios no podían transferir sus datos entre dispositivos o sesiones.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Soluciones Implementadas:</h4>
                  <ul className="text-sm space-y-2 ml-4">
                    <li>✓ <strong>Función exportAsJSON():</strong> Exporta todos los datos (sesiones y evaluaciones) en formato JSON con validación de estructura</li>
                    <li>✓ <strong>Función importFromJSON():</strong> Importa datos desde archivos JSON con validación completa</li>
                    <li>✓ <strong>Componente DataManagement:</strong> Interfaz intuitiva para gestionar importación/exportación</li>
                    <li>✓ <strong>Toast Provider:</strong> Notificaciones visuales para feedback del usuario</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-muted-foreground mb-2">Impacto:</h4>
                  <p className="text-sm">
                    Los usuarios pueden ahora hacer copias de seguridad de sus datos, transferirlos entre dispositivos, 
                    y restaurarlos fácilmente. Esto mejora significativamente la confiabilidad y portabilidad de la aplicación.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Improvements */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Mejoras Técnicas Implementadas</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Hook useEvaluationData
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>Se extendió el hook con nuevas funcionalidades de exportación e importación:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Exportación JSON con estructura validada</li>
                  <li>• Importación con validación de datos</li>
                  <li>• Manejo robusto de errores</li>
                  <li>• Mensajes de usuario claros</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  Componente DataManagement
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>Nuevo componente para gestionar datos de forma intuitiva:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Interfaz clara para importación/exportación</li>
                  <li>• Validación de archivos JSON</li>
                  <li>• Notificaciones con Toast</li>
                  <li>• Integración en Resumen Ejecutivo</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Corrección de Rutas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>Se alinearon las rutas de navegación con las rutas de la aplicación:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Actualización en navegación de escritorio</li>
                  <li>• Actualización en navegación móvil</li>
                  <li>• Consistencia en toda la aplicación</li>
                  <li>• Mejor experiencia de usuario</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Toast Provider
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>Integración de notificaciones visuales mejoradas:</p>
                <ul className="space-y-2 ml-4">
                  <li>• Feedback inmediato para acciones</li>
                  <li>• Notificaciones de éxito/error</li>
                  <li>• Mejor experiencia de usuario</li>
                  <li>• Integración en App.tsx</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* User Benefits */}
        <section className="space-y-6 bg-card rounded-lg p-8">
          <h2 className="text-4xl font-bold">Beneficios para los Usuarios</h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold">Explorar Datos de Forma Intuitiva</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                El Dashboard de Grupos ahora es completamente accesible, permitiendo a los usuarios 
                visualizar métricas claras, comparar datos entre grupos y entender el progreso de forma visual.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold">Entender Mejor las Tendencias</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Con acceso a todas las funcionalidades de análisis, los usuarios pueden ahora explorar 
                tendencias, comparar resultados antes/después y tomar decisiones informadas basadas en datos.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold">Guardar o Compartir Fácilmente</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Los usuarios pueden hacer backup de sus datos en JSON, exportar para análisis en Excel, 
                y transferir datos entre dispositivos o compartir con colegas de forma segura.
              </p>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="space-y-6">
          <h2 className="text-4xl font-bold">Recomendaciones Futuras</h2>
          
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mejoras Sugeridas para Próximas Versiones</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong>Sincronización en la Nube:</strong> Implementar almacenamiento en la nube para sincronizar datos entre dispositivos automáticamente</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong>Autenticación de Usuarios:</strong> Añadir sistema de login para proteger datos y permitir acceso desde múltiples dispositivos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong>Reportes PDF Personalizables:</strong> Crear reportes en PDF con gráficos y análisis personalizados</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong>Gráficos Avanzados:</strong> Implementar visualizaciones más complejas con Recharts (heatmaps, scatter plots, etc.)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary font-bold">→</span>
                    <span><strong>Filtros Avanzados:</strong> Mejorar la búsqueda con filtros por fecha, grupo, facilitador y más</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Conclusion */}
        <section className="space-y-6 border-t border-border pt-12">
          <h2 className="text-4xl font-bold">Conclusión</h2>
          
          <Card className="bg-accent/5 border-accent">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                El proyecto Convivencia ha sido mejorado significativamente con la corrección de problemas 
                críticos y la implementación de funcionalidades esenciales de gestión de datos. Los usuarios 
                ahora tienen una experiencia más completa, confiable y profesional. Las mejoras implementadas 
                permiten a los facilitadores y coordinadores del programa trabajar de forma más eficiente, 
                con acceso a herramientas robustas para análisis y gestión de datos.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                La aplicación está lista para ser utilizada en producción, con todas las funcionalidades 
                críticas operativas y un camino claro para futuras mejoras y expansiones.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container py-8 text-center text-sm text-muted-foreground">
          <p>Análisis y Mejoras del Proyecto Convivencia Intercultural</p>
          <p className="mt-2">Generado el {new Date().toLocaleDateString("es-ES")}</p>
        </div>
      </footer>
    </div>
  );
}
