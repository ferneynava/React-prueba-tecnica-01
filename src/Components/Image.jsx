function Image ({ users }) {
  return (
    <>
      <h1>Image</h1>
      {
        users.map((users) =>
          <img key={users.id} src={users.image} alt={users.firstName} />
        )
      }
    </>
  )
}

export { Image }
