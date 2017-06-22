Vue.component('app-task', {
    data: function() {
        return{
            editing: false,
            edited_description: '',
        }
    },
    template: '#task-template',
    props: ['tasks', 'task', 'index'],
    methods: {
        updateStatus: function(){
            this.task.pending = !this.task.pending;
        },
        edit: function(){
            
            this.edited_description = this.task.description;
            this.editing = true;
        },
        update: function(){
            this.task.description = this.edited_description;
            this.editing = false;
        },
        discartEditing: function(){
            this.editing = false;
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
        
        new_task: '',
        tasks: [
            {
                description: "Tarea 1",
                pending: true
            },
            {
                description: "Tarea 2",
                pending: true
            },
            {
                description: "Tarea 3",
                pending: false
            },
        ]
    }
});