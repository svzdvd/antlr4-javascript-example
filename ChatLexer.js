// Generated from Chat.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0010|\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0003",
    "\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003",
    "\u0015\u0006\u0015c\n\u0015\r\u0015\u000e\u0015d\u0003\u0016\u0006\u0016",
    "h\n\u0016\r\u0016\u000e\u0016i\u0003\u0017\u0005\u0017m\n\u0017\u0003",
    "\u0017\u0003\u0017\u0006\u0017q\n\u0017\r\u0017\u000e\u0017r\u0003\u0018",
    "\u0003\u0018\u0006\u0018w\n\u0018\r\u0018\u000e\u0018x\u0003\u0018\u0003",
    "\u0018\u0002\u0002\u0019\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006",
    "\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u0002\u0015\u0002\u0017\u0002",
    "\u0019\u0002\u001b\u0002\u001d\u0002\u001f\u0002!\u0002#\u0002%\u000b",
    "\'\f)\r+\u000e-\u000f/\u0010\u0003\u0002\u000e\u0004\u0002CCcc\u0004",
    "\u0002UUuu\u0004\u0002[[{{\u0004\u0002JJjj\u0004\u0002QQqq\u0004\u0002",
    "WWww\u0004\u0002VVvv\u0003\u0002c|\u0003\u0002C\\\u0004\u0002\u000b",
    "\u000b\"\"\u0004\u0002**]]\u0004\u0002++__\u0002z\u0002\u0003\u0003",
    "\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003",
    "\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003",
    "\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f\u0003",
    "\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002%\u0003",
    "\u0002\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002",
    "\u0002\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002",
    "\u0002\u0002/\u0003\u0002\u0002\u0002\u00031\u0003\u0002\u0002\u0002",
    "\u00053\u0003\u0002\u0002\u0002\u00075\u0003\u0002\u0002\u0002\t7\u0003",
    "\u0002\u0002\u0002\u000b9\u0003\u0002\u0002\u0002\r;\u0003\u0002\u0002",
    "\u0002\u000f=\u0003\u0002\u0002\u0002\u0011?\u0003\u0002\u0002\u0002",
    "\u0013A\u0003\u0002\u0002\u0002\u0015C\u0003\u0002\u0002\u0002\u0017",
    "E\u0003\u0002\u0002\u0002\u0019G\u0003\u0002\u0002\u0002\u001bI\u0003",
    "\u0002\u0002\u0002\u001dK\u0003\u0002\u0002\u0002\u001fM\u0003\u0002",
    "\u0002\u0002!O\u0003\u0002\u0002\u0002#Q\u0003\u0002\u0002\u0002%S\u0003",
    "\u0002\u0002\u0002\'X\u0003\u0002\u0002\u0002)b\u0003\u0002\u0002\u0002",
    "+g\u0003\u0002\u0002\u0002-p\u0003\u0002\u0002\u0002/t\u0003\u0002\u0002",
    "\u000212\u0007<\u0002\u00022\u0004\u0003\u0002\u0002\u000234\u0007/",
    "\u0002\u00024\u0006\u0003\u0002\u0002\u000256\u0007+\u0002\u00026\b",
    "\u0003\u0002\u0002\u000278\u0007*\u0002\u00028\n\u0003\u0002\u0002\u0002",
    "9:\u0007]\u0002\u0002:\f\u0003\u0002\u0002\u0002;<\u0007_\u0002\u0002",
    "<\u000e\u0003\u0002\u0002\u0002=>\u00071\u0002\u0002>\u0010\u0003\u0002",
    "\u0002\u0002?@\u0007B\u0002\u0002@\u0012\u0003\u0002\u0002\u0002AB\t",
    "\u0002\u0002\u0002B\u0014\u0003\u0002\u0002\u0002CD\t\u0003\u0002\u0002",
    "D\u0016\u0003\u0002\u0002\u0002EF\t\u0004\u0002\u0002F\u0018\u0003\u0002",
    "\u0002\u0002GH\t\u0005\u0002\u0002H\u001a\u0003\u0002\u0002\u0002IJ",
    "\t\u0006\u0002\u0002J\u001c\u0003\u0002\u0002\u0002KL\t\u0007\u0002",
    "\u0002L\u001e\u0003\u0002\u0002\u0002MN\t\b\u0002\u0002N \u0003\u0002",
    "\u0002\u0002OP\t\t\u0002\u0002P\"\u0003\u0002\u0002\u0002QR\t\n\u0002",
    "\u0002R$\u0003\u0002\u0002\u0002ST\u0005\u0015\u000b\u0002TU\u0005\u0013",
    "\n\u0002UV\u0005\u0017\f\u0002VW\u0005\u0015\u000b\u0002W&\u0003\u0002",
    "\u0002\u0002XY\u0005\u0015\u000b\u0002YZ\u0005\u0019\r\u0002Z[\u0005",
    "\u001b\u000e\u0002[\\\u0005\u001d\u000f\u0002\\]\u0005\u001f\u0010\u0002",
    "]^\u0005\u0015\u000b\u0002^(\u0003\u0002\u0002\u0002_c\u0005!\u0011",
    "\u0002`c\u0005#\u0012\u0002ac\u0007a\u0002\u0002b_\u0003\u0002\u0002",
    "\u0002b`\u0003\u0002\u0002\u0002ba\u0003\u0002\u0002\u0002cd\u0003\u0002",
    "\u0002\u0002db\u0003\u0002\u0002\u0002de\u0003\u0002\u0002\u0002e*\u0003",
    "\u0002\u0002\u0002fh\t\u000b\u0002\u0002gf\u0003\u0002\u0002\u0002h",
    "i\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002\u0002",
    "\u0002j,\u0003\u0002\u0002\u0002km\u0007\u000f\u0002\u0002lk\u0003\u0002",
    "\u0002\u0002lm\u0003\u0002\u0002\u0002mn\u0003\u0002\u0002\u0002nq\u0007",
    "\f\u0002\u0002oq\u0007\u000f\u0002\u0002pl\u0003\u0002\u0002\u0002p",
    "o\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002",
    "\u0002rs\u0003\u0002\u0002\u0002s.\u0003\u0002\u0002\u0002tv\t\f\u0002",
    "\u0002uw\n\r\u0002\u0002vu\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002",
    "\u0002xv\u0003\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002yz\u0003\u0002",
    "\u0002\u0002z{\t\r\u0002\u0002{0\u0003\u0002\u0002\u0002\n\u0002bdi",
    "lprx\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function ChatLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

