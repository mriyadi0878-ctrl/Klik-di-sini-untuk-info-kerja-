const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/save-location', (req, res) => {
    const { latitude, longitude, accuracy, timestamp } = req.body;
    console.log(`Lokasi Diterima -> Lat: ${latitude}, Long: ${longitude}`);
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Server aktif di port ${PORT}`);
});
