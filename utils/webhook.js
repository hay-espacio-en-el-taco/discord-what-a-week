const fetch = require('node-fetch')

const sendDiscordMessage = () => {
  const url = process.env.WEB_HOOK_URL

  const embededObject = {
    title: 'what a week?',
    type: 'rich',
    url: 'https://thicc.mywaifulist.moe/waifus/458/f95bc89cc6ed8f5abe2204c30d74a1cf9b706d2badcf55859713c29444b21427_thumb.jpeg',
    description: 'sda',
  }

  const richData = {
    content: '',
    embeds: [embededObject],
    avatar_url: 'https://i.kym-cdn.com/photos/images/facebook/001/414/503/eac.jpg',
    username: 'Captain',
  }

  post(richData, url)
}

const post = (data, url) => {
fetch(url, {
  method: 'POST', // or 'PUT'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers:{
    'Content-Type': 'application/json'
  }
}).then(res => res.json())
.catch(error => console.error('Error:', error))
.then(response => console.info('Success:', response));
}

module.exports = { sendDiscordMessage }
