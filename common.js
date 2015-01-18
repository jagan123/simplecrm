Projects = new Mongo.Collection("projects");
Leads = new Mongo.Collection("leads");
Tasks = new Mongo.Collection("tasks");

Meteor.methods({
    addProject: function (title, description) {
        Projects.insert({
            title: title,
            description: description,
            dateAdded:new Date()
        });
    }
});