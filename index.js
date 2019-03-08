console.log("Running chatbot...");
const Telegraf = require('telegraf');
const URL = process.env.URL || "https://chatbotxxxasd.herokuapp.com/" ;
const PORT = process.env.PORT || 3000;
const API_KEY = "678358866:AAH6Nx1Nv6u-LKByxN8XMsSOJAHUW5Z-Zro";
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')

const bot = new Telegraf(API_KEY);



// concept of js function
// function greet(name){
//     return "Hello" + name;
// }
// const greet =function (name){
//     return "Hello"+name;
// }
// const greetAgain= (name) => {
//     return "Helow"+name
// }

// const greet2=name => "Hello" +name;

bot.use(Telegraf.log());
bot.start(ctx => {ctx.reply("Welcome to EEE Tutorial Answer Bot. Choose the course to get the tutorial answer!");
ctx.reply('Course List', Markup
.keyboard(['/EE2001_Circuit_Analysis', '/EE2004 Digital Electronics', '/EE2001_Tutorial_3'])
.oneTime()
.resize()
.extra())
});

bot.help(({ reply }) => reply("Hello I'm the Solex Bot"));


// bot.command("Course", ctx => {
//     ctx.reply('Course List', Markup
//     .keyboard(['/EE2001_Circuit_Analysis', '/EE2004 Digital Electronics', '/EE2001_Tutorial_3'])
//     .oneTime()
//     .resize()
//     .extra())
// });

bot.command('EE2001_Circuit_Analysis', (ctx) => {
    ctx.reply('Tutorial Answer', Markup
    .keyboard(['/EE2001_Tutorial_1', '/EE2001_Tutorial_2', '/EE2001_Tutorial_3'])
    .oneTime()
    .resize()
    .extra()
  )
  });

  bot.command('EE2001_Tutorial_1', (ctx) => {
      const createMarkup = (content) => {
          const markup = Extra.markup();
          markup.caption = content;
          return markup;
      }
      const photosWithCaption = [
          {
              photoUrl: 'https://farm8.staticflickr.com/7687/26258666314_31dbf6ef95_b.jpg',
              markup: createMarkup('Q1')
          },
          {
            photoUrl: 'https://farm8.staticflickr.com/7487/26258777194_299a526877_b.jpg',
            markup: createMarkup('Q2,Q3')
        },
        {
            photoUrl: 'https://farm8.staticflickr.com/7057/26770760412_eb538c6274_b.jpg',
            markup: createMarkup('Q4')
        },
        {
            photoUrl: 'https://farm8.staticflickr.com/7068/26258777564_55b90c67e8_b.jpg',
            markup: createMarkup('Q5')
        },
      ]
      photosWithCaption.forEach(photoWithCaption => {
          ctx.replyWithPhoto(photoWithCaption.photoUrl, photoWithCaption.markup);
      })
  });

  bot.command('EE2001_Tutorial_2', (ctx) => {
    const createMarkup = (content) => {
        const markup = Extra.markup();
        markup.caption = content;
        return markup;
    }
    const photosWithCaption = [
        {
            photoUrl: 'https://farm8.staticflickr.com/7273/26830892066_9dbe4a0225_b.jpg',
            markup: createMarkup('Q1,Q2')
        },
        {
          photoUrl: 'https://farm8.staticflickr.com/7419/26591858460_f2d2964be8_b.jpg',
          markup: createMarkup('Q3,Q4')
      }
    ]
    photosWithCaption.forEach(photoWithCaption => {
        ctx.replyWithPhoto(photoWithCaption.photoUrl, photoWithCaption.markup);
    })
});
//  /EE2001_Tutorial_\d/

bot.command("EE2001_Tutorial_3", (ctx) => {
    const createMarkup = (content) => {
        const markup = Extra.markup();
        markup.caption = content;
        return markup;
    }
    const photosWithCaption = [
        {
            photoUrl: 'https://farm8.staticflickr.com/7766/26831045826_de4fe06bc7_b.jpg',
            markup: createMarkup('Q1')
        },
        {
          photoUrl: 'https://farm8.staticflickr.com/7691/26864900685_f98ca5dcf3_b.jpg',
          markup: createMarkup('Q2,Q3')
      },
      {
          photoUrl: 'https://farm8.staticflickr.com/7303/26831046046_61f921db29_b.jpg',
          markup: createMarkup('Q4,Q5')
      },
    ]
    photosWithCaption.forEach(photoWithCaption => {
        ctx.replyWithPhoto(photoWithCaption.photoUrl, photoWithCaption.markup);
    })
});


if (process.env.NODE_ENV === "production") {
  bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
  bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);
} else {
  bot.launch();
}