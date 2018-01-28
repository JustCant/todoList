'use strict';

const span = document.getElementById('saveAlert');

angular.module("todoListApp")
.service("dataService", function($http) {    
    this.getTodos = function(callback) {
        $http.get('mock/todos.json')
        .then(callback);
    };
    
    this.deleteTodo = function(todo){};
    
    this.saveTodos = function(todos) {
        if(todos.length === 1) {
            span.innerHTML = (todos.length + " item has been saved!");
        } else {
            span.innerHTML = (todos.length + " items have been saved!");
        }        
        span.style.opacity = 1;
        setTimeout(function() {
            span.style.opacity = 0;
        }, 3000);
    };
});