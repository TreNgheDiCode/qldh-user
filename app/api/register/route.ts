import bcrypt from "bcrypt";

import { NextResponse } from "next/server";
import { getAuthSession } from "../../../lib/nextauth";
import axios from "axios";
import { formCreateUserSchema } from "../../../constants/form-create-user-schema";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { dob } = body;
    if (typeof dob === "string") {
      body.dob = new Date(dob);
    }

    const { ...values } = formCreateUserSchema.parse(body);

    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users`,
      {
        ...values,
      }
    );

    return NextResponse.json(response.data);
  } catch (error) {
    return new NextResponse("Tạo tài khoản thất bại", { status: 500 });
  }
}
