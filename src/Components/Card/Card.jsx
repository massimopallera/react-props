import './Card.css'

export default function Card({
  title, content, image
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
          <a href="#" className="">
            Leggi di più
          </a>
        </div>
      </div>
    </div>
  )
}