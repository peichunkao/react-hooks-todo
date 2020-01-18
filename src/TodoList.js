import React from "react";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Todo from "./Todo";
import uuid from "uuid/v4"

function TodoList(props) {
  if (props.todos.length)
    return (
      <Paper>
        <List key={uuid()}>
          {props.todos.map((todo, i) => (
            <>
              <Todo
                {...todo}
                key={todo.id}
                removeTodo={props.removeTodo}
                toggleTodo={props.toggleTodo}
                editTodo={props.editTodo}
              />
              {i < props.todos.length - 1 && <Divider />}
            </>
          ))}
        </List>
      </Paper>
    );
  return null
}

export default TodoList;
