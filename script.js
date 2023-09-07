document.getElementById('peso').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        calcularHidratacion();
    }
});

function calcularHidratacion() {
    const peso = parseFloat(document.getElementById('peso').value);
    let resultado = '';

    if (peso <= 10) {
        const hidratacionBasal = Math.round(peso * 100);
        const ccPorHora = Math.round(hidratacionBasal / 24);
        resultado = `Hidratación basal según método de Holliday-Segar: <br> ${hidratacionBasal} cc por día <br> (${ccPorHora} cc por hora)`;
    } else if (peso <= 20) {
        const hidratacionBasal = Math.round((10 * 100) + ((peso - 10) * 50));
        const ccPorHora = Math.round(hidratacionBasal / 24);
        resultado = `Hidratación basal según método de Holliday-Segar: <br> ${hidratacionBasal} cc por día <br> (${ccPorHora} cc por hora)`;
    } else if (peso <= 30) {
        const hidratacionBasal = Math.round((10 * 100) + (10 * 50) + ((peso - 20) * 20));
        const ccPorHora = Math.round(hidratacionBasal / 24);
        resultado = `Hidratación basal según método de Holliday-Segar: <br> ${hidratacionBasal} cc por día <br> (${ccPorHora} cc por hora)`;
    } else {
        const superficieCorporal = ((peso * 4) + 7) / (peso + 90);
        const volumenDiario1 = Math.round(superficieCorporal * 1500);
        const volumenDiario2 = Math.round(superficieCorporal * 2000);
        const ccPorHora1 = Math.round(volumenDiario1 / 24);
        const ccPorHora2 = Math.round(volumenDiario2 / 24);

        resultado = `Hidratación basal según método de superficie corporal (1500 cc/día): <br> ${volumenDiario1} cc por día <br> (${ccPorHora1} cc por hora)<br><br>
                     Hidratación basal según método de superficie corporal (2000 cc/día): <br> ${volumenDiario2} cc por día <br> (${ccPorHora2} cc por hora)`;
    }

    document.getElementById('result').innerHTML = resultado;
}
