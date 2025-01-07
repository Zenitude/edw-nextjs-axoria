"use server";

import { NextRequest, NextResponse } from "next/server";

export async function GET (request: NextRequest) {
  try {
    console.log(request)
  } catch (error) {
    console.log("Error GET : ", (error as Error).message);
    return NextResponse.json({type: "error", message: "Error read user"}, { status: 500 })
  }
}

export async function POST (request: NextRequest) {
  try {
    console.log(request)
  } catch (error) {
    console.log("Error POST : ", (error as Error).message);
    return NextResponse.json({type: "error", message: "Error create user"}, { status: 500 })
  }
}

export async function PUT (request: NextRequest) {
  try {
    console.log(request)
  } catch (error) {
    console.log("Error PUT : ", (error as Error).message);
    return NextResponse.json({type: "error", message: "Error update user"}, { status: 500 })
  }
}

export async function DELETE (request: NextRequest) {
  try {
    console.log(request)
  } catch (error) {
    console.log("Error DELETE : ", (error as Error).message);
    return NextResponse.json({type: "error", message: "Error delete user"}, { status: 500 })
  }
}

