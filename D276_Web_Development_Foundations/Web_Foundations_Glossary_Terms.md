# Web Foundations Glossary Terms

## 1.1 Web history

- **Internet**
  - The Internet began as four networked computers in 1969 but is today the largest and most popular computer network spanning the entire globe.
- **FTP / File Transfer Protocol**
  - FTP (File Transfer Protocol) was an early way for transferring files over the Internet.
- **World Wide Web / web**
  - In the early 1990s, Tim Berners-Lee was working at a Swiss research institute named CERN and developed a more convenient way for computers to communicate files over the Internet. Berners-Lee named his creation the World Wide Web, or simply "the web".
- **webpage / web page**
  - A webpage or web page is a document that is viewed in a web browser.
- **website**
  - A collection of related webpages are organized into a website.
- **web server**
  - A web server is a program that serves webpages to web browsers.
- **HyperText markup language / HTML**
  - HyperText markup language (HTML) is the standard markup language for web documents.
- **Hypertext**
  - Hypertext is text that has links to other text (and today to images, videos, and more).
- **markup**
  - Document markup is special markings in the document that provide additional information about links, formatting, and images.
- **web browser**
  - A web browser is a program that downloads an HTML document from a web server, displays the document to the user with the appropriate formatting, and allows the user to interact with the document, such as clicking hyperlinks to access other documents.
- **World Wide Web Consortium / W3C**
  - The World Wide Web Consortium (W3C) is the international standards organization that traditionally has controlled a number of web standards, including HTML.
- **Web Hypertext Application Technology Working Group / WHATWG**
  - The Web Hypertext Application Technology Working Group (WHATWG), an organization that develops a variety of web standards and whose members include the major browser vendors.
- **HTML Living Standard**
  - WHATWG produces the HTML Living Standard, a continually evolving standard without version numbers that replaces HTML5.

## 1.2 IP addresses, domain names, and URLs

- **packet**
  - An Internet packet contains To and From IP addresses, the information to communicate, and other configuration information.
- **IP address / Internet Protocol**
  - An IP address (short for Internet Protocol address) is a computer's unique address on the Internet (like a house's unique address in the world), usually represented numerically like 198.51.100.7.
- **IPv4**
  - The original Internet Protocol, known as IPv4, has 32-bit addresses.
- **IPv6**
  - A new version of the Internet Protocol, IPv6, uses 128-bit addresses, capable of representing 2128 addresses.
- **domain name**
  - A domain name is a name for an IP address, such as the name wikipedia.org for the IP address 198.35.26.96; the name is easier to remember and type.
- **DNS server**
  - When a computer sends a packet using a domain name over the Internet, the first step is to contact a DNS server to convert the domain name to an IP address.
- **DNS**
  - DNS is short for Domain Name System.
- **root servers**
  - Thirteen main DNS servers (called root servers) exist in the world, and a computer's operating system or an ISP keeps a reference to the root servers' IP addresses.
- **domain name registrar**
  - Anyone may register an unused domain name with a domain name registrar.
- **top-level domains / TLD**
  - A domain name belongs to one of numerous top-level domains (TLD), such as .com, .net, .org, .edu, and .gov.
- **country code top-level domain / ccTLD**
  - Each country is assigned a unique two-letter country code top-level domain (ccTLD) like .uk (United Kingdom), .ru (Russia), and .de (Germany).
- **ICANN**
  - ICANN, the organization that manages TLDs, now allows companies and organizations to create customized TLDs, like .church, .pizza, and .music.
- **second-level domain**
  - Immediately after a top-level domain comes a second-level domain, such as wikipedia in wikipedia.org.
- **URL / Uniform Resource Locator**
  - A URL (Uniform Resource Locator) is the location of a web resource on the web, such as http://www.cdc.gov/alcohol/faqs.htm.
- **web resource**
  - A web resource is any retrievable item, like an HTML file, image, video, CSS style sheet, etc.
- **Scheme**
  - Scheme - Characters at the beginning of a URL followed by a colon ":" or a colon and double slashes "://".
- **Hostname**
  - Hostname - The complete domain name following the scheme in a URL.
- **Path**
  - Path - All characters to the right of the hostname in a URL.
- **404**
  - If a web server is reached but the specific requested page isn't found, the server returns a 404 status code, which is a code number for page not found.
- **Linkrot**
  - Linkrot is the general name for a once valid link that now return a 404 status code.

## 1.3 HTTP

- **HyperText Transfer Protocol (HTTP)**
  - The HyperText Transfer Protocol (HTTP) is a networking protocol that runs over TCP/IP and governs communication between web browsers and web servers.
- **Transmission Control Protocol/Internet Protocol (TCP/IP)**
  - Transmission Control Protocol/Internet Protocol (TCP/IP) is a protocol suite that governs how data packets are transferred over the Internet from one machine to another.
- **HTTP/1.1**
  - HTTP/1.1 is the HTTP standard used for most of the web's lifetime.
- **HTTP/2**
  - Many websites are adopting HTTP/2, a relatively new HTTP standard that speeds-up the transfer of information between web browsers and web servers.
- **HTTP/3**
  - HTTP/3, currently in development, improves the speed of HTTP/2 by using UDP to transport data packets instead of TCP.
