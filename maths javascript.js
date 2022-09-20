function rules(){
    
var x = document.getElementById("the-first").value;
var y = document.getElementById("the-seconde").value;
var z = document.getElementById("the-third").value;
var Δ = y*y-4*x*z
if(Δ < 0) {
    document.getElementById("demo").innerHTML= 
    `Ona: Δ = b²-4ac <br>
    <br>
    Alors: Δ = ${Δ} <br>
    <br>
    Puisque: ${Δ} < 0<br>
    <br>
    Donc: S = {Ø} ` ;
}else if( Δ == 0 ){
   var c =  -y/2*x;
    var solution3 = round(c,2) ;
    document.getElementById("demo").innerHTML=
`Ona: Δ = b²-4ac <br>
<br>
  Alors: Δ = ${Δ} <br>
  <br>
  Puisque: ${Δ} = 0 <br>
  <br>
  Donc: S =${solution3}`;
}else{
    
    var a = Math.sqrt(Δ);
    var b  = -y+a/2*x;
    var c =  -y-a/2*x;
    var solution1 = Math.round(b,2);
    var solution2 = Math.round(c,2) ;
    document.getElementById("demo").style.cssText = ' margin: 4 px;';
    document.getElementById("demo").innerHTML= 
    ` Ona: Δ= b²-4ac<br>
    <br>
    Alors: Δ = ${Δ}<br>
    <br>
    Puisque: ${Δ} > 0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Donc: S ={${solution1+ ','+ solution2}}<br>   
    <br>
    x1 = -b + √Δ /2a<br>
            = ${solution1}<br>
            <br>
    x2 = -b + √Δ /2a<br>
            = ${solution2}<br>
            <br>
`;
    }   
}