import React from "react";
import { Button, Input } from "@material-tailwind/react";

const Login: React.FC = () => {
    return (
        <div className="flex w-80 h-60 flex-col gap-4 border rounded-md border-purple-100 p-2 text-lg shadow-lg shadow-purple-500">
            <p className=" font-bold text-left text-purple-200">Account Info</p>
            <Input type="email" label="email" className="text-gray-50"></Input>
            <Input type="password" label="password" className="text-gray-50"></Input>
            <form action="" method="post" className="flex place-content-around">
                <Button type="submit" className="bg-purple-200 shadow-purple-500 hover:shadow-purple-500/50">Sign In</Button>
                <Button type="button" className="bg-purple-200 shadow-purple-500 hover:shadow-purple-500">Sign Up</Button>
            </form>
        </div>
    )
}

export default Login;