- **DNS lookup**
  - The web browser performs a DNS lookup by sending the domain name to the local DNS and getting back the IP address of the web server hosting the domain name.
- **HTTP request**
  - An HTTP request is a message sent from the web browser to the web server. Often the request asks the web server to send back a web resource like an HTML file, image, CSS style sheet, JavaScript file, or video.
- **HTTP response**
  - An HTTP response is a message sent from the web server back to the web browser in response to an HTTP request. Often the response contains the requested web resource.
- **status line**
  - The status line specifies the HTTP version being used. A request status line includes a request type and path; a response status line includes a status code.
- **header field**
  - A header field is a keyword followed by a colon and a value. Header fields supply additional information about the request or response.
- **message body**
  - A message body contains data being transferred between a web browser and web server. In a request, the message body may be empty or contain submitted form data. In a response, the message body may contain the requested resource.
- **Internet Assigned Numbers Authority / IANA**
  - The Internet Assigned Numbers Authority (IANA) is a standards organization that manages various internet numbers and symbols, like global IP address allocation, root zone management in DNS, and media types.
- **request method**
  - An HTTP request method indicates the desired action to perform on a resource.
- **status code**
  - An HTTP response status code is a three digit number that indicates the status of the requested resource.
- **browser redirect**
  - A browser redirect is when the web server returns a 301 or 302 status code with a Location header indicating the URL the browser should load next.
- **URL shortening**
  - URL shortening is a technique to create shorter URLs that redirect to longer URLs. Ex: http://en.wikipedia.org/wiki/URL_shortening has a short URL of http://tinyurl.com/urlwiki.
- **browser cache**
  - A browser cache is an area on the computer's disk where web content can be stored by the web browser for quick retrieval later.
- **entity tag (ETag)**
  - An entity tag (ETag) is an identifier for a specific version of a web resource. Ex: 34905a3e285dd11. When the resource changes, so should the ETag associated with the resource.
- **If-Modified-Since**
  - If-Modified-Since is used with the Last-Modified date/time to request the web server only send the requested resource if the resource has changed since the specified date/time.
- **Expires**
  - Expires contains a date/time indicating when the requested resource is considered "stale".
- **Cache-Control**
  - Cache-Control is used to specify a number of caching directives.
- **network sniffer**
  - A network sniffer is software that monitors network traffic and allows users to inspect HTTP requests and responses.
- **HTTPS**
  - HTTPS encrypts HTTP traffic between a browser and web server so a network sniffer cannot intercept sensitive information in the HTTP traffic like passwords, credit card numbers, financial transactions, etc.
- **Transport Layer Security / TLS**
  - HTTPS uses a protocol called Transport Layer Security (TLS), which uses asymmetric public keys to encrypt data between the browser and web server.
- **digital certificate / certificate authority**
  - A website wanting to use HTTPS must acquire a digital certificate, issued by a trusted certificate authority, that contains a public key used by TLS to encrypt data.

## 1.4 Web trends

- **mobile device**
  - A mobile device is a handheld computer, like a smartphone or tablet.
- **Internet of Things**
  - The Internet of Things (abbreviated as IoT) is the global collection of communicating devices that sense and control technology on behalf of humans.
- **Web accessibility**
  - Web accessibility is the ability of users with disabilities to access and use a webpage with reasonable effort.
- **Cognitive computing**
  - Cognitive computing is the use of artificial intelligence techniques and access to vast amounts of data to simulate human problem solving in complex situations with ambiguity, changing data, and even conflicting information.
- **Separation of concerns**
  - Separation of concerns is the design principle of breaking up web content using distinct languages and documents that overlap as little as possible.

## 1.5 Introduction to HTML

- **HTML**
  - HTML (HyperText Markup Language) is a textual language for creating webpages.
- **element**
  - An element is a single HTML structure that is represented with HTML tags.
- **tag**
  - A tag has a descriptive name surrounded by < and > characters that the web browser uses to display content.
- **link**
  - A link on a webpage is a clickable item that causes the web browser to jump to another webpage when clicked.

## 1.6 Introduction to CSS

- **Cascading Style Sheets / CSS**
  - Cascading Style Sheets (CSS) is a textual language for describing how a webpage is styled for visual presentation.
- **CSS rule**
  - A CSS rule specifies styling properties for specific HTML elements.
- **CSS color**
  - A CSS color can be a pre-defined name like blue, or an rgb value like `rgb(50, 100, 255)`.
- **rgb**
  - Rgb is short for red, green, blue; all colors can be formed by combining those three colors.

## 1.7 Introduction to JavaScript

- **JavaScript**
  - JavaScript is a programming language that runs in a browser, enabling webpages supporting actions like responding to a button click.
- **function**
  - A JavaScript function is a named group of statements that can be run by referring to that name.
- **variable**
  - A variable stores a value or a link to an element of a webpage.

## 2.1 HTML document structure

- **HTML / HyperText Markup Language**
  - HTML (HyperText Markup Language) is a textual language for creating webpages.
- **element**
  - An element is a single HTML structure.
- **tag**
  - An HTML tag is a markup instruction identified by <, the tag name, and >.
- **opening tag**
  - An opening tag indicates the starting point in the document where the tag takes effect.
- **closing tag**
  - A closing tag indicates the ending point in the document where the tag stops having an effect.
