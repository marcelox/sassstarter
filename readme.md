sassstarter
===========
Development directory template that adds sass/compass (with gulp automation) to your existing project.

Branch `sassforwordpress` creates a Child Theme directory in your Wordpress Theme folder – making it ready for development with sass/compass (see instructions below).

Requirements: node.js, git and gulp.


For an existing html/css project that has no git initialized
------------------------

If your working folder is not empty and you wish to add the files of this repo, run the following commands (instead of git clone):

```git
git init .

git remote add -t \* -f origin https://github.com/marcelox/sassstarter.git`

git checkout master
```

then run `npm install`

and finally:

`gulp`


For an existing html/css project (with git already running)
------------------------

If your working folder was already initialized with git, then you have to give another name to this remote (other than `origin`), like this:

```git

git remote add -t \* -f sass https://github.com/marcelox/sassstarter.git`

```
Merge the files to your your branch, then run

`npm install`

and finally:

`gulp`

For Wordpress
-------------

In the Themes folder of your Wordpress Project run

```git
git init .

`git remote add -t \* -f origin https://github.com/marcelox/sassstarter.git`

`git checkout sassforwordpress`
```
then

`npm install`

Before running `gulp`:
- Rename the _'child_theme'_ entries in the *gulpfile.js* file with your new wordpress childtheme name.
- In the styles.scss (in the sasscomponents folder), rename the
    1. _theme name_,
    2. _template_ (directory name of the parent theme) and
    3. the line:

      `@import url('../the_parent_theme_folder/style.css')`

      or add a `wp_enqueue_scripts` script in the child theme's functions.php (because @[import is no longer best   practice](https://codex.wordpress.org/Child_Themes))

now you can run

`gulp`

_Assuming you want to start a fresh repo with all the files of your Wordpress project, it is a good idea to delete the .git directory you just created in your Themes folder (with a  `rm -dfr .git`)_
