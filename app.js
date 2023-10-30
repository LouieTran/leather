// import express from 'express';
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World1!');
});

app.listen(port, () => {
    console.log(`Express running → PORT ${port}`);
});


// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });