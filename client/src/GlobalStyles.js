import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/*
  Josh's Custom CSS Reset
  https://www.joshwcomeau.com/css/custom-css-reset/
*/

:root {
      --color-Yellow: rgb(265, 180, 70);
      --color-Gray: rgb(74, 74, 89);
      --color-ghostWhite: rgb(244, 244, 248);
      --color-DarkGray: rgb(38, 38, 46);
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
min-width:1000px;
margin-left:auto;
margin-right:auto;
  min-height: 100vh;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
 
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {

 display:flex;
  isolation: isolate;
}
`;