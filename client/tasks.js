Template.tasksView.helpers({
  tasks: function(){
    return Tasks.find({}, {sort: {dateAdded: -1}});
  }
});

Template.tasksView.events({
  'submit .addTasksForm':function(e){
    var title=e.target.title.value;
    var dueDate= e.target.date.value;
  }
});