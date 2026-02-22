import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const { company, name, email, phone, category, experience, services, message } = body;

    if (!company || !name || !email || !phone) {
      return NextResponse.json(
        { error: "필수 항목을 입력해주세요." },
        { status: 400 }
      );
    }

    console.log("New contact form submission:", {
      company,
      name,
      email,
      phone,
      category,
      experience,
      services,
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { success: true, message: "문의가 접수되었습니다. 24시간 내 담당자가 연락드리겠습니다." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
