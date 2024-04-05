"use client";
import React, { useEffect, useState } from "react";
import { useNickname } from "@/app/providers";
import { Input } from "@nextui-org/react";

interface IQuestion {
  question_id: string;
  title: string;
  author_nickname: string;
  created_at: string;
  upvotes: number;
  answers: {
    answer_id: string;
    author_nickname: string;
    created_at: string;
    content: string;
    upvotes: number;
  }[];
}
const PostArea = () => {
  const [qnaList, setQnaList] = useState<IQuestion[]>([]);
  const { nickname, isNickname, today } = useNickname();
  const [searchDate, setSearchDate] = useState(today);

  async function getQnaData() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/qna/questions/?date=${searchDate}`
      );
      const qnaData = await response.json();
      console.log(qnaData);
      setQnaList(qnaData.questions);
    } catch (error) {
      return "Please check your server";
    }
  }

  useEffect(() => {
    getQnaData();
  }, [searchDate]);

  return (
    <div>
      <h1 className="text-4xl font-semibold">{searchDate}</h1>
      <Input
        label="Date"
        placeholder="Enter your date"
        type="date"
        className="w-36"
        value={searchDate}
        max={today}
        onChange={(e) => {
          setSearchDate((prev) => e.target.value);
        }}
      />
    </div>
  );
};

export default PostArea;
