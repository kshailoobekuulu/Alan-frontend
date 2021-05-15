import axios from "axios";


export const categoryByUrl = {
    getCategoryByUrl
}


function getCategoryByUrl(url){
    return(
        axios.get(`http://127.0.0.1:8000/api/categories/${url}`,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => {
                console.log(res)
            return res
        })
            .catch(err=>{
                console.log(err)
                return err
            })
    )
}