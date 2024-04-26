function startclassification(){
    navigator.mediaDevices.getUserMedia({
         audio:true
    });
    sound = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/nRoi_MBzz/model.json', model_loaded);
}

function model_loaded(){
    sound.classify(gotResult);
}

function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        
        random_number_a = Math.floor(Math.random() * 255);
        random_number_b = Math.floor(Math.random() * 255);
        random_number_c = Math.floor(Math.random() * 255);

        document.getElementById("sound").innerHTML = result[0].label;
        document.getElementById("accuracy").innerHTML = (result[0].confidence *100).toFixed(2) +"%"

        document.getElementById("sound").style.color = "rgb(" + random_number_a+","+random_number_b+","+random_number_c+")"
        document.getElementById("accuracy").style.color = "rgb(" + random_number_a+","+random_number_b+","+random_number_c+")"

        img1 = document.getElementById('alien1png')
        img2 = document.getElementById('alien2png')
        img3 = document.getElementById('alien3png')
        img4 = document.getElementById('alien4png')

        if(result[0].label =="Clap"){
            img1.src = "aliens-01.gif"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }
        else if(result[0].label =="Snap"){
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.gif"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.png"
        }else if(result[0].label =="Knoking"){
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.gif"
            img4.src = "aliens-04.png"
        }else {
            img1.src = "aliens-01.png"
            img2.src = "aliens-02.png"
            img3.src = "aliens-03.png"
            img4.src = "aliens-04.gif"
        }
    }  

}


