import React, { Component } from 'react';
import { addTodo } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({ todos }) => {
   const todoList = todos.map(todo => <li key={todo.id}> {todo.text}</li>);
   const onSubmit = e => {
      e.preventDefault();
      addTodo(this.name.value);
      addTodo(this.comment.value);

   };
   return (
      <div className="wrapper">
         <header>
            <h1>Comentarios</h1>
            <br/>
            <p> Nuevo Comentario:</p>
            <form onSubmit={onSubmit}>
               <input
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  ref={e => (this.name = e)}
               />
               <input
                  type="text"
                  name="comment"
                  placeholder="Comentario"
                  ref={e => (this.comment = e)}
               />
               <button type="submit" name="submit" value="submit">
                  Enviar
               </button>
            </form>
         </header>
         <div className="main">
            <h2>Comentarios:</h2>
            <ul className="name" id="invitedList">{todoList}</ul>
         </div>
      </div>
   );
};

const mapToProps = ({ todos }) => ({ todos });

export default connect(mapToProps)(App);
