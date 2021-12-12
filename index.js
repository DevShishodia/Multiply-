function multiply(a){
    a = parseInt(document.getElementById("input1").value);
                   
    return function(b){

        b = parseInt(document.getElementById("input2").value);

           return function (c) {

                c = parseInt(document.getElementById("input3").value);

                   
              alert("The Multiplicaton is = "+ a* b * c);
            }
        }
 
   }
multiply(a)(b)(c);