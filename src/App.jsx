import React, { useEffect, useRef, useState } from 'react'
import { FirstName } from './Components/firstName'
import { LastName } from './Components/lastName'
import { Image } from './Components/Image'
import './App.css'

function App () {
  const [users, setUsers] = useState([])
  const [intersecting, setIntersecting] = useState(0)
  const lastName = useRef(null)
  const url = `https://dummyjson.com/users?skip=${intersecting}`

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setUsers(data.users)
      })
  }, [intersecting])

  console.log(users)

  useEffect(() => {
    const ultimoelemento = lastName.current.lastElementChild

    const options = {
      root: lastName.current,
      rootMargin: '0px',
      threshold: 0.5
    }
    const callback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIntersecting(intersecting => intersecting + 24)
        }
      })
    }
    // eslint-disable-next-line no-undef
    const observer = new IntersectionObserver(callback, options)
    observer.observe(ultimoelemento)

    return () => {
      observer.unobserve(ultimoelemento)
    }
  }, [users])

  return (
    <main>
      <section>
        <article id='scroll' ref={lastName}>
          <FirstName users={users} />
        </article>
        <article>
          <LastName users={users} />
        </article>
        <article>
          <Image users={users} />
        </article>
      </section>
    </main>

  )
}

export default App
