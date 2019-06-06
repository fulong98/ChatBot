console.log("Running chatbot...");
const {moduleHandler, tutOneHandler,tutTwoHandler,tutThreeHandler} = require('./tutorialHandlers');

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

bot.help(({ reply }) => reply("Hello I'm the FuLong Bot.\n \start : Start the bot"));


// bot.command("Course", ctx => {
//     ctx.reply('Course List', Markup
//     .keyboard(['/EE2001_Circuit_Analysis', '/EE2004 Digital Electronics', '/EE2001_Tutorial_3'])
//     .oneTime()
//     .resize()
//     .extra())
// });

bot.command('EE2001_Circuit_Analysis', moduleHandler);

bot.command('EE2001_Tutorial_1', tutOneHandler);
bot.command('EE2001_Tutorial_2', tutTwoHandler);
bot.command('EE2001_Tutorial_3', tutThreeHandler);



if (process.env.NODE_ENV === "production") {
  bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
  bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);
} else {
  bot.launch();
}