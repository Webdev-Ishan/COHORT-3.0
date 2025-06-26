import { NextResponse } from "next/server";


export function GET(){
    return NextResponse.json({
        user:"Ishan",
        love:"Manisha"
    })
}

export function PUT(){
    return NextResponse.json({
        user:"Ishan",
        love:"Manisha"
    })
}