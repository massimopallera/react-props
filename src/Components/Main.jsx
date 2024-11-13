import Card from './Card/Card'
import posts from '../assets/db/posts.js'

export default function Main() {
  const published = posts.filter(post => post.published)

  return (
    <main>
      <div className="container">
        <div className="row">
          
          {published.map( post => <Card {...post} key={post.id} />  )}

        </div>
      </div>
    </main>
  )
}