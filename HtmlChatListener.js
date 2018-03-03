
const ChatParser = require('./ChatParser').ChatParser;
const ChatListener = require('./ChatListener').ChatListener;

class HtmlChatListener extends ChatListener {

    constructor(res) {
        super();
        this.Res = res;
    }

    enterName(ctx) {
        this.Res.write("<strong>");
    }

    exitName(ctx) {
        this.Res.write(ctx.WORD().getText());
        this.Res.write("</strong> ");
    }

    exitEmoticon(ctx) {
        const emoticon = ctx.getText();

        if (emoticon == ':-)' || emoticon == ':)') {
            ctx.formattedText = '&#9786;';
        }

        if (emoticon == ':-(' || emoticon == ':(') {
            ctx.formattedText = '&#9785;';
        }
    }

    exitMessage(ctx) {             
        let text = '';

        for (let index = 0; index <  ctx.children.length; index++) {
            if (ctx.children[index].formattedText != null) {
                text += ctx.children[index].formattedText;
            } else {
                text += ctx.children[index].getText();
            }
        }

        if (ctx.parentCtx instanceof ChatParser.LineContext == false) {
            ctx.formattedText = text; 
        } else {
            this.Res.write(text);
            this.Res.write('</span>');
        }
    }

    enterCommand(ctx) {
        if (ctx.SAYS() != null) {
            this.Res.write(ctx.SAYS().getText() + ': <span>');
        }

        if (ctx.SHOUTS() != null) {
            this.Res.write(ctx.SHOUTS().getText() + ': <span style="text-transform: uppercase">');
        }
    }

    exitLine(ctx) {
        this.Res.write('<br>');
    }
}

exports.HtmlChatListener = HtmlChatListener;