ChatLexer.prototype = Object.create(antlr4.Lexer.prototype);
ChatLexer.prototype.constructor = ChatLexer;

Object.defineProperty(ChatLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

ChatLexer.EOF = antlr4.Token.EOF;
ChatLexer.T__0 = 1;
ChatLexer.T__1 = 2;
ChatLexer.T__2 = 3;
ChatLexer.T__3 = 4;
ChatLexer.T__4 = 5;
ChatLexer.T__5 = 6;
ChatLexer.T__6 = 7;
ChatLexer.T__7 = 8;
ChatLexer.SAYS = 9;
ChatLexer.SHOUTS = 10;
ChatLexer.WORD = 11;
ChatLexer.WHITESPACE = 12;
ChatLexer.NEWLINE = 13;
ChatLexer.TEXT = 14;

ChatLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

ChatLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

ChatLexer.prototype.literalNames = [ null, "':'", "'-'", "')'", "'('", "'['", 
                                     "']'", "'/'", "'@'" ];

ChatLexer.prototype.symbolicNames = [ null, null, null, null, null, null, 
                                      null, null, null, "SAYS", "SHOUTS", 
                                      "WORD", "WHITESPACE", "NEWLINE", "TEXT" ];

ChatLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "T__3", "T__4", 
                                  "T__5", "T__6", "T__7", "A", "S", "Y", 
                                  "H", "O", "U", "T", "LOWERCASE", "UPPERCASE", 
                                  "SAYS", "SHOUTS", "WORD", "WHITESPACE", 
                                  "NEWLINE", "TEXT" ];

ChatLexer.prototype.grammarFileName = "Chat.g4";



exports.ChatLexer = ChatLexer;

