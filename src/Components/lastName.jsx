function LastName ({ users }) {
  return (
    <>
      <h1>LastName</h1>
      {
      users.map((users) =>
        <p key={users.id}>{users.lastName}</p>
      )
    }
    </>
  )
}

export { LastName }
