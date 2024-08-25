function onSubmit(){

    var resultDiv= document.getElementById("result");
    const form= document.getElementById('questionForm');

    const selectedactor= form.querySelector('[name="actor"]:checked').value;
     const image=document.getElementById('image');


    

    switch(selectedactor){

       case "mohanlal":
            image.src=("mohanlal.jpeg");
            document.getElementById("result").innerHTML = 'mohanlal';

            break;
        
        case "mammooty":
            image.src=("mammooty.jpeg");
            document.getElementById("result").innerHTML= 'mammooty';

            break;

        case "sharukhan":
            image.src=("sharukh.jpeg");
            document.getElementById("result").innerHTML= 'sharukhan';
        }

        
}