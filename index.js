console.log("Running chatbot...");
const Telegraf = require('telegraf');
const URL = process.env.URL || "https://chatbotxxxasd.herokuapp.com/" ;
const PORT = process.env.PORT || 3000;
const API_KEY = "678358866:AAH6Nx1Nv6u-LKByxN8XMsSOJAHUW5Z-Zro";

bot.use(Telegraf.log());
bot.help(({rpely}) => reply("Hello I'm the Telegram Bot"));
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
bot.start(ctx => ctx.reply("Hello"));
const helpHandler = context => context.reply("Hello");
bot.start((ctx) => ctx.reply('Welcome'));
bot.help(helpHandler);
bot.command("hello",context => context.reply("Good Morning"));

bot.launch();