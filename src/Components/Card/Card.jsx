import './Card.css'

export default function Card({
  title, content, image, tags
}) {
   
  return (
    <div className="col">
      <div className="card">
        <img src={image} alt="" className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">
            {title}
          </h3>
          <p className="card-text">
            {content}
          </p>

          <div className="card-footer">
            <a href="#" className="">
              Leggi di più
            </a>

            <div className='tags'>
              {tags.map(tag => <span className={`badge ${tag}`} key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}