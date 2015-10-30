sassstarter
===========
Development folder structure with sass 


For a simple Web Project
------------------------

If your working folder is not empty and you wish to add the files of this repo, run the following commands (instead of git clone):

`git init .`

`git remote add -t \* -f origin https://github.com/marcelox/sassstarter.git`

`git checkout master`

then run `npm install`

and finally: 

`gulp`

For Wordpress
-------------

In the Themes folder of your Wordpress Project run 

`git init .`

`git remote add -t \* -f origin https://github.com/marcelox/sassstarter.git`

`git checkout sassforwordpress`

then

`npm install`

Before running `gulp`:
- Rename the child_theme entries on gulpfile.js to your new wordpress childtheme.
- In the sasscomponents folder, rename the theme name, template (directory name of the parent theme) and the line

`@import url('../the_parent_theme_folder/style.css')`

or add a wp_enqueue_scripts script in the child theme's functions.php (because @[import is no longer best practice](https://codex.wordpress.org/Child_Themes))

now you can run 

`gulp`

