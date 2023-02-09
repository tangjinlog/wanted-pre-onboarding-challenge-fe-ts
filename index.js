// @ts-check

/**
 * Todo 객체
 * @typedef {Object} Todo
 * @property {number} id - Todo의 고유 id값
 * @property {string} content - 내용
 * @property {boolean} isDone - 완료여부
 * @property {string} category - 카테고리
 * @property {string[]?} tags - 태그들(옵셔널)
 */

/**
 * @contructor
 * @param {Todo} todo - Todo객체를 인자로 받아서 새로운 Todo를 생성
 * @see Todo - Todo 객체 참조
 * @returns {void}
 */

const CreateTodo = (todo) => {}

/**
 * Todo 전체목록 조회
 * @function readAllTodos
 * @returns {void} 
 */

const readAllTodos = () => {}

/**
 * Todo 수정
 * @function updateByIdTodo
 * @param {string} id - 수정 할 todo 객체의 id를 인자로 받음
 * @returns {void}
 */

const updateTodo = (id) => {}

/**
 * 특정 Todo 삭제
 * @function deleteByIdTodo
 * @param {string} id - 삭제 할 todo객체의 id를 인자로 받음
 * @returns {void}
 */

const deleteByIdTodo = (id) => {}

/**
 * 전체 Todo 삭제
 * @function deleteAllTodos
 * @returns {void}
 */

const deleteAllTodos = () => {}