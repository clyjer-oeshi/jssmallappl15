

const database = [
    {
        question:"Choose a Vaccine dog ?",
        a:"./img/vac.jpg",
        b:"./img/urine1.jpg",
        c:"./img/xray1.jpg",
        d:"./img/hospital5.jpg",
        correctanswer:"a"
    },

    {
        question:"Choose a Urine Test ?",
        a:"./img/vac.jpg",
        b:"./img/urine1.jpg",
        c:"./img/xray1.jpg",
        d:"./img/hospital5.jpg",
        correctanswer:"b"
    },

    {
        question:"Choose a X-ray ?",
        a:"./img/vac.jpg",
        b:"./img/urine1.jpg",
        c:"./img/xray1.jpg",
        d:"./img/hospital5.jpg",
        correctanswer:"c"
    },

    {
        question:"Choose a hospitalized dog ?",
        a:"./img/vac.jpg",
        b:"./img/urine1.jpg",
        c:"./img/xray1.jpg",
        d:"./img/hospital5.jpg",
        correctanswer:"d"
    }

];

const getcontainer = document.querySelector(".container");
const getquestion = document.querySelector(".question");
const getinputs   = document.querySelectorAll("input");
const getbtn      = document.querySelector('.btn');

const geta_img  = document.getElementById('a_img');
const getb_img  = document.getElementById('b_img');
const getc_img  = document.getElementById('c_img');
const getd_img  = document.getElementById('d_img');


let curridx = 0;
let score = 0;



function startquestion(){

    removeselected();

     // 0
    let currquestion = database[curridx];
    // console.log(currquestion); 

    getquestion.textContent = currquestion.question;

    geta_img.src= currquestion.a;
    getb_img.src= currquestion.b;
    getc_img.src= currquestion.c;
    getd_img.src= currquestion.d;
    

}

startquestion();



function getsingleinput(){ 

    let answer ;

    getinputs.forEach(function(getinput){
        if(getinput.checked){
            answer = getinput.id;
        }
    });

    return answer;

}


getbtn.addEventListener("click",function(){

    let getanswer = getsingleinput();
    console.log(getanswer);

    if(getanswer){
        //question 0
        //score 0

        if(getanswer === database[curridx].correctanswer){
            score++;

        }
        curridx++;
          // 0       <  1,2,3,4 
        if(curridx < database.length){
            startquestion();

        }else{
            //console.log(score);

            getcontainer.innerHTML = ` 
            <h3>Your Score is ${score*25} .</h3>
            <h4>You Correctly answered ${score}/${database.length} questions .</h4>
            <button type="button" id="verify-btn" class="btn" ondblclick="window.location.reload();">Double Click To Reload</button>
            
            `;

        }




    }else{
        window.alert("Please Choose a Image");

    }



});

function removeselected(){
    getinputs.forEach(function(getinput){
        return getinput.checked = false;
    });
}













