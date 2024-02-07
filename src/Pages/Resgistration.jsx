import { Button, FormControl, FormHelperText, Input, InputLabel } from "@mui/material"
import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setRegisterData } from "../redux/userSlice/userSlice"

const Resgistration = () => {
    let initialState = { name: "", email: "", address: "", phone: "", permanenetAddress: "" }
    const [data, setData] = useState(initialState)

    const handleSubmit = () => {
        debugger
        dispatch(setRegisterData(data))
    }
    const debounce = (func) => {
        let timer;
        return function (...args) {
            const context = this;
            if (timer) clearTimeout(timer);
            timer = setTimeout(() => {
                timer = null;
                func.apply(context, args);
            }, 500);
        };
    };

    //   const handleChange = (value) => {
    //     fetch(`https://demo.dataverse.org/api/search?q=${value}`)
    //       .then((res) => res.json())
    //       .then((json) => setSuggestions(json.data.items));
    //   };
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }

    const optimizedFn = useCallback(debounce(handleChange), []);

    const datas = useSelector((state) => state)
    const dispatch = useDispatch()

    console.log(datas, "data")
    console.log(data, "data123")

    return (
        <>
            <div className="setBox">
                <FormControl >
                    <InputLabel >Name </InputLabel>
                    <Input
                        // onChange={handleChange}
                        onChange={(e) => optimizedFn(e)}
                        name='name' />
                </FormControl>
                <br />
                <FormControl >

                    <InputLabel >Email address</InputLabel>
                    <Input onChange={handleChange} name='email' />
                </FormControl>
                <br />
                <FormControl >

                    <InputLabel >Address</InputLabel>
                    <Input onChange={handleChange} name='address' />

                </FormControl>
                <br />
                <FormControl >

                    <InputLabel >Phone No</InputLabel>
                    <Input onChange={handleChange} name='phone' />

                </FormControl>
                <br />
                <FormControl >
                    <InputLabel >Permanent Address</InputLabel>
                    <Input onChange={handleChange} name="permanenetAddress" />
                </FormControl>
                <br />
                <Button color="primary" variant="contained" onClick={handleSubmit}>Submit</Button>
            </div>
        </>
    )
}
export default Resgistration