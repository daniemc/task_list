var vm = new Vue({
    el: "#app",
    data: {
        tasks: [
            {
                description: "Tarea 1",
                pending: true,
                editing: false
            },
            {
                description: "Tarea 2",
                pending: true,
                editing: true
            },
            {
                description: "Tarea 3",
                pending: false,
                editing: false
            },
        ]
    }
});