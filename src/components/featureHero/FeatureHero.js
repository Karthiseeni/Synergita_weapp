function FeaturesHero({
  img,
  alt,
  description,
  headline
}) {
  return (
    <>
      <div className="col-xl-4 col-md-6 col-sm-12 ">
        <img className='featuresImg' src={img} alt={alt} />
        <h5 className='subHeading'>{headline}</h5>
        <p className="para">{description} </p>
      </div>
    </>
  )
}

export default FeaturesHero