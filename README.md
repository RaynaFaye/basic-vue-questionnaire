# Basic vue Questionnaire

## General project
```
This folder holds a general setup for vue.js with the vue router vuex and axios.
Ready to deploy a general short questionnaire.
```

### To add on to it
```
The main form is just a dummy template of inputs and radio buttons.
These can then be adapted to the type of questionnaire needed for the project.
Axios is not yet implemented and will need to be added to work with the back end.
This will be done when we know what questions will be in the form and what will need 
to be sent to the database.
```

### General structure
```
```
#### main.js :
```
General basic setup that is initialised with vue cli.
```

#### router.js :
```
Main route setup to go to the homepage and the questionnaire page.
```

#### store.js :
```
The store in vuex holds the state of the component that is first loaded on the questionnaire page,
which is the main form (Form.vue) and then the action calls the mutation that changes that state 
to go to the Thank You page Component (ThankYou.vue).
```

#### App.vue :
```
Currently loads the main router view, which will be the homepage. There is still the navbar 
left in place for easy acces to both pages during development.
```

#### Home.vue :
```
This view is for giving a message to the users and explaning what the current questionnaire
will be about and then has a link to acces the questionnaire.
```

#### Questionnaire.vue :
```
This view is to load the questionnaire. Here as it is a basic one, it will load between two components: 
Form.vue and ThankYou.vue.
It will first start with the Form component 
and once the user submits the form will change to the Thank you component.
```

#### Form.vue :
```
Component for the questionnaire view that contains the form.
Composed of basic inputs and radio buttons.
```

#### ThankYou.vue :
```
The component to say thank you to the user for completing the form.
