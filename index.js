require('dotenv').config();
const axios = require('axios');

const key = process.env.TRELLO_API_KEY;
const token = process.env.TRELLO_TOKEN;

axios.get(`https://api.trello.com/1/members/me/boards?key=${key}&token=${token}`)
    .then(response => {
        console.log('Boards:', response.data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
