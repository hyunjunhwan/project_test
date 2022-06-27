import axios from 'axios'

export const loginUser = async () => {
    const {data} = await axios.patch('http://172.17.72.128:8000/db2_sp',{
        p_language:"",
        p_plant:"P100",
        p_user:"user99",
        p_pgm:"sp_mobile_com_login",
        p_option:{
            input_user:"10051004",
            input_pass:"1234",
        },
    });
    console.log(data)
}