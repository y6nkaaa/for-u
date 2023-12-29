var texts = [
  // message 1
  "Dear Bellatrix, ^^ This is our second month in this relationship. Thank God for letting me meet someone like you. You are so beautiful, funny, kind.",
  // message 2
  "We said love to each other on October 25, 2023, and we became lovers. And then we spent a sweet week together. Sweetheart, I want to be with you from now to the end.^^I miss you!",
  // message 3
  "bellatrix....thank you for all the days that you made me feel loved and appreciated. I am out of words to tell how grateful I am to have you. Thank you for being the reason why I got my smile back after a very quiet and sorrowful phase. Thank you for coming into my life. I'm lucky to have you!!",
  // message 4
  "Before 2023 ends....",
  // message 5
  "I just want to tell you, thank you for coming into my life. You are actually making me smile and laugh. Thank you for being so understanding. Thank you for being my biggest supporter and thank you for caring about me. I really appreciate you so much. I love you a lot."
];

var images = [
  // image 1
  "<a href=\"#\" onclick=\"startTyping(1,'#message');return false;\">NEXT</a>",
  // image 2
  "<a href=\"#\" onclick=\"startTyping(2,'#message');return false;\">NEXT</a>",
  // image 3
  "<a href=\"#\" onclick=\"startTyping(3,'#message');return false;\">NEXT</a>",
  // image 4
  "<a href=\"#\" onclick=\"startTyping(4,'#message');return false;\">NEXT</a>",
  // additional image
  "</br></br><a href=\"#\" onclick=\"flower();return false;\">A ROSE FOR YOU</a>"
];

var delay = 100;
var currentMessageIndex = 0;
var currentChar = 1;
var destination = "#message";

function typing() {
  var currentText = texts[currentMessageIndex].substr(0, currentChar);
  var formattedText = currentText.replace(/\^\^/g, '</br>').replace(/\^/g, '');
  $(destination).html(formattedText);

  currentChar++;

  if (currentChar > texts[currentMessageIndex].length) {
    currentChar = 1;

    if (currentMessageIndex < texts.length - 1) {
      $(destination).append(images[currentMessageIndex]);
    } else {
      // Add this line to append the final image
      $(destination).append(images[images.length - 1]);
    }
  } else {
    setTimeout(typing, delay);
  }
}

function startTyping(index, destinationParam) {
  currentMessageIndex = index;
  destination = destinationParam;
  typing();
}

$(function () {
  typing();
});
