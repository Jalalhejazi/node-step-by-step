node-step-by-step
=================


## step24_meteor_structure

To reset your mongodb run this code

    > meteor reset



## Multi Page App - structure

Single Page App eller Multi Page App begge muligheder er op til udvikleren i meteor app. 

jeg har valgt at brug Multi Page App vha. client/lib/router.js

alle kode der hører til browseren er under mappen /client

alle kode der hører til serveren er under mappen /server

alle kode der hører til databasen er under mappen /Model

forklaring stammer fra http://jalal.meteor.com/#structuringyourapp

* Files in directories named lib are loaded first.

* Files that match main.* are loaded after everything else.

* Files in subdirectories are loaded before files in parent directories, so that files in the deepest subdirectory are loaded first (after lib), and files in the root directory are loaded last (other than main.*).

* Within a directory, files are loaded in alphabetical order by filename.



## browse


    > meteor run   

<img src="images/localhost-3000.png" alt="">

## get remote data
<img src="images/localhost-about.png" alt="">

## client-side jQuery.ajax()

<img src="images/code-about.png" alt="">

