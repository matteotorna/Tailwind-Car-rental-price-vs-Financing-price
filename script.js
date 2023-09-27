document.addEventListener("DOMContentLoaded", function () {
    const calculateButton = document.getElementById("calculateButton");

    calculateButton.addEventListener("click", calculate);

    function calculate() {
        const serviceCost = parseFloat(document.getElementById("serviceCost").value) || 0;
        const autoServiceCost = parseFloat(document.getElementById("autoServiceCost").value) || 0;
        const insuranceCost = parseFloat(document.getElementById("insuranceCost").value) || 0;
        const maintenanceCost = parseFloat(document.getElementById("maintenanceCost").value) || 0;
        const tireCost = parseFloat(document.getElementById("tireCost").value) || 0;
        const usedCarValue = parseFloat(document.getElementById("usedCarValue").value) || 0;

        // Calcolo il costo totale del finanziamento auto
        let financingCost = insuranceCost + maintenanceCost + tireCost + autoServiceCost;
        
        // Sottrai il ricavo dalla vendita dell'usato (se opzione)
        if (usedCarValue > 0) {
            financingCost -= usedCarValue;
        }

        const leasingCost = serviceCost;

        const financingResult = document.getElementById("financingResult");
        const longTermRentalCost = document.getElementById("longTermRentalCost");

        if (financingCost < leasingCost) {
            financingResult.textContent = financingCost.toFixed(2); // Mostra il costo totale del finanziamento auto
            longTermRentalCost.textContent = leasingCost.toFixed(2);
        } else if (leasingCost < financingCost) {
            financingResult.textContent = financingCost.toFixed(2); // Mostra il costo totale del finanziamento auto
            longTermRentalCost.textContent = serviceCost.toString(); // Mostra il costo del servizio per il noleggio a lungo termine
        } else {
            financingResult.textContent = "Parità";
            longTermRentalCost.textContent = serviceCost.toString(); // Mostra il costo del servizio per il noleggio a lungo termine
        }
    }
});