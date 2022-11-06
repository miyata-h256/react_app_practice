import React from "react";
import { Textarea, Card, CardHeader, CardBody, Button, Input, } from "@material-tailwind/react";

const Login: React.FC = () => {
    return (
        <div className="flex w-72 flex-col gap-4 border rounded-md border-blue-500 w-300 p-2 text-lg ">
            <p className="ltr:ml-3">Account Info</p>
            <Input label="email" className="text-gray-50"></Input>
            <Input type="password" label="password" className="text-gray-50"></Input>
            <div className="flex place-content-around">
                <Button type="submit" >Sign In</Button>
                <Button type="button">Sign Up</Button>
            </div>
        </div>
    )
}

export default Login;