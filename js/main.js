

var randomStrings = [
        "Let's knock out some of this low hanging fruit.",
        "Let's create a list of action items.",
        "We need to make this list actionable.", 
        "I'm honestly not sure. It's like herding cats in there.",
        "Above all else, it's time to innovate.",
        "We need to create more team synergy.",
        "Let's take this one offline.",
        "Let's regroup EOD to ensure the whole team is in alignment.", 
        "We need a best in class experience.",
        "Let's run this one up the flagpole with all the key players.",
        "We need to establish whether the ROI is worth it.",
        "Pressure is high. This feature needs to be state of the art.", 
        "We should come to a strategic decision around this.",
        "We may need to do a little horse trading.",
        "We need some face time with all the key players.",
        "Well, first thing's first: how can we monetize this?",
        "We should regroup on Monday to talk about 'next steps'.",
        "We should set the expection up front that we're delivering to the c-suite.",
        "Let's put that one in the parking lot.",
    ];

  
 
var randomDiv = document.getElementById("myRandomDiv");
    
    document.getElementById("myButton").addEventListener("click", function() {
          randomIndex = Math.round((Math.random()*randomStrings.length-1));
          newText = randomStrings[randomIndex];
          randomDiv.innerHTML = newText;
    });
    