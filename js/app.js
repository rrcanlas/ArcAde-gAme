//rose renie

//app.js

// Enemies our player must avoid

var Enemy = function(x, y, speed) {

    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';

};

// initializes score selector

var score = document.querySelector('.score');
var counter = 0;

// Update the enemy's position
// Parameter: dt, a time delta between ticks

Enemy.prototype.update = function(dt) {

    // any movement multiplied by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    if (this.x !== 506) {
        this.x = this.x + this.speed * dt;
        console.log(this.speed);

        if (Math.round(this.x) >= 506) {
            this.x = 0;            
        }         
    }  

    //player collision against the enemy. score resets to 0

    if (player.x < Math.round(this.x) + 85 && player.x + 85 > Math.round(this.x) &&
        player.y < (this.y + 65) && (65 + player.y) > this.y) {
        player.x = 200;
        player.y = 400;
        counter = 0;
        score.innerText = counter;
        console.log(counter);
    }               
};

// draws the enemy on the screen

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//initializing the x and y position of player

var Player = function() {

    this.x = 200;
    this.y = 400;    
    this.sprite = 'images/char-pink-girl.png';

};

// draws the player on the screen

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.update = function(dt) {

};

// movement of the players position with every arrow key pressed

Player.prototype.handleInput = function(pindot) {
    
    console.log(pindot);
    if (pindot == 'left') {
        if (this.x !== 0) {
            this.x = this.x - 100;
        
        console.log(player.x);
        }
    }
    if (pindot == 'right') {
        if (this.x !== 400) {
            this.x = this.x + 100;
        
        console.log(player.x);
        }
    }
    if (pindot == 'up') {
        if (this.y !== -25) {
            this.y = this.y - 85;
        
        console.log(player.y);     
        }

    }
    if (pindot == 'down') {
        if (this.y !== 400) {
            this.y = this.y + 85;

        console.log(player.y);
        }
    }

//player scores 1 point with every achieved goal

    if (this.y == -25) {
        this.y = 400;
        counter++;
        score.innerText = counter;
        console.log(counter);
    }

};

// instantiating the objects of the player and enemy.
// initializing the enemy's designated starting x and y position
// and randomly changing their speed

const enemy1 = new Enemy(0 , 65, 30 + Math.floor(Math.random() * 170));
const enemy2 = new Enemy(0 , 145, 70 + Math.floor(Math.random() * 150));
const enemy3 = new Enemy(0 , 230, 100 + Math.floor(Math.random() * 120));
const allEnemies = [enemy1, enemy2, enemy3];
const player = new Player();

// This listens for key presses and sends the keys to the
// Player.handleInput() method. You don't need to modify this.

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
