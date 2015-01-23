//Your mongodb collections
Projects = new Mongo.Collection("projects");
Leads = new Mongo.Collection("leads");
Tasks = new Mongo.Collection("tasks");

//search functionality
Projects.initEasySearch('title');

Meteor.methods({
    addProject: function (title, description) {
        Projects.insert({
            title: title,
            description: description,
            createdOn:new Date()
        });
    },
    /*removeProject: function(title){
      Projects.remove({
        
      });
    },*/
});

Meteor.methods({
  addTasks: function(title) {
    Tasks.insert({
      title: title,
      status: status,
      dueDate: date,
      createdOn: new Date(),
    })
  },
});