- **<!DOCTYPE html>**
  - The <!DOCTYPE html> declaration instructs the web browser about what type of document follows.
- **<html>**
  - The <html> opening and closing tags enclose everything but the <!DOCTYPE html> declaration.
- **<head>**
  - The <head> opening and closing tags contain the document title, document metadata, and various other elements that are typically not displayed in the webpage.
- **<meta>**
  - The <meta> tag specifies metadata, which is data that describes the document's data.
- **<title>**
  - The <title> opening and closing tags enclose the name of the document. The title is usually displayed in the browser's titlebar, is used by search engines, and is used for bookmarking.
- **<body>**
  - The <body> opening and closing tags enclose all elements and content to be rendered in the browser.
- **attribute**
  - A tag attribute provides additional information about the tag and is included only in the opening tag.
- **void element**
  - A void element is an element that only needs an opening tag.
- **Quirks mode**
  - Quirks mode is a browser rendering mode that renders a webpage using non-standard layout rules emulating older web browsers.
- **standards mode**
  - A webpage with the DOCTYPE is rendered using standards mode, which uses the HTML Living Standard.
- **UTF-8**
  - UTF-8 is a common character encoding that describes characters used by most of the world's languages.
- **Chrome DevTools**
  - Chrome DevTools is a collection of web development tools that are built into the desktop Chrome browser.
- **deprecated**
  - A deprecated feature is part of a language that is officially discouraged because newer or better features exist, or because the deprecated feature is no longer considered safe.
- **HTML validator**
  - An HTML validator checks that an HTML document conforms to the standard.

## 2.2 Basic HTML tags

- **paragraph / <p>**
  - A paragraph is the basic unit of text in an HTML document. A paragraph is enclosed in HTML by the <p> opening and closing tags. Browsers visually separate paragraphs from other text with spacing above and below.
- **whitespace**
  - A whitespace character is an unprinted character such as the spaces between words and lines of text.
- **<br> / line break**
  - The <br> tag creates a line break in a paragraph, such that the content after the line break appears on a new line.
- **section / <section>**
  - A section is a collection of related paragraphs, images, and other content organized into units such as chapters, subchapters, tabbed content in a tabbed container, and numbered sections of a thesis. Sections are surrounded by the <body> and <section> tags, or are implicitly created using a heading tag.
- **heading**
  - A heading provides a title for a section of content.
- **<h1>**
  - The first level heading is surrounded by the <h1> opening and closing tags, and is appropriate for chapter titles.
- **<h2>**
  - The second level heading is surrounded <h2> tags, and is appropriate for subchapter titles.
- **<h3> / <h4> / <h5> / <h6>**
  - The third through sixth level headings tags are <h3>, <h4>, <h5>, and <h6>.
- **<em> / emphasized**
  - The <em> tag indicates emphasized text, such as text having an emphasized pronunciation when spoken, and is italicized by default.
- **<strong> / strong importance**
  - The <strong> tag indicates text that has strong importance, and is bolded by default.
- **<cite>**
  - The <cite> tag denotes a title, such a book or song title, and is italicized by default.
- **<mark>**
  - The <mark> tag denotes important content that should be semantically highlighted and is rendered with a yellow background by default.
- **<b> / bold**
  - The <b> tag indicates text that needs attention, like key words in a document abstract or product names in a review, and renders the text in bold.
- **<i> / italics**
  - The <i> tag indicates text in an alternative voice, such as a word or phrase in a foreign language, and is rendered using italics.
- **<u>**
  - The <u> tag denotes text that should appear differently from normal text, such as misspelled words, and is underlined by default.

## 2.3 Comments

- **comment**
  - An HTML comment is a portion of the document that is not displayed by the browser.

## 2.4 Lists

- **unordered list / <ul>**
  - An unordered list is a collection of items, usually indented and shown using bullets, surrounded by the <ul> opening and closing tags.
- **list item / <li>**
  - Each list item is surrounded by <li> opening and closing tags.
- **ordered list / <ol>**
  - An ordered list is a sequenced collection of items, usually indented and shown using numbers or letters, surrounded by the <ol> opening and closing tags.
- **type attribute**
  - The <ol> tag's numbering scheme is specified with the type attribute.
- **list-style-type**
  - The CSS property list-style-type provides the ability to change the bullet used in an unordered list and offers more numbering options in an ordered list.
- **nested list**
  - A nested list is a list within a list item of another list.

## 2.5 Tables

- **table / <table>**
  - A table is an HTML structure surrounded by the <table> opening and closing tags that allows data to be organized in rows and columns.
- **cell**
  - A cell is a location in the table at a specific row and column.
- **<tr> / table row**
  - The <tr> opening and closing tags create a table row, which contains all the row's cells.
- **<th> / table header**
  - The <th> opening and closing tags create a new table cell containing table header information about the data.
- **<td> / table datum**
  - The <td> opening and closing tags create a new table cell containing a table datum.
- **caption / <caption>**
  - A table caption defines a short descriptive text for a table and is created with <caption> tags.
- **colspan attribute / rowspan attribute**
  - A single table cell occupies a single row and column by default, but a cell may span multiple columns or multiple rows using the colspan attribute and rowspan attribute to specify how many columns or rows to span.
