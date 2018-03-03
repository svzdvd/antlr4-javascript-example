
const http = require('http');
const antlr4 = require('antlr4/index');
const ChatLexer = require('./ChatLexer').ChatLexer;
const ChatParser = require('./ChatParser').ChatParser;
const HtmlChatListener = require('./HtmlChatListener').HtmlChatListener;

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.write('<html><body>');

    const input = 'peter SAYS: hello :-) \npaul SHOUTS: ayo :)\n';

    const chars = new antlr4.InputStream(input);
    const lexer = new ChatLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new ChatParser(tokens);
    parser.buildParseTrees = true;

    /**
     * We set the root node of the tree as a chat rule. 
     * You want to invoke the parser specifying a rule which typically is the first rule. 
     * However you can actually invoke any rule directly.
     */
    const tree = parser.chat();
    
    const htmlChat = new HtmlChatListener(res);
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(htmlChat, tree);

    res.write('</body></html>');
    res.end();

}).listen(1337);
