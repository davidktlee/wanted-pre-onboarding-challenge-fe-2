/**
 * Todo params type.  
 * @typedef {Object} Todo
 * @property {string} id - todo의 id.  
 * @property {string} content - todo의 내용.  
 * @property {boolean} isCompleted - todo의 완료 여부.  
 * @property {string} category - todo의 카테고리 종류.  
 * @property {string} [tags] - todo의 태그 종류.  
 */

/**
 * Create a todo.  
 * id, 내용, 완료 여부, 카테고리, 태그 종류를 받아 todo를 생성한다.
 * @function
 * @param {Todo} 
 * @returns {Todo} - 생성된 todo 값.  
 */
function createTodo(id, content, isCompleted, category, tags) {}

/**
 * Read a todo.  `
 * id를 포함하지 않으면 모든 todo list를 조회한다.  
 * id를 포함하면 특정 id를 가진 todo를 조회한다.  
 * @function
 * @param {Todo.id} [id] - todo의 id.
 * @returns {(string | Todo[])} - todo list or 특정 todo.
 */
function readTodo(id) {}

/**
 * Update a todo.  
 * todo의 id 이외의 모든 값 업데이트 가능.  
 * 특정 할 일의 태그 수정 가능.  
 * todo의 id 값은 항상 필요하고 내용이나 완료 여부, 카테 고리 수정은 원하는 값만 파라미터로 넘김.  
 * @function
 * @param {string} id - todo의 id.
 * @param {string} [content] - todo의 내용.
 * @param {boolean} [isCompleted] - todo의 완료 여부.
 * @param {string} [tags] - todo의 태그
 * @returns {Todo} - 수정된 특정 todo의 값.
 */
function updateTodo(id, content, isCompleted, tags) {}

/**
 * Delete todos.  
 * id를 포함하면 특정 todo를 삭제할 수 있다.  
 * 아무 파라미터도 포함하지 않으면 전체 todo를 삭제할 수 있다.  
 * id와 태그에 특정 태그를 넘기면 특정 할 일의 특정 태그를 삭제할 수 있다.  
 * id와 태그에 빈 배열을 넘기면 특정 할 일의 모든 태그를 삭제할 수 있다.  
 * @function
 * @param {string} [id] - todo의 id.
 * @param {string} [tags] - todo의 카테고리.
 * @returns {Todo[]} - 삭제 후 남은 todo들의 값
 */
function deleteTodo(id, tags) {}