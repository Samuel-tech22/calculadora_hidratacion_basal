document.getElementById('peso').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calcularHidratacion();
    }
});

function calcularHidratacion() {
    const peso = parseFloat(document.getElementById('peso').value);
    let resultado = '';

    if (peso <= 10) {
        const volumenDiario = Math.round(peso * 100);
        const mantenimiento = Math.round(volumenDiario / 24);
        const mm2 = Math.round(mantenimiento * 1.5);
        resultado = `Hidratación basal según método de Holliday-Segar: <br>${volumenDiario} cc por día <br>(${mantenimiento} cc por hora)<br>
                     m+m/2: ${mm2} cc por hora`;
    } else if (peso <= 20) {
        const volumenDiario = Math.round((10 * 100) + ((peso - 10) * 50));
        const mantenimiento = Math.round(volumenDiario / 24);
        const mm2 = Math.round(mantenimiento * 1.5);
        resultado = `Hidratación basal según método de Holliday-Segar: <br>${volumenDiario} cc por día <br>(${mantenimiento} cc por hora)<br>
                     m+m/2: ${mm2} cc por hora`;
    } else if (peso <= 30) {
        const volumenDiario = Math.round((10 * 100) + (10 * 50) + ((peso - 20) * 20));
        const mantenimiento = Math.round(volumenDiario / 24);
        const mm2 = Math.round(mantenimiento * 1.5);
        resultado = `Hidratación basal según método de Holliday-Segar: <br>${volumenDiario} cc por día <br>(${mantenimiento} cc por hora)<br>
                     m+m/2: ${mm2} cc por hora`;
    } else {
        const superficieCorporal = ((peso * 4) + 7) / (peso + 90);
        const volumenDiario1 = Math.round(superficieCorporal * 1500);
        const volumenDiario2 = Math.round(superficieCorporal * 2000);
        const mantenimiento1 = Math.round(volumenDiario1 / 24);
        const mantenimiento2 = Math.round(volumenDiario2 / 24);
        const mm2_1 = Math.round(mantenimiento1 * 1.5);
        const mm2_2 = Math.round(mantenimiento2 * 1.5);
        resultado = `Hidratación basal según método de Superficie Corporal (1500 cc/día): <br>${volumenDiario1} cc por día <br>(${mantenimiento1} cc por hora)<br>
                     m+m/2 (1500 cc/día): ${mm2_1} cc por hora<br><br><br>
                     Hidratación basal según método de Superficie Corporal (2000 cc/día): <br>${volumenDiario2} cc por día <br>(${mantenimiento2} cc por hora)<br>
                     m+m/2 (2000 cc/día): ${mm2_2} cc por hora`;
    }

    document.getElementById('result').innerHTML = resultado;
}
