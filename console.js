console.log = function(args) {
  var css = "font-size: 12px; border-bottom: 1px dotted #aaa; padding-bottom: 4px;";
  var div = document.createElement("div");
  var s = JSON.stringify(args);
  var node = document.createTextNode(s);

  div.style.cssText = css;
  div.appendChild(node);
  document.body.appendChild(div);
};