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
        updateStatus: function(task){
            task.pending = !task.pending;
        },
        editTask: function(task){
            this.tasks.forEach(function(task) {
                task.editing = false;
            });
            this.edited_description = task.description;
            task.editing = true;
        },
        updateTask: function(task){
            task.description = this.edited_description;
            task.editing = false;
        },
        discartEditing: function(task){
            task.editing = false;
        },
        removeTask: function(index){
            this.tasks.splice(index, 1);
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