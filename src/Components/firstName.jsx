function FirstName ({ users }) {
  return (
    <>
      <h1>Users</h1>
      {
        users.map((users) =>
          <p key={users.id}>{users.firstName}</p>
        )
    }

    </>
  )
}

export { FirstName }
