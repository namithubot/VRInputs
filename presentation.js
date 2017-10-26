var slides = [
    {
        "position" : "",
        "cameraPostion" : "",
        "title" : "Design of alternative input methods for webVR to get virtual reality experiences",
        "text" : ["By Ramila () and Shubham Kumar (4NI14IS105)"]
    },
    {
        "position" : "",
        "title" : "Contents",
        "cameraPostion": "",
        "text" : ["Introduction", "AR/VR/MR: Future?", "webVR", "webVR: Significance", "Challenges", "A-Frame", "\"Legacy\" Inputs", "Possible alternative inputs", "Chanllenges faced, facing and waiting and possible hacks", "To be done"]
    },
    {
        "position" : "",
        "title" : "Introduction",
        "cameraPostion": "",
        "text" : ["Virtual Reality: Virtual Reality, commonly reffered to as VR, is an umbrella term for all immersive experiences. It involves but not limited to 360[degree] videos and images. It takes user to a virtual world and let it interact with the system from that world itself.", 
                 "Augmented Reality: Augemented Reality, or AR, is a way of representing content and interacting with system by invoking virtual objects to the real world. An example would be photo filters.",
                 "Mixed reality: It lies somewhere between Virtual Reality and Augmented Reality. It can be of various types. One interesting type is that of bringing real world object to the virtual world. It's also called hybrid reality as it uses both the concepts of AR and VR."]
    
    },
    {
        "position" : "",
        "title" : "AR/VR/MR: Future?",
        "cameraPostion" : "",
        "text" : ["Virtual Reality is and is going to to be used in UI, gaming, simulations, cinematography etc.", 
                    "Augmented Reality is going to be used in gaming, notices, UI, photos, movies, cheap simulation etc",
                    "Mixed Reality is evolving and is considered to be used everywhere one can use the other two.",
                    "Essentially, all the three are a way to interact with systems. It's often said to be the next big thing and may replace the current interaction era, i.e. of bots, soon."]
    },
    {
        "position" : "",
        "title" : "webVR",
        "cameraPostion" : "",
        "text" : ["webVR is a JavaScript API to create in-browser Virtual Reality experiences. It uses three.js and ultimately webGL to create a virtual experiences and render it inside the browser."]
    },
    {
        "position" : "",
        "title" : "webVR: Significance",
        "cameraPostion" : "",
        "text" : ["webVR is considered the new webRTC.", 
                "It enables user to experience the virtual world from their browser itself.",
                "It makes Virtual Reality experiences cross platform.",
                "It is argued and intended to revolutionize the way we interact with web."]
    },
    {
        "position" : "",
        "title" : "Challenges",
        "cameraPostion" : "",
        "text" : ["Virtual Reality is a comparitively new technology. It is in its myriad form.",
                "Over that, webVR itself is highly experimental.",
                "There are challenges to simulate the virtual world like physics, spatial audio/speech, input, simulatiom techniques, granularity etc.",
                "We will be taking input as on challenge."]
    },
    {
        "position" : "",
        "title" : "A-Frame",
        "cameraPostion" : "",
        "text" : ["Developed by Mozilla", "It's an open source framework to create VR experiences.", 
                "It's more of a wrapper over webVR to simplify it, but with much more.", 
                "It parses the written code and uses webVR to create experiences.",
                "It makes it easier to experiment with webVR contents. Hence, we will be using it"]
    },
    {
        "position" : "",
        "title" : "\"Legacy\" inputs",
        "cameraPostion" : "",
        "text" : ["Text",
                "Radio Button",
                "Checkboxes",
                "Dropdowns",
                "Buttons",
                "Passwords",
                "Files"]
    },
    {
        "position" : "",
        "title" : "Possible alternative inputs",
        "cameraPostion" : "",
        "text" : ["Speech: WebSpeech (not supported on iOS)",
                "Images",
                "Raycaster (already implemented for clicks)",
                "3D Obkects",
                "3D Numpad",
                "Tap Code on a plane",
                "Extra hardwares"
                ]
    },
    {
        "position" : "",
        "title" : "Chanllenges faced, facing and waiting and possible hacks",
        "cameraPostion" : "",
        "text" : ["Browser compatibiltiy : iOS has poor compatibility. One solution is to use online agents. It'd be slow though",
                "File upload interface",
                "Hardware cost",
                "Variation in browser architecture",
                "Premature A-Frame/webVR (Movement, for example)",
                "Gesture and tap code requires a lot of memory (capturing the movement for long inside a browser)"]
    },
    {
        "position" : "",
        "cameraPostion" : "",
        "title" : "To be done",
        "text" : ["Password alternative", "Notifications inside VR (for OTP and others)", "File upload UI"]
    },
    {
        "position" : "",
        "cameraPostion" : "",
        "title" : "Contact and Contribute",
        "text" : ["Since, it open project, contributions and feedbacks are invited.",
                    "Telegram: https://t.me/namithubot", "GitHub: https://github.com/namithubot/VRInputs",
                    "Email: namithubot@yandex.com"]
    },
    {
        "position" : "",
        "cameraPostion" : "",
        "title" : "Thank you",
        "text" : ["For demo, open the link: https://namithubot.github.io/VRInputs/VR.html and put the carboard on",
                "Compatibity: Use Android devices with gyro and accelerometer"]
    }
]

var index = 0;

function refresh(){
    // document.querySelector("#cameraWrapper").setAttribute('position', {x: 1, y: 1, z: 1});
    document.getElementById("title").setAttribute('value', slides[index].title);
    // document.getElementsByTagName('a-text').forEach(function(elem){
    //     if(elem.id == "title") continue;
    //     elem.parentNode.removeChild(elem);
    // })
    var textString = ""
    slides[index].text.forEach(function(point){
        // var elem = document.createElement('a-text')
        // elem.value = point
        textString += "$ "+point + "\n\n"
    })
    console.log(textString);
    document.getElementById("text").setAttribute('value', textString)

}

document.onkeypress = function(e){
    if(e.key == "p")
        index = index + 1
    else if(e.key == "o")
        index = index - 1
    refresh();
}

refresh();