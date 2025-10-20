/**
 * Función que calcula la nota que el estudiante necesita obtener
 * en el Corte 3 para alcanzar una Nota Final de 3.0.
 */
function calcularNotaNecesaria() {
    // 1. Obtener los valores de los campos de entrada
    const notaCorte1 = parseFloat(document.getElementById('corte1').value);
    const notaCorte2 = parseFloat(document.getElementById('corte2').value);
    const resultadoDiv = document.getElementById('resultado');
    
    // Función de ayuda para mostrar errores
    const mostrarError = (mensaje) => {
        resultadoDiv.textContent = mensaje;
        resultadoDiv.style.color = '#dc3545';
        resultadoDiv.style.borderColor = '#dc3545';
    };

    // 2. Definir pesos y meta
    const PESO_C1 = 0.33;
    const PESO_C2 = 0.33;
    const PESO_C3 = 0.34;
    const NOTA_META = 3.0; // La nota final deseada es 3.0

    // 3. Validación de datos: Comprobar campos vacíos (NaN)
    if (isNaN(notaCorte1) || isNaN(notaCorte2)) {
        mostrarError('🛑 Error: Por favor, ingrese ambas notas (Corte 1 y Corte 2).');
        return;
    }
    
    // 4. Validación de datos: Comprobar el rango (0.0 a 5.0)
    if (notaCorte1 < 0.0 || notaCorte1 > 5.0) {
        mostrarError('❌ Error de Nota: La nota del Corte 1 debe estar entre 0.0 y 5.0.');
        return;
    }

    if (notaCorte2 < 0.0 || notaCorte2 > 5.0) {
        mostrarError('❌ Error de Nota: La nota del Corte 2 debe estar entre 0.0 y 5.0.');
        return;
    }

    // --- Si la validación es exitosa, se continúa con el cálculo ---

    // 5. Calcular el aporte actual de los dos primeros cortes
    const aporteActual = (notaCorte1 * PESO_C1) + (notaCorte2 * PESO_C2);

    // 6. Aplicar la fórmula de despeje:
    // Nota_C3 = (Nota_Meta - Aporte_Actual) / Peso_C3
    const notaNecesaria = (NOTA_META - aporteActual) / PESO_C3;
    
    // 7. Redondear el resultado a dos decimales
    const notaFinalRedondeada = notaNecesaria.toFixed(2);
    
    // 8. Mostrar el resultado con escenarios
    if (notaNecesaria <= 0) {
        // El estudiante ya aprobó o necesita una nota muy baja (ej: 0.1)
        resultadoDiv.textContent = `🥳 ¡Felicidades! Ya tienes ${NOTA_META.toFixed(2)} o más. Necesitas 0.00 en el Corte 3.`;
        resultadoDiv.style.color = '#28a745';
        resultadoDiv.style.borderColor = '#28a745';
    } else if (notaNecesaria > 5.0) {
        // Es imposible alcanzar el 3.0, ya que el máximo es 5.0
        resultadoDiv.textContent = `😭 Imposible Aprobar. Necesitas ${notaFinalRedondeada} en el Corte 3 (¡El máximo es 5.0!).`;
        resultadoDiv.style.color = '#dc3545';
        resultadoDiv.style.borderColor = '#dc3545';
    } else {
        // La nota requerida es posible (entre 0.0 y 5.0)
        resultadoDiv.textContent = `🎯 Nota Mínima Requerida en el Corte 3 (34%): ${notaFinalRedondeada}`;
        resultadoDiv.style.color = '#007bff';
        resultadoDiv.style.borderColor = '#007bff';
    }
}