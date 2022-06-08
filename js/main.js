let count = document.querySelectorAll('textarea')[0],
characterCount = document.querySelector('#characterCount');

// updating the displayed stats after every keypress
count.addEventListener('keyup', function() {

  //keeping the console clean to make only the latest data visible
//   console.clear();

  // character count
  // just displaying the input length as everything is a character
  characterCount.innerHTML = count.value.length;

  
  myFunction();
});



function myFunction() {
  let tString = document.getElementById("myTextarea").value;
  const vowels = ['a', 'e', 'i', 'o', 'u', '.'];
  let resultArray = [];
  
  // If the string includes either an 'e' or 'u', then double.
  for (let i = 0; i < tString.length; i++){
  if(tString[i] === "e"){
    resultArray.push(tString[i]);
  };
  if(tString[i] === "u"){
  resultArray.push(tString[i]);
  };
  for (let j=0; j < vowels.length; j++){
    if(tString[i] === vowels[j]){
      resultArray.push(vowels[j]);
    };
    if(tString[i] === "."){
        resultArray.push(" ");
        };
  }
  };
  

  let resultString = resultArray.join('');
  
  resultString = resultString.toUpperCase();

  if(resultString !== "") {
    document.getElementById('whalePlace').style.display="none";
    document.getElementById("whaleTalk").innerHTML = resultString;
    document.getElementById('whaleTalk').style.display="block";
 } else {
    document.getElementById('whalePlace').style.display="block";
    document.getElementById('whaleTalk').style.display="none";
 }
  
};

// Audio Player
var audio = new Audio("http://www.stephaniequinn.com/Music/Allegro%20from%20Duet%20in%20C%20Major.mp3");

$('#play-pause-button').on("click",function(){
  if($(this).hasClass('fa-play'))
   {
     $(this).removeClass('fa-play');
     $(this).addClass('fa-pause');
     audio.play();
   }
  else
   {
     $(this).removeClass('fa-pause');
     $(this).addClass('fa-play');
     audio.pause();
   }
});

audio.onended = function() {
     $("#play-pause-button").removeClass('fa-pause');
     $("#play-pause-button").addClass('fa-play');
};