- **<thead>**
  - The <thead> tag specifies the table header.
- **<tbody>**
  - The <tbody> tag specifies the table body.
- **<tfoot>**
  - The <tfoot> tag specifies the table footer.

## 2.6 Images

- **<img>**
  - The <img> tag displays an image in a webpage.
- **src attribute**
  - The src attribute is a mandatory attribute that specifies the URL of the image file to display.
- **alt attribute**
  - The alt attribute provides a text description to use as an alternative to displaying the image.
- **width attribute / height attribute**
  - The width attribute and height attribute are optional <img> attributes that tell the browser how many pixels the image should occupy.
- **aspect ratio**
  - An image's aspect ratio is the ratio of the image width to the image height.
- **JPEG / Joint Photographic Experts Group**
  - The JPEG (Joint Photographic Experts Group) image format is commonly used for digital photographs.
- **PNG / Portable Network Graphics**
  - The PNG (Portable Network Graphics) image format is commonly used for line art, screenshots, or images requiring transparency.
- **GIF / Graphics Interchange Format**
  - The GIF (Graphics Interchange Format) image format is commonly used for simple animated images.
- **lossy compression**
  - JPEG images use lossy compression, meaning that some of the original picture information is lost when compressed.
- **lossless compression**
  - PNG and GIF images use lossless compression, meaning no image quality is lost.
- **true color**
  - JPEG and PNG images can display true color (24-bit color), which is approximately 16 million different colors.
- **APNG**
  - The APNG image format by Mozilla adds animation capability to PNG with true color support.
- **SVG**
  - The SVG image format is an XML format that describes an image as a series of shapes and lines.
- **WebP**
  - The WebP image format by Google supports true color, transparency, and animation.
- **AVIF**
  - The AVIF image format supports transparency, lossy or lossless compression, and higher compression rates.
- **<link>**
  - A <link> tag, which defines a link between a webpage and an external resource.

## 2.7 Links

- **anchor tag / <a>**
  - The anchor tag <a> defines a hyperlink in a webpage.
- **hyperlink**
  - A hyperlink, or link, specifies where other information is located and what action the web browser should perform when a user clicks the hyperlink.
- **href attribute**
  - The href attribute specifies the hyperlink's URL.
- **absolute URL**
  - An absolute URL is a complete URL.
- **relative URL**
  - A relative URL specifies the relative path to the web resource with no scheme or hostname.
