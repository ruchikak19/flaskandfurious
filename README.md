## Introduction

This repository, Flask and Furious, was modified off the Open Coding Society `Pages` repository and was developed by Ruchika Kench, Akshara Shankar, and Avantika Chittari.

This project was created for Safe Passage Heals, a nonprofit which hosts workshops and events to assist women and children who have experienced domestic violence.

Our project contains a dynamic event calendar, login system, admin event management dashboard, and an interactive path to recovery simulation integrated with quizzes, surveys, and an AI chatbot (registered Gemini API key).

All frontend content for our Dynamic Media Management and Interactive Path to Recovery Simulation project components can be found in the folder "safepassageheals"

---

## License
We have an Apache 2.0 License for our frontend, the same as the root Open Coding Society repository.

## Locations
All content for the website pages of our project are located in the safepassageheals folder, with fixed site templates and layouts are located in _sass/minima
--- 

## Development Support

### Navigation Bar

To add pages to the top navigation bar use _config.yml to order and determine which menus you want and how to order them.  Review the_config.yml in this project for an example.

Our custom navigation bar css is located under /assets/screenQueue/style/navbar.css

### Blog Page

There is a blog page that has options for images and a description of the page. This page can help the viewer understand what the page is about and what they can expect to find on the page. The way to add images to a page is to have the following front matter `image: /images/file.jpg` and then the name of the image that you want to use. The image must be in the `images` folder. Furthermore, if you would like the file to not show up on the blog page `hide: true` can be added to the front matter.


### Layouts

- To use or create a custom page layout, make an HTML page inside the _layouts directory, and when you want to use that layout in a file, use the following front matter `layout: [your layout here]`.  All layouts will be written in liquid to define the structure of the page.

### Metadata

Metadata, also known as "front matter", is a set of key-value pairs that can provide additional information to GitHub Pages about .md and .ipynb files. This can and probably will be used in other file types (ie doc, pdf) if we add them to the system.

In the front matter, you can also define things like a title and description for the page.  Additional front matter is defined to place content on the "Computer Science Lab Notebook" page.  The `courses:` key will place data on a specific page with the nested `week:` placing data on a specific row on the page.  The `type:` key in "front matter" will place the blog under the plans, hacks(ToDo), and tangibles columns.

- In our files, the front matter is defined at the top of the page or the first markdown cell.

  - First, open one of the .md or .ipynb files already included in either your _posts|_notebooks folder.

  - In the .md file, you should notice something similar to this at the top of the page. To see this in your .ipynb files you will need to double-click the markdown cell at the top of the file.

  - Here is our default frontmatter for our pages

  ```yaml
  ---
  layout: post
  title: Feature Name
  permalink: /sph/featurename/
  show_reading_time: false
  ---
  ```



