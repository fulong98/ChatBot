const Markup = require('telegraf/markup')
const Extra = require('telegraf/extra')

const moduleHandler = ctx => {
    ctx.reply('Tutorial Answer', 
                Markup
                    .keyboard(['/EE2001_Tutorial_1', '/EE2001_Tutorial_2', '/EE2001_Tutorial_3'])
                    .oneTime()
                    .resize()
                    .extra()
    )
};

const tutOneHandler = ctx => {
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
}

const tutTwoHandler = ctx => {
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
      },
    ]
    photosWithCaption.forEach(photoWithCaption => {
        ctx.replyWithPhoto(photoWithCaption.photoUrl, photoWithCaption.markup);
    })
}

module.exports = {
    moduleHandler,
    tutOneHandler,
    tutTwoHandler
};