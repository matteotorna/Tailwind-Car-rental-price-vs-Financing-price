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
        const interestRateFinancing = parseFloat(document.getElementById("interestRateFinancing").value) || 0;

        // Dichiarazione delle variabili come let invece di const
        let financingCost = insuranceCost + maintenanceCost + tireCost + autoServiceCost;
        let leasingCost = serviceCost;

        // Calcola l'importo dell'interesse per il finanziamento auto
        const financingInterestAmount = (financingCost * (interestRateFinancing / 100));

        // Aggiungi l'importo dell'interesse al costo totale del finanziamento auto
        financingCost += financingInterestAmount;

        // Sottrai il ricavo dalla vendita dell'usato (se opzione) solo per il finanziamento auto
        if (usedCarValue > 0) {
            financingCost -= usedCarValue;
        }

        const financingResult = document.getElementById("financingResult");
        const longTermRentalCost = document.getElementById("longTermRentalCost");

        if (financingCost < leasingCost) {
            financingResult.textContent = financingCost.toFixed(2); // Mostra il costo totale del finanziamento auto
            longTermRentalCost.textContent = leasingCost.toFixed(2); // Mostra il costo totale del noleggio a lungo termine
        } else if (leasingCost < financingCost) {
            financingResult.textContent = financingCost.toFixed(2); // Mostra il costo totale del finanziamento auto
            longTermRentalCost.textContent = leasingCost.toFixed(2); // Mostra il costo totale del noleggio a lungo termine
        } else {
            financingResult.textContent = "Parità";
            longTermRentalCost.textContent = leasingCost.toFixed(2); // Mostra il costo totale del noleggio a lungo termine
        }
    }
});
