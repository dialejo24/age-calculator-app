# Frontend Mentor - Age calculator app solution

This is a solution to the [Age calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/age-calculator-app-dF9DFFpj-Q). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View an age in years, months, and days after submitting a valid date through the form
- Receive validation errors if:
  - Any field is empty when the form is submitted
  - The day number is not between 1-31
  - The month number is not between 1-12
  - The year is in the future
  - The date is invalid e.g. 31/04/1991 (there are 30 days in April)
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: See the age numbers animate to their final number when the form is submitted

### Screenshot

![screenshot](assets/images/screenshot.png)

### Links

- Solution URL: [solution](https://github.com/dialejo24/age-calculator-app)
- Live Site URL: [site](https://dialejo24.github.io/age-calculator-app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS

### What I learned

This time i embraced this project to use some css properties which i wasn't very comfortable using them, like the after and before pseudo element. Styling form inputs was something remarkable too. Regarding javascript, i remembered how to use the setInterval function

```css
.error-msg::after {
  color: var(--light-red);
  font-size: 0.75rem;
  font-style: italic;
  position: absolute;
  left: 0;
  top: 5px;
}
```
```js
function showResult(age, element) {
  let i = 0;
  let timer = setInterval(() => {
    element.textContent = i;
    i++;
    if (i > age) {
      clearInterval(timer);
    }
  }, 50);
}
```

## Author
- Frontend Mentor - [@dialejo24](https://www.frontendmentor.io/profile/dialejo24)
- github - [@dialejo24](https://www.github.com/dialejo24)
