const checkCompleteData = ({
  arrData,
  arrId,
  isCompleteAll = false
}) => {
  const data = arrData.map(todo => {
    if (arrId.includes(todo.id)) {
      if (isCompleteAll) {
        todo.isCompleted = true;
      } else {
        todo.isCompleted = !todo.isCompleted;
      }
    }
    return todo;
  });
  return data;
};
export default checkCompleteData;
//# sourceMappingURL=checkData.js.map