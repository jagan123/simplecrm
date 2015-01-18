Router.route('/', function () {
    this.render('projectsView');
},{
    name:'projects.all'
});

Router.route('/upnext', function () {
    this.render('upnextView');
});

Router.route('/leads', function () {
    this.render('leadsView');
});

Router.route('/tasks', function () {
    this.render('tasksView');
});

Router.route('/projects/add', function () {
    this.render('addProject');
},{
    name: 'projects.add'
});
