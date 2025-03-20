const express = require('express');
const app = express();
const port = 3000;

// Эндпоинт для проверки пинга
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Эндпоинт для тестирования скорости загрузки
app.get('/download', (req, res) => {
    const dummyData = Buffer.alloc(100 * 1024 * 1024, 'A'); // 100 МБ данных
    res.setHeader('Content-Length', dummyData.length);
    res.send(dummyData);
});

// Эндпоинт для тестирования скорости отдачи
app.post('/upload', (req, res) => {
    req.on('data', () => {}); // Просто читаем данные
    req.on('end', () => {
        res.send('Данные получены');
    });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
});
