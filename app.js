var titre = new Vue({
    el: '#titre',
    data: {
        message: 'Liste de Tâches à faire!!'
    },
    methods: {
        reverseMessage: function() {
            this.message = this.message.split('').reverse().join('')
        }
    }
});
var app = new Vue({
  el: '#corps',
  data: {
    nvlleTache: '',
    todos: []
  },

  
  methods: {
    ajouterTache() {

      //PUSH ajouterTache.todos.push({ text: 'Nouvel élément' }). 
      //Vous devriez le voir ajouté à la liste.
      
      this.todos.push({
        title: this.nvlleTache,
        done: false
      });
      this.nvlleTache = '';
    },

    //SpLICE Transitions de liste entrantes/sortantes

    supprimerTache(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex);
    },
    toutSupprimer() {
      this.todos.forEach(todo => {
        todo.done = true;
      });
    }
  }
});