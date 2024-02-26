# D276 Web Development Foundations

## Tips

- <https://www.youtube.com/watch?v=5DhnwBq1Wbo>
- <https://docs.google.com/document/d/1X0fnepA5K4dI8-82D0wtikrFj6dzGszEVm8IE8lGL1U/edit#heading=h.k210oksf8ilt>
- Practice
  - <https://www.w3schools.com/accessibility/accessibility_quiz.php>
  - <https://www.w3schools.com/accessibility/css_quiz.php>
  - <https://www.w3schools.com/accessibility/html_quiz.php>
  - <https://www.w3schools.com/css/default.asp>
- Just off of zybooks over **50% of the test is inside the chapter 6 CSS** section.
- Brush up on **XML**, basic and advanced **css**. Understand the purpose of **bootstrap** too.
- <https://www.reddit.com/r/WGU/comments/186ahdl/d276_web_development_foundations_passed/>
  - Stick with the zyBooks material.
  - take advantage of all essential reading/video materials (literally denoted as ESSENTIAL VIDEO or ESSENTIAL READING), including the **LinkedIn Learning** videos and the **Pluralsight** videos.

## CSS Selectors

- **Rule**
  - selector and declaration combined.
  - ![css selector](img/css_selector.png)
- **Selector**
  - the 'tag' name.
  - ![css selector](img/css_selector.png)
- **Declaration**
  - everything inside the brackets.
  - ![css selector](img/css_selector.png)
- **Property and Value**
  - css attributes inside the brackets.
  - ![css selector](img/css_selector.png)
- **External CSS**
  - link to css file.

```html
<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="mystyle.css" />
  </head>
  <body></body>
</html>
```

- **cascade**
  - when two rules match, the one that comes last will win.
- **specificity**
  - the 'weight' something has. What rule wins when two rules conflict.
  1. `!important` highest
  2. `<p style="color:blue; padding: 1rem;">HI</p>` inline

```html
<!DOCTYPE html>
<html>
  <body>
    <h1 style="color:blue;text-align:center;">This is a heading</h1>
    <p style="color:red;">This is a paragraph.</p>
  </body>
</html>
```

- **Comments**
  - `/* This is a single line comment */`
  - `<!-- multi line comment -->`
- **image, vector, bitmap, transparency, interlacing, animation, image map, video, audio**
  - **image**
    - `JPG, GIF, PNG` are most common web images
    - always specify `width, height`
    - `alt` shows if `src` is broken or if **screen reader** is used to describe image.
  - **vector**: vector graphics. mathematical coordinates. SVG
    - SVG uses XML to describe animations.
  - **bitmap**: raster graphics. small dots.
  - **transparency**: allow background to show through.
    - opacity: 0 transparent, 1 opaque.
  - **interlacing**:
    - slow internet. Must be web ready. GIF, PNG support interlacing.
    - download in display small percentage at a time.
  - **animation**:
    - must be web ready: GIF, PNG, MNG.
    - PNG uses layers that can be individually manipulated.
    - GIF uses frames.
    - SVG uses XML.
  - **image map**: hot spots defined by coordinates.
    - rect: used to create a rectangular area
    - circle: used to create a circular area
    - poly: used to create a polygonal area
    - default: used to define the entire area
  - **video**
    - poster: thumbnail or first frame of video
    - controls: play, pause, ...

```html
<!-- Width and height in html help page to correctly load without flicker -->
<img src="url" alt="some text" width="100px" height="50px" />

<!-- OPACITY: 0 transparent, 1 opaque. -->
<img src="url" style="opacity: 0.2" />
<img src="url" style="opacity: 0.9" />

<video width="320" height="240" controls autoplay>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  <source src="movie.webm" type="video/webm" />
  Your browser does not support the video tag.
</video>

<!-- IMAGE MAP -->
<map name="infographic">
  <area
    shape="poly"
    coords="130,147,200,107,254,219,130,228"
    href="https://developer.mozilla.org/docs/Web/HTML"
    target="_blank"
    alt="HTML"
  />
  <area
    shape="poly"
    coords="130,147,130,228,6,219,59,107"
    href="https://developer.mozilla.org/docs/Web/CSS"
    target="_blank"
    alt="CSS"
  />
  <area
    shape="poly"
    coords="130,147,200,107,130,4,59,107"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    target="_blank"
    alt="JavaScript"
  />
</map>
<img usemap="#infographic" src="/media/examples/mdn-info2.png" alt="MDN infographic" />

<audio controls autoplay>
  <source src="horse.ogg" type="audio/ogg" />
  <source src="horse.mp3" type="audio/mpeg" />
  <source src="horse.wav" type="audio/wav" />
  Your browser does not support the audio element.
</audio>
```

- **Colors**
  - `blue;` named
  - `#FFF` hexadecimal, RGB, 00-FF. Higher more color intensity.
  - **216 `Web Safe Colors`** safe hex values from old days, where computers could only display 256 possible colors.
- **Links**

```css
a:link, /* normal unvisited link */
a:hover, /* when cursor moves over link */
a:visited, /* after clicked */
a:active {
  /* the moment link is clicked */
}
```

- **Position: containing block, static, relative, absolute, fixed, sticky**
  - containing block: block level element with position other than static.
  - static: default. flow with webpage
  - relative: relative to itself without effecting other elements.
  - absolute: relative to first positioned ancestor or window.
  - fixed: relative to viewport and stays even if page scrolled.
  - sticky: positioned based on users scroll position.
- **canvas**
  - draw graphics on the fly via JS.

## HTML

- **HTML**
  - `header, nav, menu, footer` have semantic meaning.
  - defines page structure. HTML 5.2 latest.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header>
      <nav></nav>
    </header>

    <footer></footer>
  </body>
</html>
```

- **iframe**
  - inline frame used to embed another document inside html document.
- **XML**
  - describe data elements.
  - enhance structure and navigation of data.
  - Allows easy interchange of data with other applications.
