Vue.component('app-task', {
    template: '#task-template',
    props: ['tasks', 'task', 'index'],
    methods: {
        updateStatus: function(){
            this.task.pending = !this.task.pending;
        },
        edit: function(){
            this.tasks.forEach(function(task) {
                task.editing = false;
            });
            this.edited_description = this.task.description;
            this.task.editing = true;
        },
        update: function(){
            this.task.description = this.edited_description;
            this.task.editing = false;
        },
        discartEditing: function(){
            this.task.editing = false;
        },
        remove: function(){
            this.tasks.splice(this.index, 1);
        },
    }
})

var vm = new Vue({
    el: "#app",
    methods: {
        createTask: function () {
            this.tasks.push({
                description: this.new_task,
                pending: true,
                editing: false
            });
            this.new_task = "";
        },
        
        
        removeCompleteTasks: function(){
            this.tasks = this.tasks.filter(function(task){
                return task.pending;
            });
        }
    },
    data: {
        edited_description: '',
        new_task: '',
        tasks: [
            {
                description: "Tarea 1",
                pending: true,
                editing: false
            },
            {
                description: "Tarea 2",
                pending: true,
                editing: false
            },
            {
                description: "Tarea 3",
                pending: false,
                editing: false
            },
        ]
    }
});