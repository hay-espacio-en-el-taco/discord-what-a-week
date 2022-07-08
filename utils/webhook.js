const fetch = require('node-fetch')

const sendDiscordMessage = () => {
  const url = process.env.WEB_HOOK_URL

  const embededObject = {
    title: 'what a week?',
    type: 'rich',
    description: "Captain, it's Wednesday",
    image: {url: 'https://i.kym-cdn.com/photos/images/facebook/001/414/503/eac.jpg'}
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
