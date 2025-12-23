type Item = {
    title: string
}
const Heading = ({title}:Item)=>{
    return<h2 className="heading text-center pb-5 uppercase">{title}</h2>
}

export default Heading