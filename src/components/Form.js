import React from 'react'

const Form = () => {
  return (
    <div className="centered">
      <form action="">
        <label htmlFor="">First Name<span>*</span></label>
        <input type="text" name="Name" size="33" maxlength="30" required placeholder="First Name" />
        <br />
        <br />
        <label htmlFor="">Last Name<span>*</span></label>
        <input type="text" name="Name" size="33" maxlength="30" required placeholder="Last Name" />
        <br />
        <br />
        <label htmlFor="">Email Id<span>*</span></label>
        <input type="email"name="Email" placeholder="Email" required />
        <br />
        <br />
      </form>
    </div>
  )
}

export default Form