# Blogr landing page

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Blogr landing page coding challenge](./design/desktop-design.jpg)

### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/blogr-landing-page-using-html-css-and-js-uEuPVH-N4)
- Live Site URL: [Live site URL](https://blogr-landing-page-eight.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Desktop-first workflow then Mobile
- Vanilla JS for mobile navigation toggle

### What I learned

The dropdown menu is the highlight of my learning while working through this project. This is something I have never worked on before and had no prior knowledge how to go about it. I had to do a little research (Stackover flow to the rescue... lol). At the end, I was a able to complete the dropdown menu using just HTML and CSS- no JS.

I faced a little challenge having a background color and a background image for a parent container. Below is a code snippet of how I was able to achieve it.

```css
.header{
    width: 100%;
    height: 100vh;
    position: relative;
    background: url(images/bg-pattern-intro.svg);
    background-position: center;
    background-size: 150%;
    padding: 4rem 10rem;
    border-bottom-left-radius: 6rem;
    background-repeat: no-repeat;
    background-color: hsl(353, 100%, 62%);
}
```

### Continued development

While working through this project, I noticed I still needed to perfect using JS for mobile navigation toggle. I believe I can make a smoother transition for the mobile navigation toggle. So, I'll be working on that for the next couple of days.

## Author

- Website - [Github/Uzoway](https://github.com/uzoway)
- Frontend Mentor - [@uzoway](https://www.frontendmentor.io/profile/uzoway)
- Twitter - [@Uzoway_](https://twitter.com/Uzoway_)

Thanks for checking out this project.