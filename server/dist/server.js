import app from './app.js';
app.get('/', (req, res) => {
    res.send('Get at /');
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running!!`);
});
