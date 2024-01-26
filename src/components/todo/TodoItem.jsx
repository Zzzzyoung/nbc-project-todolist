import React from "react";

function TodoItem({ todo, clickDeleteBtn, clickUpdateBtn }) {
  return (
    <li className="todo-item" key={todo.id}>
      <article>
        <div className="todo-content">
          <h3>{todo.title}</h3>
          <p>{todo.content}</p>
          <p className="todo-deadline">
            {new Date(todo.deadline).toLocaleDateString("ko-KR", {
              year: "numeric",
              month: "long",
              day: "numeric",
              weekday: "long",
            })}
            까지
          </p>
        </div>

        <div className="btn-set">
          <button
            className="delete-btn"
            onClick={() => clickDeleteBtn(todo.id)}
          >
            삭제하기
          </button>
          <button
            className="update-btn"
            onClick={() => clickUpdateBtn(todo.id)}
          >
            {todo.isDone ? "취소" : "완료"}
          </button>
        </div>
      </article>
    </li>
  );
}

export default TodoItem;