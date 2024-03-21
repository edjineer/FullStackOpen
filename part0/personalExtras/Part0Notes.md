# Notes for Full Stack Open
This repo is a collection of notes and exercises form the University of Helsinki Full Stack Open course (https://fullstackopen.com/en/). 

# Part 0b: Fundamentals of Web Apps 
- Extensions useful for WebDev: JsonVue
- Steps to inject element into the DOM: 
    1. list = document.getElementByTagName('[ELEMENT NAME THAT EXISTS]')[0]
    2. newElement = document.createElement("li")
    3. newElement.textContent = "Text Info Here"
    4. list.appendChild(newElement)
- Context on Ajax (Asynchronous JS and XML), taken for granted nowadays 
- SPA = Single page application
- Intro to JQuery
- Use node.js runtime environment
- Javascript Fatigue

### CSS Details 
Class Sectors = prefixed with ., contains name of the class 
Classes are attributes that can be added to HTML elements 
Can live-modify CSS in the elements Tab of the console under Styles 

# Notes on Exerises 
## 0.1 HTML Mozilla HTML Tutorial 
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics 
#### Anatomy of an HTML Element: Opening Tag, Closing Tag, Content, Element
- Elements have ATTRIBUTES: class="bleh" is attribute
  - Add quotes when setting all attribute values
  - Add space between element name and attribute  ex <p class="a">
- Nesting Elements is allowed <p> Blah <b>BLAH</b> </p>
- Some elements are void, and thus self closing <img attribute="" />
#### Anatomy of an HTML Document
- Doctype = required preamble. Originally links to rules 1990ish. Now, just needed to behave correctly. 
- HTML Element Wraps the content on the page and is the root element. Includes the lan attribute for the primary language 
- Head Element: Container of metadata that isnt shown to users. Keywords, css, char set declarations, page description that shows up in search results 
- Character Set = UTF 8 most commonly which fits for English 
- Viewport Element = Page renders at the width of viewport
- Title element=Title for browser tab, body element = all content 
#### Marking Up Text 
- Headings and subheadings. Used for accessibility, so don't over style these 
- Comments are <-- -->
- Paragraph <p>
- Bullets <ul>, numbered are <ol>, items are <li>
- Links = anchors <a href="link"> hypertext reference 

## 0.2 CSS Basics
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics
- CSS = Cascading Style Sheets 
- Use <link href="main.css" rel="stylesheet"> in HTML document 
- Name of these items are the "ruleset", item is selector, proprty and property value, both = declaration
- Each Ruleset must be wrapped in curly braces 
- Use Colon to separate property from property value 
- Separate Declarations with semi colons 
- Can use many types of selectors: element, id selector, class selector, attribute selectors, pseudo-class selectors 
#### Fonts and Text and Boxes 
- Padding, Margin, Border
- For margin, 2 values = top+bottom, second value is left+right. Auto = divide available horiz space between left and right
- Text Shadow looks gross 
- Center Image 

## 0.3 Forms
https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form 
- Web form form controls 
- Input element. Can introduce form validation
Form
- 2 attributes you should set: method(get/post) and action(link)

## 0.4 New Note Diagram 


# Curiosity Questions for the future
- Is there a longer, interesting history to DocTypes? 
- Alternatives to UTF8 as a character set 
- More info on viewport
- Accessibility Learning Module https://developer.mozilla.org/en-US/docs/Learn/Accessibility 
- Display attribute, block setting 
