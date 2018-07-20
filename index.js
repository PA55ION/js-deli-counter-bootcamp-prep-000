var katzDeli = [];

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return "Welcome, " + name +  ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(i) {
  if(i.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    var name = i[0];
    i.splice(0, 1);
    return "Currently serving " + name + ".";
  }
}

function currentLine(l) {
  var line = [];
  if (l.length === 0) {
    return "The line is currently empty.";
  } else {
    for(let i = 0; i < l.length; i++) {
      line += (i + 1) + "." + l[i] + ","
    }
    line = line.splice(0, line.length - 2);
    return "The line is currently " + line;
  }
}
