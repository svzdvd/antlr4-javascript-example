// Generated from Chat.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ChatListener = require('./ChatListener').ChatListener;
var grammarFileName = "Chat.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0010R\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0003\u0002\u0006\u0002\u0016\n\u0002",
    "\r\u0002\u000e\u0002\u0017\u0003\u0002\u0003\u0002\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0006\u0006.",
    "\n\u0006\r\u0006\u000e\u0006/\u0003\u0007\u0003\u0007\u0005\u00074\n",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005\u00079\n\u0007\u0003",
    "\u0007\u0005\u0007<\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\n\u0006\nL\n\n\r\n\u000e\nM\u0003\n\u0003\n\u0003\n\u0002\u0002\u000b",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0002\u0003\u0003\u0002\u000b",
    "\f\u0002S\u0002\u0015\u0003\u0002\u0002\u0002\u0004\u001b\u0003\u0002",
    "\u0002\u0002\u0006 \u0003\u0002\u0002\u0002\b#\u0003\u0002\u0002\u0002",
    "\n-\u0003\u0002\u0002\u0002\f;\u0003\u0002\u0002\u0002\u000e=\u0003",
    "\u0002\u0002\u0002\u0010D\u0003\u0002\u0002\u0002\u0012K\u0003\u0002",
    "\u0002\u0002\u0014\u0016\u0005\u0004\u0003\u0002\u0015\u0014\u0003\u0002",
    "\u0002\u0002\u0016\u0017\u0003\u0002\u0002\u0002\u0017\u0015\u0003\u0002",
    "\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002",
    "\u0002\u0002\u0019\u001a\u0007\u0002\u0002\u0003\u001a\u0003\u0003\u0002",
    "\u0002\u0002\u001b\u001c\u0005\u0006\u0004\u0002\u001c\u001d\u0005\b",
    "\u0005\u0002\u001d\u001e\u0005\n\u0006\u0002\u001e\u001f\u0007\u000f",
    "\u0002\u0002\u001f\u0005\u0003\u0002\u0002\u0002 !\u0007\r\u0002\u0002",
    "!\"\u0007\u000e\u0002\u0002\"\u0007\u0003\u0002\u0002\u0002#$\t\u0002",
    "\u0002\u0002$%\u0007\u0003\u0002\u0002%&\u0007\u000e\u0002\u0002&\t",
    "\u0003\u0002\u0002\u0002\'.\u0005\f\u0007\u0002(.\u0005\u000e\b\u0002",
    ").\u0005\u0010\t\u0002*.\u0005\u0012\n\u0002+.\u0007\r\u0002\u0002,",
    ".\u0007\u000e\u0002\u0002-\'\u0003\u0002\u0002\u0002-(\u0003\u0002\u0002",
    "\u0002-)\u0003\u0002\u0002\u0002-*\u0003\u0002\u0002\u0002-+\u0003\u0002",
    "\u0002\u0002-,\u0003\u0002\u0002\u0002./\u0003\u0002\u0002\u0002/-\u0003",
    "\u0002\u0002\u0002/0\u0003\u0002\u0002\u00020\u000b\u0003\u0002\u0002",
    "\u000213\u0007\u0003\u0002\u000224\u0007\u0004\u0002\u000232\u0003\u0002",
    "\u0002\u000234\u0003\u0002\u0002\u000245\u0003\u0002\u0002\u00025<\u0007",
    "\u0005\u0002\u000268\u0007\u0003\u0002\u000279\u0007\u0004\u0002\u0002",
    "87\u0003\u0002\u0002\u000289\u0003\u0002\u0002\u00029:\u0003\u0002\u0002",
    "\u0002:<\u0007\u0006\u0002\u0002;1\u0003\u0002\u0002\u0002;6\u0003\u0002",
    "\u0002\u0002<\r\u0003\u0002\u0002\u0002=>\u0007\u0007\u0002\u0002>?",
    "\u0007\u0010\u0002\u0002?@\u0007\b\u0002\u0002@A\u0007\u0006\u0002\u0002",
    "AB\u0007\u0010\u0002\u0002BC\u0007\u0005\u0002\u0002C\u000f\u0003\u0002",
    "\u0002\u0002DE\u0007\t\u0002\u0002EF\u0007\r\u0002\u0002FG\u0007\t\u0002",
    "\u0002GH\u0005\n\u0006\u0002HI\u0007\t\u0002\u0002I\u0011\u0003\u0002",
    "\u0002\u0002JL\u0007\n\u0002\u0002KJ\u0003\u0002\u0002\u0002LM\u0003",
    "\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002",
    "NO\u0003\u0002\u0002\u0002OP\u0007\r\u0002\u0002P\u0013\u0003\u0002",
    "\u0002\u0002\t\u0017-/38;M"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "'-'", "')'", "'('", "'['", "']'", "'/'", 
                     "'@'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      "SAYS", "SHOUTS", "WORD", "WHITESPACE", "NEWLINE", 
                      "TEXT" ];

var ruleNames =  [ "chat", "line", "name", "command", "message", "emoticon", 
                   "link", "color", "mention" ];

function ChatParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ChatParser.prototype = Object.create(antlr4.Parser.prototype);
ChatParser.prototype.constructor = ChatParser;

Object.defineProperty(ChatParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ChatParser.EOF = antlr4.Token.EOF;
ChatParser.T__0 = 1;
ChatParser.T__1 = 2;
ChatParser.T__2 = 3;
ChatParser.T__3 = 4;
ChatParser.T__4 = 5;
ChatParser.T__5 = 6;
ChatParser.T__6 = 7;
ChatParser.T__7 = 8;
ChatParser.SAYS = 9;
ChatParser.SHOUTS = 10;
ChatParser.WORD = 11;
ChatParser.WHITESPACE = 12;
ChatParser.NEWLINE = 13;
ChatParser.TEXT = 14;

ChatParser.RULE_chat = 0;
ChatParser.RULE_line = 1;
ChatParser.RULE_name = 2;
ChatParser.RULE_command = 3;
ChatParser.RULE_message = 4;
ChatParser.RULE_emoticon = 5;
ChatParser.RULE_link = 6;
ChatParser.RULE_color = 7;
ChatParser.RULE_mention = 8;

function ChatContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_chat;
    return this;
}

ChatContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ChatContext.prototype.constructor = ChatContext;

ChatContext.prototype.EOF = function() {
    return this.getToken(ChatParser.EOF, 0);
};

ChatContext.prototype.line = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LineContext);
    } else {
        return this.getTypedRuleContext(LineContext,i);
    }
};

ChatContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterChat(this);
	}
};

ChatContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitChat(this);
	}
};




ChatParser.ChatContext = ChatContext;

ChatParser.prototype.chat = function() {

    var localctx = new ChatContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ChatParser.RULE_chat);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 19; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 18;
            this.line();
            this.state = 21; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ChatParser.WORD);
        this.state = 23;
        this.match(ChatParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LineContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_line;
    return this;
}

LineContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LineContext.prototype.constructor = LineContext;

LineContext.prototype.name = function() {
    return this.getTypedRuleContext(NameContext,0);
};

LineContext.prototype.command = function() {
    return this.getTypedRuleContext(CommandContext,0);
};

LineContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

LineContext.prototype.NEWLINE = function() {
    return this.getToken(ChatParser.NEWLINE, 0);
};

LineContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterLine(this);
	}
};

LineContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitLine(this);
	}
};




ChatParser.LineContext = LineContext;

ChatParser.prototype.line = function() {

    var localctx = new LineContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, ChatParser.RULE_line);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 25;
        this.name();
        this.state = 26;
        this.command();
        this.state = 27;
        this.message();
        this.state = 28;
        this.match(ChatParser.NEWLINE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function NameContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_name;
    return this;
}

NameContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NameContext.prototype.constructor = NameContext;

NameContext.prototype.WORD = function() {
    return this.getToken(ChatParser.WORD, 0);
};

NameContext.prototype.WHITESPACE = function() {
    return this.getToken(ChatParser.WHITESPACE, 0);
};

NameContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterName(this);
	}
};

NameContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitName(this);
	}
};




ChatParser.NameContext = NameContext;

ChatParser.prototype.name = function() {

    var localctx = new NameContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, ChatParser.RULE_name);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 30;
        this.match(ChatParser.WORD);
        this.state = 31;
        this.match(ChatParser.WHITESPACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function CommandContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_command;
    return this;
}

CommandContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CommandContext.prototype.constructor = CommandContext;

CommandContext.prototype.WHITESPACE = function() {
    return this.getToken(ChatParser.WHITESPACE, 0);
};

CommandContext.prototype.SAYS = function() {
    return this.getToken(ChatParser.SAYS, 0);
};

CommandContext.prototype.SHOUTS = function() {
    return this.getToken(ChatParser.SHOUTS, 0);
};

CommandContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterCommand(this);
	}
};

CommandContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitCommand(this);
	}
};




ChatParser.CommandContext = CommandContext;

ChatParser.prototype.command = function() {

    var localctx = new CommandContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ChatParser.RULE_command);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 33;
        _la = this._input.LA(1);
        if(!(_la===ChatParser.SAYS || _la===ChatParser.SHOUTS)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 34;
        this.match(ChatParser.T__0);
        this.state = 35;
        this.match(ChatParser.WHITESPACE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MessageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_message;
    return this;
}

MessageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MessageContext.prototype.constructor = MessageContext;

MessageContext.prototype.emoticon = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EmoticonContext);
    } else {
        return this.getTypedRuleContext(EmoticonContext,i);
    }
};

MessageContext.prototype.link = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(LinkContext);
    } else {
        return this.getTypedRuleContext(LinkContext,i);
    }
};

MessageContext.prototype.color = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ColorContext);
    } else {
        return this.getTypedRuleContext(ColorContext,i);
    }
};

MessageContext.prototype.mention = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MentionContext);
    } else {
        return this.getTypedRuleContext(MentionContext,i);
    }
};

MessageContext.prototype.WORD = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChatParser.WORD);
    } else {
        return this.getToken(ChatParser.WORD, i);
    }
};


MessageContext.prototype.WHITESPACE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChatParser.WHITESPACE);
    } else {
        return this.getToken(ChatParser.WHITESPACE, i);
    }
};


MessageContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterMessage(this);
	}
};

MessageContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitMessage(this);
	}
};




ChatParser.MessageContext = MessageContext;

ChatParser.prototype.message = function() {

    var localctx = new MessageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ChatParser.RULE_message);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 43; 
        this._errHandler.sync(this);
        var _alt = 1;
        do {
        	switch (_alt) {
        	case 1:
        		this.state = 43;
        		this._errHandler.sync(this);
        		switch(this._input.LA(1)) {
        		case ChatParser.T__0:
        		    this.state = 37;
        		    this.emoticon();
        		    break;
        		case ChatParser.T__4:
        		    this.state = 38;
        		    this.link();
        		    break;
        		case ChatParser.T__6:
        		    this.state = 39;
        		    this.color();
        		    break;
        		case ChatParser.T__7:
        		    this.state = 40;
        		    this.mention();
        		    break;
        		case ChatParser.WORD:
        		    this.state = 41;
        		    this.match(ChatParser.WORD);
        		    break;
        		case ChatParser.WHITESPACE:
        		    this.state = 42;
        		    this.match(ChatParser.WHITESPACE);
        		    break;
        		default:
        		    throw new antlr4.error.NoViableAltException(this);
        		}
        		break;
        	default:
        		throw new antlr4.error.NoViableAltException(this);
        	}
        	this.state = 45; 
        	this._errHandler.sync(this);
        	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EmoticonContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_emoticon;
    return this;
}

EmoticonContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EmoticonContext.prototype.constructor = EmoticonContext;


EmoticonContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterEmoticon(this);
	}
};

EmoticonContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitEmoticon(this);
	}
};




ChatParser.EmoticonContext = EmoticonContext;

ChatParser.prototype.emoticon = function() {

    var localctx = new EmoticonContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ChatParser.RULE_emoticon);
    var _la = 0; // Token type
    try {
        this.state = 57;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 47;
            this.match(ChatParser.T__0);
            this.state = 49;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ChatParser.T__1) {
                this.state = 48;
                this.match(ChatParser.T__1);
            }

            this.state = 51;
            this.match(ChatParser.T__2);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 52;
            this.match(ChatParser.T__0);
            this.state = 54;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===ChatParser.T__1) {
                this.state = 53;
                this.match(ChatParser.T__1);
            }

            this.state = 56;
            this.match(ChatParser.T__3);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function LinkContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_link;
    return this;
}

LinkContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
LinkContext.prototype.constructor = LinkContext;

LinkContext.prototype.TEXT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(ChatParser.TEXT);
    } else {
        return this.getToken(ChatParser.TEXT, i);
    }
};


LinkContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterLink(this);
	}
};

LinkContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitLink(this);
	}
};




ChatParser.LinkContext = LinkContext;

ChatParser.prototype.link = function() {

    var localctx = new LinkContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ChatParser.RULE_link);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 59;
        this.match(ChatParser.T__4);
        this.state = 60;
        this.match(ChatParser.TEXT);
        this.state = 61;
        this.match(ChatParser.T__5);
        this.state = 62;
        this.match(ChatParser.T__3);
        this.state = 63;
        this.match(ChatParser.TEXT);
        this.state = 64;
        this.match(ChatParser.T__2);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ColorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_color;
    return this;
}

ColorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ColorContext.prototype.constructor = ColorContext;

ColorContext.prototype.WORD = function() {
    return this.getToken(ChatParser.WORD, 0);
};

ColorContext.prototype.message = function() {
    return this.getTypedRuleContext(MessageContext,0);
};

ColorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterColor(this);
	}
};

ColorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitColor(this);
	}
};




ChatParser.ColorContext = ColorContext;

ChatParser.prototype.color = function() {

    var localctx = new ColorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ChatParser.RULE_color);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(ChatParser.T__6);
        this.state = 67;
        this.match(ChatParser.WORD);
        this.state = 68;
        this.match(ChatParser.T__6);
        this.state = 69;
        this.message();
        this.state = 70;
        this.match(ChatParser.T__6);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function MentionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ChatParser.RULE_mention;
    return this;
}

MentionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MentionContext.prototype.constructor = MentionContext;

MentionContext.prototype.WORD = function() {
    return this.getToken(ChatParser.WORD, 0);
};

MentionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.enterMention(this);
	}
};

MentionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ChatListener ) {
        listener.exitMention(this);
	}
};




ChatParser.MentionContext = MentionContext;

ChatParser.prototype.mention = function() {

    var localctx = new MentionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ChatParser.RULE_mention);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 73; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 72;
            this.match(ChatParser.T__7);
            this.state = 75; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===ChatParser.T__7);
        this.state = 77;
        this.match(ChatParser.WORD);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.ChatParser = ChatParser;
