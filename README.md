

# LAB | Canvas HUGO

## Introduction

We are ready to start making some games with `canvas` help, so in this first exercise, we will a **Car Race** using some basic animations we learned today.

Remember, you have the Learning Units to check any concept you might need. We are working with the `2D` context, so you should think the canvas is a cartesian plane, where you can move elements changing their position in any of the `axis`.

## Requirements

- Fork this repo
- Clone this repo

## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create Pull Request so your TAs can check up your work.

## Instructions

### Iteration 1: Draw the game board

![](https://raw.githubusercontent.com/ElvanIpeker/mb/master/images/hugo-elvan-1.png?token=GHSAT0AAAAAABR6P7UFG2UVB6XBSDQG52FGYSKAPRQ)

The first thing we need is to create our board. The left side of the image is already on the HTML file, but when we click on the **Start Game** button, we need to create the canvas and display the road.

The canvas HTML element is already part of the HTML starter code provided in the `index.html` file. In the `images` folder, you can find the image of the raod.

### Iteration 2: Draw the car



![](https://raw.githubusercontent.com/ElvanIpeker/mb/master/images/hugo-elvan-2.png?token=GHSAT0AAAAAABR6P7UFZ4YB4K2CBFQ4X244YSKAQ6Q)

Once we have our road, we need the player's car. The same as for the raod, in the `images` folder, you will find a `.png` file you should use.

### Iteration 3: Make the car move right and left

In our game, the player will only be able to move the car to the right and left. Using `left` and `right` arrows, the player should be able to move the car.

:bulb: Remember the boundaries!

### Iteration 4: Create obstacles

![](https://raw.githubusercontent.com/ElvanIpeker/mb/master/images/hugo-elvan-2.png?token=GHSAT0AAAAAABR6P7UFZ4YB4K2CBFQ4X244YSKAQ6Q)

Now let's make this interesting. We should create obstacles that show up every specific amount of time.

They will always start in the position **0** of the `y` axis (the obstacles will be coming from the top of the canvas), but you should make them appear in a random place of the `x` axis.

### Iteration 5: Move the obstacles

For moving the obstacles, we need to update our `canvas` continuously. In this iteration, you need to continually change the position of the obstacles in every update, making them move down the road.

### Iteration 6: Points, points, points

Oh! If we want to challenge somebody, we need to quantify who is making it better. So we need to add a **score**. Go ahead and add a method to count points while you keep the car avoiding obstacles.


<br>

**Happy coding!** :heart:
