  
if (Meteor.isClient) {

    Template.projectsView.helpers({
        projects: function () {
            return Projects.find({},{sort: {dateAdded: -1}});
        }
    });

    Template.addProject.events({
       'submit .addProjectsForm':function(e){

           var title= e.target.title.value;

           var description= e.target.description.value;

           if(!title || !description){
               return false;
           }

           Meteor.call('addProject',title,description);

           Router.go('projects.all');

           return false;
       }
    });
}