- **fragment**
  - A URL can point to a section, or fragment, of a document by adding a hash tag (#) and a fragment identifier at the end of the URL.
- **id attribute / fragment identifier**
  - Adding the id attribute to any HTML tag creates a fragment identifier, permitting URLs to link directly to the id's location in the document.
- **graphical hyperlink**
  - A graphical hyperlink or image link uses an image inside a hyperlink instead of text.
- **target attribute**
  - An anchor tag's target attribute indicates how the browser should display the link when clicked.

## 2.8 Special characters

- **entity**
  - An entity is a mechanism for writing special characters or symbols in HTML, such as mathematical symbols, characters in most languages, and many other symbols.
- **non-breaking character**
  - A non-breaking character is an inter-word character that permits treating the words on both sides to be one word.
- **non-breaking hyphen**
  - A non-breaking hyphen, &#8209;, looks like a regular hyphen but acts like a normal character in the middle of a word.
- **non-breaking space**
  - A non-breaking space, &nbsp;, looks like a single space but acts like a normal character in the middle of a word.

## 2.9 Example: Band webpage

- **wireframe**
  - A wireframe is a blueprint, showing where the future content will be arranged.

## 3. More HTML

## 3.1 HTML containers

- **container**
  - A container is any part of a web document body that has opening and closing tags.
- **parent container**
  - A parent container is the container in which another element resides.
- **block / block-level**
  - A block element (sometimes called a block-level element) fills the width of the element's parent container and can contain other block elements, inline elements, and text.
- **<div>**
  - A <div> element is a generic element for creating block containers to facilitate managing page content and is the only block element with no semantic meaning, unlike other block elements such as <p> and <table>.
- **inline**
  - An inline element fills the minimum space possible in the element's parent container and can only contain text or other inline elements.
- **<span>**
  - The <span> element is the generic element for creating inline containers to facilitate managing content on the page.

## 3.2 Forms

- **<form>**
  - The <form> tag allows the web browser to submit information from the user to the server.
- **action attribute**
  - The action attribute indicates the URL where the form data should be sent.
- **method attribute**
  - The method attribute indicates the HTTP request type the browser will use to communicate with the server.
- **GET method**
  - The GET method is a technique used by a web browser to submit information to a web server by altering the URL of the HTTP request.
- **query string**
  - The query string is a set of name=value pairs separated by the ampersand character (&). Each name is specified as an attribute of the HTML field, and the value is the user-entered data.
- **POST method**
  - The POST method is a technique used by a web browser to submit information to a web server by sending the information in the HTTP request body.
- **enctype attribute**
  - The <form> tag's enctype attribute value "multipart/form-data" indicates the web browser should split a POST request into multiple parts, where each input field is sent as a separate part of the HTTP request message.
- **escaped**
  - If a user enters characters like &, ?, =, or white space characters like space, newline, or tab, the characters must be escaped, meaning the characters must be transformed into other representations.
- **unescapes**
  - The web server unescapes the form data to determine what the original values are.
- **widget**
  - A widget is an interactive component (usually graphical) that the browser uses to interact with a user. Ex: Buttons, drop-down menus, and data entry fields.
- **<input>**
  - The <input> tag allows the user to enter information into a web page.
- **type attribute**
  - The type attribute indicates the widget type. Common types include text, password, submit, and button.
- **name attribute**
  - The name attribute names the widget and sends the widget's value when the widget's form is submitted.
- **id attribute**
  - The id attribute is used to give a widget a unique identifier.
- **placeholder attribute**
  - The placeholder attribute specifies text that first appears in a text widget, typically for giving the user a hint as to the expected value.
- **value attribute**
  - The value attribute specifies a default value for a widget.
- **text box**
  - A text box widget is an input element with the type attribute of "text" that allows users to enter a single line of text.
- **submit button**
  - The web browser displays a submit button widget for an <input> tag with the type attribute of "submit", which sends the associated form's data to the server when clicked.
- **<label>**
  - The <label> tag displays descriptive text associated with a specific widget.
- **for attribute**
  - A label has a for attribute whose value should match the id attribute for the widget being labeled.
- **text area / <textarea>**
  - A text area widget is an input element specified by <textarea> opening and closing tags that allows users to enter multiple lines of text.
- **rows / cols attributes**
  - A <textarea> tag has optional rows and cols attributes to specify the initial size of the text area.

## 3.3 Common form widgets

- **checkbox**
  - A checkbox is a widget for input elements with the type attribute of "checkbox", which allows users to check, or select, a value.
- **checked attribute**
  - A checkbox initially appears selected if the checked attribute is set.
- **boolean attribute**
  - A boolean attribute is an attribute that is true when present and false when absent. No value must be assigned to a boolean attribute.
- **radio button**
  - A radio button is a widget for input elements with the type attribute of "radio", which allows users to select exactly one value from possibly many values.
- **<select> / drop-down menu / drop-down list**
  - The <select> opening and closing tags create a drop-down menu (or drop-down list), which allows users to select one of several predefined values.
- **<option>**
  - The <option> opening and closing tags create a value, or option, the user can select within a drop-down menu.
- **list box**
  - A list box widget is created by specifying a size with the select element's size attribute.
- **button / <button>**
  - A button widget can be created using the <button> opening and closing tags or with <input type="button">.
- **password field**
  - A password field is a widget for input elements with the type attribute of "password", which allows users to enter a password without the password contents being displayed on-screen.
- **<fieldset>**
  - The <fieldset> tag groups related form widgets together and draws a box around the related widgets.
- **<legend>**
  - The <legend> tag defines a caption for a <fieldset>.

## 3.4 Additional form widgets

- **picker**
  - An input picker is a widget that allows the user to interactively pick a choice using a popup or other guided selection method.
- **date picker**
  - The date picker is an input picker that allows the user to enter a date or choose a date from a calendar popup.
- **color picker**
  - Clicking on the color picker creates a color selector popup that helps the user explore and choose a color.
- **number input**
  - The number input ensures user input is a valid number.
- **range input**
  - The range input widget allows the user to select a value by dragging a sliding control along the length of a line.
- **combo box**
  - A combo box is the combination of a text box and drop-down menu into a single widget.
- **<datalist>**
  - A combo box is created with an <input> element, which creates the text box, and a <datalist> element, which provides the drop-down list options.
- **fallback**
  - A fallback is a mechanism that allows a web page element to function correctly even if the browser does not support a particular element.
- **polyfill**
  - A polyfill is a fallback using JavaScript code that makes certain HTML features (Ex: the date picker) work on browsers that do not natively support those features.

## 3.5 Audio and video

- **<audio>**
  - The <audio> element plays an audio file in a web page.
- **<source>**
  - The <source> element is used inside the <audio> tag to specify an audio file to play.
- **<embed> / <object>**
  - Prior to HTML5, developers used <embed> and <object> elements to embed audio or video in a web page.
- **plug-in**
  - A browser plug-in is software that can properly read and interpret a file format that the browser cannot.
- **<video>**
  - The <video> element displays a video in a web page.
- **<iframe>**
  - The <iframe> element allows a web page to be embedded in a rectangular area of the current web page.

## 3.6 <script> and <style>

- **<script>**
  - The <script> tag allows a web page to include executable code, which the browser assumes to be JavaScript unless indicated otherwise.
- **type attribute**
  - The optional type attribute is used to indicate the content type when the content is not JavaScript.
- **src attribute**
  - The src attribute provides the URL of an external file containing JavaScript code.
- **<style>**
  - The <style> tag allows the web page to introduce presentational directives, usually CSS.

## 3.7 HTML developer guidelines

- **self-closing tag**
  - A self-closing tag is an open tag that also closes by putting a forward slash at the end of the tag.
- **escaped**
  - A special character such as the double quote can be escaped within an attribute value by placing the backslash character (\) before the special character, causing that character to lose any special meaning.
- **boolean attribute**
  - A boolean attribute is an attribute that is true when present and false when absent.

## 3.9 Example: Restaurant Reviews

- **index.html**
  - Most web servers by default serve the index.html file when a URL does not specify an explicit filename.

## 5. CSS Fundamentals

## 5.1 Using CSS in HTML

- **CSS**
  - CSS (Cascading Style Sheets) is a textual language for describing how a web page is styled for visual presentation.
- **CSS rule**
  - A CSS rule consists of a selector followed by a declaration block between braces ({ }).
- **selector**
  - A CSS selector specifies the HTML elements to which the specific style rule applies.
- **declaration block**
  - A declaration block contains one or more declarations separated by semicolons (;).
- **declaration**
  - A CSS styling declaration is a CSS property followed by a colon (:) and the property value.
- **inline style / style attribute**
  - An inline style places CSS declarations inside a tag's style attribute.
- **embedded stylesheet**
  - An embedded stylesheet places CSS rules in an HTML document's head using <style> tags.
- **external stylesheet**
  - An external stylesheet places CSS rules in a separate file that is imported into an HTML document with a <link> tag.
- **inheritance**
  - The style declarations from a parent element cascade down and are applied to any child elements, a concept called inheritance.
- **conflict**
  - When two style declarations with identical properties apply to the same element, a conflict occurs.
- **specificity**
  - The browser uses specificity, a scoring system that resolves more complex CSS conflicts, to determine what style declarations apply to an element.
- **!important**
  - The !important rule may be used on a style declaration to override other declarations and disregard specificity.
- **inherit**
  - The inherit keyword, which specifies that a property should inherit the parent element's value.

## 5.2 Basic selectors

- **element selector**
  - The element selector matches elements with the specified element names.
- **class selector**
  - The class selector, specified with a period character followed by the class name, matches elements that have the specified class name.
- **ID selector**
  - The ID selector, specified with a hash character followed by the ID name, matches the element that has the specified ID.
- **descendant selector**
  - The descendant selector, specified with a selector followed by a space and another selector, matches elements that are contained in other elements.
- **pseudo-class selector**
  - The pseudo-class selector, specified with a colon character followed by a pseudo-class name, matches elements based on user behavior or element metainformation.
- **class attribute**
  - An HTML tag's class attribute specifies the classes to which the tag belongs, with each class name separated by a space.

## 5.3 Advanced selectors

- **universal selector**
  - The universal selector, specified using an asterisk character (\*), matches all elements in the web page.
- **multiple selector**
  - The multiple selector, specified using a comma (,) to separate selectors, matches all listed elements to apply a style rule.
- **child selector**
  - The child selector, specified using a greater than character (>) between two selectors, matches any elements where the second element is a direct child of the first element.
- **Sibling elements**
  - Sibling elements are elements that share the same parent element.
- **general sibling selector**
  - The general sibling selector, specified using a tilde character (~) between two selectors, matches the second element if the second element occurs after the first element and both elements are siblings.
- **adjacent sibling selector**
  - The adjacent sibling selector, specified using a plus character (+) between two selectors, matches an element that immediately follows another element, where both elements have the same parent.
- **Combinators**
  - Combinators are CSS selectors that match specific relationships between other selectors.
- **attribute selector**
  - The attribute selector, specified with an attribute name and optional value comparison enclosed in square brackets ([ and ]), matches elements with the specified attribute or the specified attribute and value.
- **pseudo element selector**
  - The pseudo element selector, specified with two colon characters (::) followed by a pseudo-element, matches parts of elements.

## 5.4 Common properties

- **color**
  - The color CSS property changes the text color to a specified color value.
- **RGB color value / rgb(red, green, blue)**
  - An RGB color value specifies a color using the rgb(red, green, blue) function by indicating the red, green, and blue intensities.
- **hexadecimal color**
  - A hexadecimal color specifies a color using the #RRGGBB format by indicating the red, green, and blue intensities.
- **HSL color value / hsl(hue, saturation, lightness)**
  - An HSL color value specifies a color using the hsl(hue, saturation, lightness) function by indicating the hue, saturation, and lightness values.
- **RGBA color value / rgba(red, green, blue, alpha)**
  - The RGBA color value specifies a color using the rgba(red, green, blue, alpha) function by indicating the red, green, blue, and alpha intensities.
- **HSLA color value / hsla(hue, saturation, lightness, alpha)**
  - The HSLA color value specifies a color using the hsla(hue, saturation, lightness, alpha) function by indicating the hue, saturation, lightness, and alpha intensities.
- **background-color**
  - The background-color property specifies the background color.
- **background-image**
  - The background-image property specifies a background image.
- **background**
  - The background property is shorthand for setting several of the element's background properties at the same time.
- **url('URL')**
  - Background images are specified with the none value or the url('URL') function, where URL indicates the location of the image.
- **float**
  - The float property specifies whether the element will float to the right or left of the element's parent container, allowing text to flow around the element.
- **clear**
  - The clear property can stop elements from floating.
- **display**
  - The display property controls the layout of the element on a web page.
- **CSS variable**
  - A CSS variable is a custom CSS property that defines a value. A CSS variable is declared in a CSS selector that defines the variable's scope.
- **:root**
  - A CSS variable can have global scope by declaring the variable in the :root selector, which targets the highest DOM element: the <html> element.
- **var()**
  - A CSS variable is accessed with the var() function. Ex: var(--my-variable);.

## 5.5 Font and text properties

- **font-family**
  - The font-family property specifies the font family, such as "Times New Roman" or serif.
- **font-size**
  - The font-size property changes the font size, such as 120%, small, or 12px.
- **font-weight**
  - The font-weight property specifies the font weight, such as normal or bold.
- **font-style**
  - The font-style property changes the text style, such as normal, italic, or oblique.
- **font-variant**
  - The font-variant property specifies the variant of the text, such as normal or small-caps.
- **font**
  - The font property is shorthand for setting several font properties at the same time.
- **web font**
  - A web font is a CSS feature that allows custom fonts to be downloaded to the web browser.
- **absolute size**
  - An absolute size is a size that is fixed and independent of other CSS sizes.
- **relative size**
  - A relative size is a size that is relative to another size.
- **text-align**
  - The text-align property changes the horizontal alignment of text for an element.
- **text-decoration**
  - The text-decoration property can add or remove text decorations like underlining or a line-through.
- **text-transform**
  - The text-transform property converts letters to UPPERCASE, lowercase, or Capitalizes Initial Letters.
- **text-indent**
  - The text-indent property specifies the first line's indentation amount.

## 5.6 Box model

- **box model**
  - The box model describes the size of each element as a series of nested boxes.
- **Content**
  - Content: The innermost box contains the content of the element, such as text and images.
- **Padding**
  - Padding: The padding box contains the content box and adds a transparent area around the content.
- **Border**
  - Border: The border box contains the padded content and adds an optionally colored area around the padding.
- **Margin**
  - Margin: The margin box contains all three boxes and adds a transparent area around the border.
- **padding**
  - The padding property specifies the padding thickness.
- **border**
  - The border property specifies the border's thickness, style, and color.
- **margin**
  - The margin property specifies the margin thickness.
- **width**
  - The width property specifies the content's width.
- **height**
  - The height property specifies the content's height.
- **border-width**
  - The border-width property specifies the border's width.
- **border-style**
  - The border-style property specifies the border's style.
- **border-color**
  - The border-color property specifies the border's color.

## 6. More CSS

## 6.1 Flexbox

- **fixed layout**
  - Some web pages use a fixed layout, which uses a fixed-width container to envelop the web page contents. Ex: The figure below shows a web page at the top using a fixed layout where the entire contents fit inside 960px. Resizing the browser does not change the width of the web page contents.
- **fluid layout**
  - A web page that uses a fluid layout allows the page contents to fill the browser, sometimes by using percentages for widths. Ex: The figure below shows a web page at the bottom using a fluid layout where the contents always fit the browser's width. Fluid layouts make better use of the available space than fixed layouts and do not produce a horizontal scroll bar when the browser is resized.
- **wireframe**
  - The web page below displays a wireframe, a blueprint for a web page that shows how future content will be arranged.
- **Flexible Box / flexbox**
  - The Flexible Box or flexbox is a CSS layout mode that provides an efficient way to lay out elements in a container so the elements behave predictably when the container is resized or viewed on different screen sizes.
- **flex container**
  - A flex container is an element that has the CSS property display set to flex to create a block-level flex container or inline-flex to create an inline flex container. Ex: <div style="display: flex">. Flex containers hold flex items.
- **flex item**
  - A flex item is a child element of a flex container that is positioned and sized according to various CSS flexbox properties.
- **flex-direction**
  - The flex-direction property defines the direction of flex items within the container.
- **justify-content**
  - The justify-content property justifies the flex items within the container.
- **flex-wrap**
  - The flex-wrap property determines if or how flex items wrap onto multiple rows when the container is not wide enough to hold all items.
- **flex-basis**
  - The flex-basis property sets the initial length of a flex item.
- **flex-grow**
  - The flex-grow property sets a proportion that determines how much of the available container space should be assigned to the item.
- **flex-shrink**
  - The flex-shrink property sets a proportion that determines the item's minimum size.
- **flex**
  - The shorthand property flex specifies flex-grow, flex-shrink, and flex-basis together.

## 6.2 Grid layout

- **Grid layout**
  - Grid layout is a CSS layout mode that divides a web page into a rectangular grid in which to position page elements.
- **grid container**
  - A grid container is an element that has the CSS property display set to grid to create a block-level grid container or inline-grid to create an inline grid container.
- **grid item**
  - A grid item is a child element of a grid container that is by default placed into a single grid cell.
- **grid-template-columns**
  - The grid-template-columns property defines the grid container's number of columns and optionally the width of each column.
- **grid-gap**
  - The grid-gap property defines the gap between each grid row and column.
- **grid-template-rows**
  - The grid-template-rows property defines the height of each row.
- **justify-content**
  - The justify-content property horizontally aligns the grid items inside the grid container.
- **align-content**
  - The align-content property vertically aligns the grid items inside the grid container.
- **grid-row**
  - The grid-row property lists the grid item's starting and ending row line numbers.
- **grid-column**
  - The grid-column property lists the grid item's starting and ending column line numbers.
- **grid-area**
  - The grid-area property lists the grid item's starting and ending row and column numbers.
- **grid-template-areas**
  - The grid container's grid-template-areas property specifies the grid layout using the named grid items.

## 6.3 Positioning elements

- **position**
  - The CSS position property gives developers more control over where elements should appear in the browser.
- **Static positioning**
  - Static positioning is the default positioning.
- **Relative positioning**
  - Relative positioning positions the element relative to the element's default position.
- **Fixed positioning**
  - Fixed positioning positions the element relative to the viewport in a fixed location.
- **Absolute positioning**
  - Absolute positioning positions the element relative to the nearest positioned ancestor.
- **viewport**
  - A viewport is the visible area of a web page.
- **z-index**
  - However, the CSS z-index property is used to specify a relative distance that orders the appearance of elements.

## 6.4 Special effects

- **text-shadow**
  - Shadows are added to text using the CSS property text-shadow.
- **box-shadow**
  - The CSS property box-shadow adds a shadow to the box around an element.
- **border-radius**
  - An element border's corners can be rounded using the CSS property border-radius.
- **border-image**
  - The CSS property border-image renders an element's border using sections of an image.
- **vendor prefix**
  - A vendor prefix is a prefix added to an experimental or nonstandard CSS property that only works on a specific browser type.
- **linear-gradient(color1, color2)**
  - The CSS function linear-gradient(color1, color2) creates a linear gradient that transitions from color1 to color2 when moving from the top edge to the bottom edge.
- **repeating-linear-gradient()**
  - The repeating-linear-gradient() function repeats a linear gradient where the color values are supplied an optional percent.
- **radial-gradient(color1, color2)**
  - A radial gradient is created with the CSS function radial-gradient(color1, color2), which creates an ellipse-shaped gradient that begins with color1 in the center and ends with color2 on the perimeter.

## 6.5 Animation

- **CSS animation**
  - A CSS animation transforms an element's styles over a set time period, producing an animation.
- **@keyframes**
  - A CSS animation's behavior is defined with the @keyframes rule, which contains a keyframe list.
- **keyframe list**
  - A keyframe list has a name and contains the keyframes or the properties and values that will be animated.
- **from**
  - From - The animation starting state that lists the CSS properties and values that apply when the animation begins.
- **to**
  - To - The animation ending state that lists the CSS properties and values that the "from" values become by the time the animation ends.
- **animation-name**
  - Animation-name - Names the keyframe list associated with the animation.
- **animation-duration**
  - Animation-duration - Length of the animation in seconds (s) or milliseconds (ms).
- **animation-delay**
  - An animation begins immediately when the browser renders the web page unless an animation-delay is used to delay the start of the animation.
- **animation-timing-function**
  - The animation-timing-function property controls an animation's speed between keyframes.
- **animation-iteration-count**
  - Animation-iteration-count - Indicates the number of times the animation will run.
- **animation-direction**
  - Animation-direction - Indicates animation direction.
- **animation**
  - Animation - Shorthand property indicating the animation name, duration, timing function, delay, iteration count, and direction.
- **CSS transition**
  - A CSS transition animates an element's transition from one state to another when an element's CSS property changes value.
- **transition**
  - The transition property defines a transition by specifying one or more CSS properties and each property's transition duration.
- **transition-timing-function**
  - The transition-timing-function property controls the speed of the transition.
- **transition-delay**
  - The transition-delay property delays the transition's start.
- **transform**
  - The transform property applies a 2D or 3D transformation to an element.
- **transformation**
  - A transformation is a graphical operation that alters the position, shape, or orientation of an object.

## 6.7 Sass

- **Sass**
  - Sass is a popular CSS preprocessor that uses CSS-like syntax to build complex CSS stylesheets.
- **Sassy CSS / SCSS**
  - Sass version 3 introduced a new syntax called Sassy CSS (SCSS), which uses semicolons and brackets like CSS.
- **SassScript**
  - SassScript is a set of extensions to CSS that allow properties to use variables, arithmetic, and functions. SassScript also provides basic control directives for performing conditional logic and looping.
- **mixin / @mixin**
  - A mixin is set of reusable styles and is defined by the @mixin directive.
- **directive**
  - A directive is an extension to the CSS at-rules, which are statements that begin with the @ character.
- **@include**
  - Mixins are included in a document using the @include directive.

## 6.8 Mobile websites and browsers

- **mobile web browser**
  - A mobile web browser is a web browser designed for mobile devices that can display web pages using HTML, CSS, and JavaScript.
- **mobile website**
  - A mobile website is a website that is designed for mobile devices with smaller screen sizes and touch interfaces.
- **Responsive web design / RWD**
  - Responsive web design (RWD) is a collection of techniques to create web pages that adapt to the browser's size.
- **adaptive website**
  - An adaptive website adapts to the width of the browser at specific widths. Ex: A container is 400 pixels wide when the browser is wider than 500 pixels, but the container shrinks to 200 pixels when the browser is less than 500 pixels wide.

## 6.9 Media queries

- **Graceful degradation**
  - Graceful degradation: Design the desktop website first and modify the design to fit smaller screens.
- **Progressive enhancement**
  - Progressive enhancement: A "mobile first" design methodology that begins with designing the website for the smallest device and then adapts the design for larger screens.
- **media query**
  - A CSS media query is a combination of media type and optionally one or more expressions that evaluate to true or false based on various media features like width, height, and orientation.
- **breakpoint**
  - A breakpoint is the screen width that activates a media query.
