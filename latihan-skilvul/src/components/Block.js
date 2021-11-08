import {useParams} from 'react-router-dom'
function Block (){
    let {namaBlock}= useParams()
    return(
        <h2>ini {namaBlock}</h2>
    )
}
export default Block