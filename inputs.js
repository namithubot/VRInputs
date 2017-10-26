          var index = 0;
           questions = [
                {
                    "question" : "<b>Instruction</b>: Stand inside the ring, use green and red boxes for navigation. Speak your answers and confirm it once appeared"
                },
                {
                    "variable" : "name",
                    "question" : "What is your name?"
                },
                {
                    "variable" : "age",
                    "question" : "What is your age?"
                },
                {
                    "variable" : "sex",
                    "type"  : "radio",
                    "question" : "What's your sex?"
                }
            ]
            answers = {}
            function listen(){
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                var rec = new SpeechRecognition();
		        rec.start();	
		        rec.addEventListener('result', function(e){
                var last = e.results.length - 1;
                var word = e.results[last][0];
                // console.log(index);
                console.log(questions[index].variable);
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
                if(e.srcElement.id=="next" && index<2)
                    index =index + 1
                else if(e.srcElement.id=="back" && index>0)
                    index =index - 1
                document.getElementById("question").setAttribute('value', questions[index]["question"] )
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