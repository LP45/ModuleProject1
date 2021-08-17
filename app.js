/*Built with HTML, CSS, JavaScript and jQuery (this game will be played using the DOM, not the console

A README.md file with explanations of the technologies used, the approach taken, a link to your live site, installation instructions, unsolved problems, etc.


Game must have!:
Must be a two player game (either against the computer or against another player)
Example: Blackjack: A player plays against the dealer. The dealer is the computer
Example: Connect Four: Two players pass the game between themselves to take turns
A win state - a way for the player to win the game
High score can be considered a win state

A lose state - a way for the player to lose the game
Example: Blackjack - a player must be able to lose all of their money with losing hands and cannot play if their bankroll is at 0
Example: Connect Four - the other player has won or there are no possible plays left

A way to keep playing if the game is not over

Multiple rounds to play - a round must begin, end, and there must be a way to check if the game should continue or the overall game is won or lost
Example: Blackjack: a player takes turns playing a hand versus a computer - the player's hand can either win, lose or tie the dealer. If the player has enough money in their bankroll they can keep playing. A player must be able to win several rounds and increase their bankroll
Example: Connect Four: two (non-computer) players take turns adding chips to the board. The game will check if a player won or if the board is full and there are no more plays possible. A player gets four chips in a row (vertically or horizontally)- one person wins, one loses, there are no further plays in this case
*/



//User = Me
//Computer = Math.Random
//Multiple rounds(a way to keeptrack of score/POINTS)
//Win = Most Points
//Lose = Least Points
let player = 1;
let robot = 2;
let points;
let rounds = 3;

const rock = document.querySelector(".button1");
const paper = document.querySelector(".button2");
const scissors = document.querySelector(".button3");



//document.querySelector(".PlayerOption").


/*if (HumanSelection == rock) {
    rock > scissors;
    rock < paper;
    console.log(HumanSelection)

}
*/

const userChoice = (event) => {
    console.log("You clicked on " + event.target.value)
}

//event is the behavior that we are listenning to. In this case it is a click. Once the user clicks, it creates an event object that has many properties that you can access. 
//Target refers to the dom element we click on

rock.addEventListener("click", (event) => {
    userChoice(event)
    console.log(event.target.value)

})
paper.addEventListener("click", (event) => {
    userChoice(event)

})
scissors.addEventListener("click", (event) => {
    userChoice(event)

})
//Compare user userchoice vs computer choice
//Winner gets a point  = point+=1
/*function rounds() {
    console.log("Please User go 1st!")
    if (player == 1) {


    }
}*/
