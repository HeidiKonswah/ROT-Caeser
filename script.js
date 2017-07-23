function rot13(str){
  str = str.toUpperCase();
  var letters = str.split("");
  
  return letters.map(function(char){
    char = char.charCodeAt();
    if(char>= 65 && char<=77){
       char += 13;
       }else if(char>=78 && char<=90){
         char -= 13;
       }
    return String.fromCharCode(char);
  }).join('').toLowerCase();
}

document.getElementById("btn").addEventListener("click", function(){
  var val = document.getElementById("text").value;
  document.getElementById("text").value = rot13(val);
  val = "";
});
