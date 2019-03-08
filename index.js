console.log("Running chatbot...");
const Telegraf = require('telegraf');
const URL = process.env.URL || "https://chatbotxxxasd.herokuapp.com/" ;
const PORT = process.env.PORT || 3000;
const API_KEY = "678358866:AAH6Nx1Nv6u-LKByxN8XMsSOJAHUW5Z-Zro";


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

bot.help(({ reply }) => reply("Hello I'm the Solex Bot"));

const coffeeOrderSessions = [];

bot.command("orderopen", ctx => {
  const { from } = ctx.update.message;
  const coffeeGif = "CgADBAADdwADg731Uoi1wlQtUhaEAg";
  ctx.replyWithAnimation(coffeeGif, { caption: "Coffee Order Open!" });
  const newSession = {
    from,
    orders: [],
    isOrderOpen: true
  };
  coffeeOrderSessions.push(newSession);
});

bot.start(ctx => ctx.reply("Hello"));

if (process.env.NODE_ENV === "production") {
  bot.telegram.setWebhook(`${URL}/bot${API_TOKEN}`);
  bot.startWebhook(`/bot${API_TOKEN}`, null, PORT);
} else {
  bot.launch();
}