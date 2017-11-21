          var index = 0;
           questions = [
                {
                    "question" : "Instruction: Stand inside the ring, use green and red boxes for navigation. Speak your answers and confirm it once appeared"
                },
                {
                    "type"      : "text",
                    "variable" : "name",
                    "question" : "What is your name?"
                },
                {
                    "type"      : "text",
                    "variable" : "age",
                    "question" : "What is your age?"
                },
                {
                    "variable" : "sex",
                    "type"  : "radio",
                    "question" : "What's your sex?",
                    "options" : ["male", "female", "others"],
                    "specialInfo" : "Disadvantage: Similar sounding words like mail and male. Try it. Solution: use custom dictionary with the options only."
                },
                {
                    "type"  : "check",
                    "variable" : "locationHistory",
                    "question"  : "Where have you been to?",
                    "options" : ["Mysuru", "Bengaluru", "New Delhi", "Toronto"],
                    "delimiter" : ["with"],
                    "specialInfo" : "Say with to separate two options"
                }
            ]
            answers = {}
            function listen(){
                answers[questions[index].variable] = null;
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var rec = new SpeechRecognition();
		        rec.start();	
		        rec.addEventListener('result', function(e){
                var last = e.results.length - 1;
                var word = e.results[last][0];
                // console.log(index);
                var spoken = word.transcript;
                console.log(questions[index].variable);
                if(questions[index].type == "radio"){
                    questions[index].options.forEach(function(element) {
                        if(spoken==element){
                            answers[questions[index].variable] = spoken;
                            //break;
                        }
                    });
                    if(!answers[questions[index].variable]){
                        //error
                    }
                }
                else if(questions[index].type == "check"){
                    answers[questions[index].variable] = []
                    var collected = spoken.split(questions[index].delimiter);
                    for(i=0; i<collected.length; i++){
                        collected[i] = collected[i].trim();
                    }
                    collected.forEach(function(elem){
                        questions[index].options.forEach(function(element) {
                        if(elem==element){
                            answers[questions[index].variable].push(elem);
                            //break;
                        }
                        });
                    })
                    if(answers[questions[index].variable].length == collected.length){
                        //error
                    }
                }
                else
			        answers[questions[index].variable] = word.transcript ;
                //console.log(word.transcript)
                document.getElementById("answer").setAttribute('value', word.transcript);
                })
    }

        // document.addEventListener("keypress", function(e){
        //     if(e.key=="k" && index<2){
        //         index =index + 1
        //     }
        //     document.getElementById("question").setAttribute('value', questions[index]["question"] )
        // })
        AFRAME.registerComponent('listener', {
  tick: function () {
    //console.log(this.el.getAttribute('position'));
  }
});
    AFRAME.registerComponent('form-text', {
        init:function(){
            //var index = 0;
           
            console.log("initiating")
            this.el.addEventListener('fusing', function(e){
                console.log(index)
                // var cameraPos = document.getElementsByTagName("a-camera")[0].getAttribute("position")
                // if(cameraPos.x )
                // TODO: Activated only when camera inside the ring
                if(e.srcElement.id=="next" && index<questions.length-1)
                    index =index + 1
                else if(e.srcElement.id=="back" && index>0)
                    index =index - 1
                document.getElementById("question").setAttribute('value', questions[index]["question"])
                if(answers[questions[index].variable])
                    document.getElementById("answer").setAttribute('value', answers[questions[index].variable])
                else
                    document.getElementById("answer").setAttribute('value', "")
            })
        }
    })
    AFRAME.registerComponent('record', {
        init: function(){
            this.el.addEventListener('fusing', listen)
        },
        update:function(previousListener){
            this.el.removeEventListener("fusing", previousListener);
            this.el.addEventListener("fusing", this.data)
        }
    })