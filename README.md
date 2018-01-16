# burger

### Quick Overview

* Burger.Love.Com is a restaurant application that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, application displays the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger gets moved to the right side of the page.

* Application stores every burger in a database, whether devoured or not.

### Tools Used

 -  Node.JS
 -  MySQL
 -  Express
 -  Handlebars
 -  ORM
 -  MySQL shell
 -  Bootstrap
 -  JavaScript  

#### Directory structure

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   ├── assets
│   │   ├── css
│   |   |   |
|   |   |   |-- reset.css
|   |   |   └── style.css
|   │   │---- javascript  
|   |   |
│   │   └── img
│   │       └── eaters.png
│   └── test.html
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```



## Copyright

MIT
Evgheni Pascalov
