#### Initial set ups
`express node-sequelize ` to generate express template

cd into the project & `npm install`

`sudo npm install -g sequelize-cli`

`npm install --save sequelize`

`touch .sequelizerc`
 
insert the following:
```
const path = require('path');

module.exports = {
    "config": path.resolve('./config', 'config.json'),
    "models-path": path.resolve('./models'),
    "seeders-path": path.resolve('./seeders'),
    "migrations-path": path.resolve('./migrations')
};
```

run .sequalizerc with `sequelize init`

install helper packages from node

`npm install @babel/cli @babel/core @babel/plugin-transform-runtime @babel/preset-env @babel/register @babel/runtime @babel/node --include=dev`

create a nodemon.json at the root folder, type this in:

```
{
    "watch": [
        "package.json",
        "nodemon.json",
        ".eslintrc.json",
        ".babelrc",
        ".prettierrc",
        "src/"
    ],
    "verbose": true,
    "ignore": ["*.test.js", "*.spec.js"]
}
```

#### migration commands

`sequelize model:create --name Classroom --attributes class_name:string`
`sequelize model:create --name Student --attributes classroom_id:integer,student_name:string`
`sequelize model:create --name Lecturer --attributes lecturer_name:string`
`sequelize model:create --name Course --attributes lecturer_id:integer,course_name:string`
`sequelize model:create --name StudentCourse --attributes student_id:integer,course_id:integer`

Remember the many to many associations table (in this case StudentCourse) must be defined explicitly in the sequelize model create commands

Type this command to generate the table to the database `sequelize db:migrate` after alteration of the database.



