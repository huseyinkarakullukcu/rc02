import Msg from './Msg'
const Person = ({name, img, tel}) =>{
    return(
        <div>
            <Msg name={name}/>
            <img src={img} style={{width:"300px"}} alt="" />
            <p>{tel}</p>
        </div>
    )
}
export default Person