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
- Rename the _'child_theme'_ entries on gulpfile.js to your new wordpress childtheme name.
- In the styles.scss in the sasscomponents folder, rename the _theme name_, _template_ (directory name of the parent theme) and the line:

`@import url('../the_parent_theme_folder/style.css')`

or add a wp_enqueue_scripts script in the child theme's functions.php (because @[import is no longer best practice](https://codex.wordpress.org/Child_Themes))

now you can run 

`gulp`

_Assuming you want to start a fresh repo with all the files of your Wordpress project, it is a good idea to delete the .git directory you just created in your Themes folder (with a  `rm -dfr .git`)_
