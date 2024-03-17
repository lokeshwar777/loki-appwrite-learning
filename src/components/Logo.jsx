function Logo({ width = '100px', imageUrl , className=''}) {
  return (
    <div>
      <img src={imageUrl} alt="Logo" width={width} className={className}/>
    </div>
  )
}

export default Logo
