const handleClick = (e, activeQuestions, setActiveQuestions) => {
  e.preventDefault();
  if (
    Array.isArray(activeQuestions) &&
    activeQuestions.includes(e.currentTarget.dataset.id)
  ) {
    const newList = activeQuestions?.filter(
      (item) => item !== e.currentTarget.dataset.id
    );
    return setActiveQuestions(newList);
  } else if (
    Array.isArray(activeQuestions) &&
    !activeQuestions.includes(e.currentTarget.dataset.id)
  ) {
    return setActiveQuestions([...activeQuestions, e.currentTarget.dataset.id]);
  }
};

export default handleClick;
