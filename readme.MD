<h1 align="center">
  <a href="https://legaeldan.github.io/milestone-2/" target="_blank"><img src="https://github.com/Legaeldan/milestone-2/blob/master/assets/images/readMeLogo.png?raw=true" alt="Simon Game logo"/></a>
  Simon Game - Memory training for all age groups!
</h1>
<h2>Milestone 2 Project - Kieran Cunnane</h2>
<p>This site has been created to give users a simple, easy to navigate interpretation of the world famous memory game, Simon, for 1978.

The site is designed with the best user experience in mind, with the most minimalistic style.</p>

## Table of Contents
1. [**UX**](#ux)
    - [**Project Goals**](#project-goal)
    - [**Development Goals**](#development-Goals)
    - [**Wireframes**](#wireframes)
    - [**Design choices**](#design-choices)
    - [**User Stories**](#user-stories)

2. [**Features**](#features)
    - [**Existing Features**](#existing-features)
    - [**Features Left to Implement**](#features-left-to-implement)

5. [**Deployment**](#deployment)
    - [**Deployment to GitHub Pages**](#deployment-to-github-pages)
    - [**Running this project locally**](#running-this-project-locally)

6. [**Credits**](#credits)


## UX

### Project Goals

The main objective in creating Simon Game! is to provide the user with a minimalistic, easy to use interface, while providing 
different levels of difficulty for the more advanced players. 

This game is design with all users in mind, from children to adults, and tries to account for the train of thought from all age groups.

#### Development Goal

- A project I'd be excited to show off to people as a testament to my abilities. 
- Well thought out programming to account for the unpredictability of users both young and old. 
- Something that looked professional even for a novice programmer on their first venture in JavaScript and jQuery. 

### Wireframes

The below wireframes are bundled together into one file, but were created both by hand to show some of the thought process, 
then upscaled by hand into Visio.

- [Desktop](https://github.com/Legaeldan/milestone-2/blob/master/assets/wireframes/Desktop.pdf)
- [Tablet](https://github.com/Legaeldan/milestone-2/blob/master/assets/wireframes/Tablet.pdf)
- [Mobile](https://github.com/Legaeldan/milestone-2/blob/master/assets/wireframes/mobile.pdf)
- [Complete Wireframes](https://github.com/Legaeldan/milestone-2/blob/master/assets/wireframes/WireFrame2.pdf)

### Design Choices

The main approach to this game is made to entertain all age groups with healthy mental stimulation. The following design choices were made to reflect this:

**Fonts**

- The main body font **Rubik Mono One** was chosen due to it's clean cut design and rounded character, making the page design rounded and smooth.

- The fallback font of **Squada One** was chosen due to it's similarity to Rubik Mono One. This was added in the event the font CDN wasn't available, and could be retrieved from the asset library.

**Colours**

- The colour choices are made to reflect the original Simon Says game from 1978. 
- Button colours of green were chosen to better stand out, and be easier seen against the black background, with an active red colour to easier distinguish level difficulty.

**Styling**

- The light button minimalistic design was chosed the keep the page as simple as possible, and make the buttons easier to see when lit. 

**Background**

- Background colour of a slightly off black was selected to better stand out on screen opposed to the classic black. This also helps accentuate the colours on screen, and give more depth to the overall page.

**Audio files**

- Different toned beeps were chosen to make retention of the pattern easier to the user. Enabling both memory of sight, and sound.

### User Stories

## Features
 
### Existing Features

1. **Gradual Fades**
  -The player is first greeted with a blank page, with slow fades of each element into the page. Starting with the "Simon Game" title, followed by the logo. 
  -Finally the fades result in the game start, and options menu to be displayed.
  -This gives the feel of easing the player into the game, and not bombarding them with elements on the page that snap into view, then out again.

<div align="center">
<img src="https://github.com/Legaeldan/milestone-2/blob/master/assets/images/screenshots/screen3.PNG?raw=true" alt="Screenshot: main game logo" >
</div>

2. **Logo Loader**
  -This is only a page load image, so will not reappear during game resets. It's to give the game a feel of branding, and professionalism. 
  -This logo was made by myself, with inspiration from google images when searching "Simon Game Logo".

<div align="center">
<img src="https://github.com/Legaeldan/milestone-2/blob/master/assets/images/screenshots/screen1.PNG?raw=true" alt="Screenshot: start game screen" >
</div>

3. **Speed Selection**
  -Originally not in the design. Without this made the game feel stale, and became boring very quickly, without any degree of challenge.
  -Chosen to give the player the option to change the speed/difficulty of the current game going forward. 

<div align="center">
<img src="https://github.com/Legaeldan/milestone-2/blob/master/assets/images/screenshots/screen2.PNG?raw=true" alt="Screenshot: main game board" >
</div>

4. **Interactive Buttons**
  -Lightable buttons were chosen as a minimalistic approach to game, to better accentuate the black background. So once lit, would create a greater sense of light.
  -Buttons were also given a central void to make it easier to differentiate that a button has been pushed, or selected. Opposed to other games which colour the background the same colour.

5. **Reset Button**
  -The reset button was implimented to give the player the option to give up, and return to the start.
  -The reset button was also designed with a leaderboard in mind, and will retain the click counter after selection, after the initial design that wiped the click counter immediately.

<div align="center">
<img src="https://github.com/Legaeldan/milestone-2/blob/master/assets/images/screenshots/screen4.PNG?raw=true" alt="Screenshot: final score modal" >
</div>

6. **Player Info Modal**
  -A modal is implimented to inform the player of the final count of clicks they achieved before failure.

7. **Disable Input**
  -After multiple testers, it was decided to research and impliment a disable input class to prevent users from clicking buttons outside of their turn.


### Features Left to Implement

1. **Leaderboard**

In the near future, I hopefully will get a chance to impliment a dynamic leaderboard, linked to an array of user details stored elsewhere.

2. **Interactive Volume Slider**

Upon closer inspection, for desktop users, a slider which can control the volume of the beeps would be invaluable. With a design of an upwards facing cone to control the volume, and would hopefully fill some of the void on the left hand side of the screen.

## Deployment

This project was developed using the [AWS C9](https://aws.amazon.com/cloud9/) initially before moving locally to [Visual Studio Code](https://code.visualstudio.com/) and [Git](https://git-scm.com/downloads), committed to a local [Git](https://git-scm.com/downloads) repository, and pushed to [GitHub](https://github.com/Legaeldan/milestone-2) using a locally installed version of [Git](https://git-scm.com/downloads) via command prompt.

The main method of deployment, [GitHub Pages](https://legaeldan.github.io/milestone-2/index.html), was chosen after a discussions with my mentor, and I was notified of GitHub pages, meaning I didn't need to boot up [AWS C9](https://aws.amazon.com/cloud9/) everytime I wished to showcase my site.

### Deployment to GitHub Pages

To deploy this page to GitHub Pages from its [GitHub repository](https://github.com/Legaeldan/milestone-2), the following steps were taken: 
1. Log into GitHub. 
2. From the list of repositories on the screen, select **Legaeldan/milestone-2**.
3. From the menu items near the top of the page, select **Settings**.
4. Scroll down to the **GitHub Pages** section.
5. Under **Source** click the drop-down menu labelled **None** and select **Master Branch**
6. On selecting Master Branch the page is automatically refreshed, the website is now deployed. 
7. Scroll back down to the **GitHub Pages** section to retrieve the link to the deployed website.

### Running this project locally

To clone this project from GitHub:
1. Follow this link to the [GitHub repository](https://github.com/Legaeldan/milestone-2).
2. Under the repository name, click the green "Clone or download" button.
3. In the Clone with HTTPs section, copy the clone URL for the repository. 
4. In your local editor program, open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type ```git clone```
, and then paste the URL you copied in Step 3.

```git clone https://github.com/USERNAME/REPOSITORY```

7. Press Enter. Your local clone will be created.

For more help on cloning a repository on Github, please click [here](https://help.github.com/en/articles/cloning-a-repository).

## Credits

Inspiration for this project was found at [Medium.com](https://medium.com/front-end-weekly/create-simon-game-in-javascript-d53b474a7416). Wojciech Kałużny's game provided a lot of groundwork for the wireframes, and gave initial direction to the project.

### Acknowledgements

I received inspiration and assistance on this project from Simen Daehlin (Eventyret), who assisted above and beyond to help improve the site. I initially felt it would be an impossibility to comprehend [JavaScript](https://www.javascript.com/), but he pointed me in the right direction with each hurdle.