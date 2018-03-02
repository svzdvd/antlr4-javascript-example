// Generated from Chat.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ChatParser.
function ChatListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ChatListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ChatListener.prototype.constructor = ChatListener;

// Enter a parse tree produced by ChatParser#chat.
ChatListener.prototype.enterChat = function(ctx) {
};

// Exit a parse tree produced by ChatParser#chat.
ChatListener.prototype.exitChat = function(ctx) {
};


// Enter a parse tree produced by ChatParser#line.
ChatListener.prototype.enterLine = function(ctx) {
};

// Exit a parse tree produced by ChatParser#line.
ChatListener.prototype.exitLine = function(ctx) {
};


// Enter a parse tree produced by ChatParser#name.
ChatListener.prototype.enterName = function(ctx) {
};

// Exit a parse tree produced by ChatParser#name.
ChatListener.prototype.exitName = function(ctx) {
};


// Enter a parse tree produced by ChatParser#command.
ChatListener.prototype.enterCommand = function(ctx) {
};

// Exit a parse tree produced by ChatParser#command.
ChatListener.prototype.exitCommand = function(ctx) {
};


// Enter a parse tree produced by ChatParser#message.
ChatListener.prototype.enterMessage = function(ctx) {
};

// Exit a parse tree produced by ChatParser#message.
ChatListener.prototype.exitMessage = function(ctx) {
};


// Enter a parse tree produced by ChatParser#emoticon.
ChatListener.prototype.enterEmoticon = function(ctx) {
};

// Exit a parse tree produced by ChatParser#emoticon.
ChatListener.prototype.exitEmoticon = function(ctx) {
};


// Enter a parse tree produced by ChatParser#link.
ChatListener.prototype.enterLink = function(ctx) {
};

// Exit a parse tree produced by ChatParser#link.
ChatListener.prototype.exitLink = function(ctx) {
};


// Enter a parse tree produced by ChatParser#color.
ChatListener.prototype.enterColor = function(ctx) {
};

// Exit a parse tree produced by ChatParser#color.
ChatListener.prototype.exitColor = function(ctx) {
};


// Enter a parse tree produced by ChatParser#mention.
ChatListener.prototype.enterMention = function(ctx) {
};

// Exit a parse tree produced by ChatParser#mention.
ChatListener.prototype.exitMention = function(ctx) {
};



exports.ChatListener = ChatListener;