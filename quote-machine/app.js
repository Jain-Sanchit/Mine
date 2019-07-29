let quotes=[
    'Walter White: “I am not in danger, I am the danger.”',

'Walter White: There is gold in the streets just waiting for someone to come and scoop it up.',

'Saul Goodman :  Congratulations, you’ve just left your family a second-hand Subaru.',

'Jesse Pinkman: Nah, come on man. Some straight like you, giant stick up his ass at like what, sixty, he’s just gonna break bad?'
,
'Walter White:  “We’re done when I say we’re done"'
,
'Walter White: You clearly don’t know who you’re talking to, so let me clue you in. I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No! I am the one who knocks!'
,
 'Mike Ehrmantraut  : You are not the guy. You’re not capable of being the guy. I had a guy, but now I don’t. You are not the guy.'
,
'Walter White: “I am not in danger, I am the danger."'
,
'Walter White: There is gold in the streets just waiting for someone to come and scoop it up'
,
'Saul Goodman :  Congratulations, you’ve just left your family a second-hand Subaru'
,
'Jesse Pinkman: Nah, come on man. Some straight like you, giant stick up his ass at like what, sixty, he’s just gonna break bad?'
,
'Walter White:  “We’re done when I say we’re done”'
,
'Walter White: You clearly don’t know who you’re talking to, so let me clue you in. I am not in danger, Skyler. I am the danger. A guy opens his door and gets shot, and you think that of me? No! I am the one who knocks!'
,
'Mike Ehrmantraut  : You are not the guy. You’re not capable of being the guy. I had a guy, but now I don’t. You are not the guy.'
,
'Jesse Pinkman: Ah, like I came to you, begging to cook meth. Oh, hey, nerdiest old dude I know, you wanna come cook crystal? Please. I’d ask my diaper-wearing granny, but her wheelchair wouldn’t fit in the RV.'
,
'Walter White: Well, technically, chemistry is the study of matter. But I prefer to see it as the study of change.'
,
'Walter White:  Smoking marijuana, eating cheetos, and masturbating do not constitute plans in my book.'
,
'Walter White: If you don’t know who I am, then maybe your best course would be to tread lightly.'
,
'Saul Goodman:   I’m not saying it’s not bad. It’s bad. But it could be worse.'
,
'Walter White: We tried to poison you. We tried to poison you because you are an insane, degenerate piece of filth and you deserve to die.'
,
'Jesse Pinkman  :  Did you know that there’s an acceptable level of rat turds that can go into candy bars? It’s the government, jack. Even government doesn’t care that much about quality. You know what is okay to put in hot dogs? Huh? Pig lips and assholes. But I say, hey, have at it bitches ’cause I love hot dogs.'
,
'Walter White:  Right now, what I need, is for you to climb down out of my ass. Can you do that? Will you do that for me honey? Will you please, just once, get off my ass? You know? I’d appreciate it. I really would.'
,
'Saul : “If you’re committed enough, you can make any story work. I once told a woman I was Kevin Costner and it worked because I believed it”'
,
 'Gus Fring : If you try to interfere, this becomes a much simpler matter. I will kill your wife. I will kill your son. I will kill your infant daughter.'
,
'Tuco Salamanaca : “This kicks like a mule with its balls wrapped in duct tape!” '
,
'Jesse Pinkman : So you do have a plan! Yeah Mr. White! Yeah Science!”Jesse Pinkman : “Some straight like you, giant stick up his ass, age what, 60? He’s just gonna break bad?”'
,
'Walter White:  Right now, what I need, is for you to climb down out of my ass. Can you do that? Will you do that for me honey? Will you please, just once, get off my ass? You know? I’d appreciate it. I really would.'
,
'Saul : “If you’re committed enough, you can make any story work. I once told a woman I was Kevin Costner and it worked because I believed it”'
,
 'Gus Fring : If you try to interfere, this becomes a much simpler matter. I will kill your wife. I will kill your son. I will kill your infant daughter.'
,
'Tuco Salamanaca : “This kicks like a mule with its balls wrapped in duct tape!” '
]

function newQuote(){
var num=Math.floor(Math.random()*30);
document.getElementById('quoteDisplay').innerHTML="<blockquote class='blockquote text-center'><p class='mb-0'>"+quotes[num]+"</p></blockquote>";


}

