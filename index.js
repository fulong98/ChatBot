console.log("Running chatbot...");
const Telegraf = require('telegraf');

const API_KEY = "678358866:AAH6Nx1Nv6u-LKByxN8XMsSOJAHUW5Z-Zro"


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

const helpHandler = context => context.reply("Hello");
bot.start((ctx) => ctx.reply('Welcome'))
bot.help(helpHandler);
bot.command("hello",context => context.reply("Good Morning"));

bot.launch();