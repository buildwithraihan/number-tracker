document.getElementById('trackingForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    document.getElementById('loadingSection').classList.remove('hidden');
    const mobileNumber = document.getElementById('mobileNumber').value;

    setTimeout(() => {
        document.getElementById('loadingSection').classList.add('hidden');
        document.getElementById('resultsSection').classList.remove('hidden');
        document.getElementById('displayNumber').textContent = mobileNumber;

        if (mobileNumber.startsWith('+91')) {
            document.getElementById('carrierInfo').textContent = "Airtel India";
            document.getElementById('locationText').textContent = "Mumbai, Maharashtra";
            document.getElementById('coordinatesText').textContent = "19.0760° N, 72.8777° E";
        } else if (mobileNumber.startsWith('+1')) {
            document.getElementById('carrierInfo').textContent = "Verizon Wireless";
            document.getElementById('locationText').textContent = "New York, NY";
            document.getElementById('coordinatesText').textContent = "40.7128° N, 74.0060° W";
        }

        const now = new Date();
        document.getElementById('lastUpdated').textContent = now.toLocaleString();
    }, 2500);
});
