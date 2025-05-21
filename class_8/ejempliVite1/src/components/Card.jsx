const user={
    name: 'Chayanne',
    imageUrl:'https://cdn.milenio.com/uploads/media/2023/07/28/chayanne-comparte-que-version-de-1.jpg',
    imageSize:90
}



const Card = ()=>{
    return(
        <>

        <h1>{user.name}</h1>
        <img src={user.imageUrl} alt={user.name} />
        </>
    )
}
export default Card;