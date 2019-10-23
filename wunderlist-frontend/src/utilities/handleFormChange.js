// function for handling changes in form

export const handleFormChange = (e, formState, formStateSetter) => {

  formStateSetter({
    ...formState,
    [e.target.name]: e.target.value
  });
  // console.log(formState)
}