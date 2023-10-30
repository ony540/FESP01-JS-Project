// 할일 등록
import Header from "../../layout/Header.js";
import Footer from "../../layout/Footer.js";

const deleteTodo = async function ({ _id } = {}) {};

const TodoInfo = async function ({ _id } = {}) {
  const page = document.createElement("div");
  page.setAttribute("id", "page");

  let response;
  const dataBox = document.createElement("div");

  try {
    response = await axios.get(`http://localhost:33088/api/todolist/${_id}`);

    const { item } = response.data;
    const { content, createdAt, done, title, updatedAt } = item;

    const titleBox = document.createElement("h2");
    const contentBox = document.createElement("p");
    const doneBox = document.createElement("div");
    const dateBox = document.createElement("span");
    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");

    titleBox.append(title);
    contentBox.append(content);
    doneBox.append(`완료여부: ${done}`); //추후 css로 스타일수정 (boolean값대신 체크박스?)
    dateBox.append(`createdAt:${createdAt} / updatedAt:${updatedAt}`);
    deleteButton.append("삭제");

    dataBox.append(titleBox, contentBox, doneBox, dateBox, deleteButton);
  } catch (err) {
    const error = document.createTextNode("일시적인 오류 발생");
    dataBox.appendChild(error);
  }

  page.appendChild(Header("TODO App 상세 조회"));
  page.appendChild(dataBox);
  page.appendChild(Footer());

  return page;
};

export default TodoInfo;
