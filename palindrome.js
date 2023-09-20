//Reverse a string 
String.prototype.reverse = function() {
    return Array.from(this).reverse().join("");
}

//define a phrase object
function Phrase(content) {
    this.content = content;

    this.processor = function(string) {
        //fill in
    }

//return content processed for palindrome testing
this.processedContent = function processedContent() {
   //return this.processor(this.content);
   return this.content.toLowerCase();
}

//Return true for a palindrome, false otherwise
this.palindrome = function palindrome() {
return this.processedContent() === this.processedContent().reverse();
}
}

//translated phrases
function TranslatedPhrase(content, translation) {
    this.content = content;
    this.translation = translation;

    //returns translation processed for palindrome testing.
    this.processedContent = function processedContent() {
        return this.processor(this.translation);
    }
}
TranslatedPhrase.prototype = new Phrase();