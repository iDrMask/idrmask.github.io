const lines = ["I'd like to take you to the movies but they don't let you bring your own snacks in.","No pen, no paper but you still draw my attention.","All the good pick up lines are taken but you aren't.","This must be a museum because you're a work of art.","Are you WiFi? Because I feel a connection.","I'm not even playing cards but somehow I pulled a Queen.","I didn't even have to run to catch these butterflies.","I'm lost. Can you give me directions to your heart?","Well, here I am. What are your other two wishes?","Hey, how was heaven when you left it?"];
let output = document.getElementById('output');

function getRandomElementIndex(){
    let random = Math.random() * lines.length;
    return Math.floor(random);

}

function RandomPickUpLine(){
    let randomElement = lines[getRandomElementIndex()];
    output.innerHTML = randomElement
}
