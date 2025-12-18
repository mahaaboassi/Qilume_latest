type Item = {
    title: string
}
const Heading = ({title}:Item)=>{
    return<h2 className="heading text-5xl text-center pb-5">{title}</h2>
}

export default Heading