"use client";
import { Accordion, AccordionItem, Input, Chip } from "@nextui-org/react";

import VoteupButton from "@/components/VoteupButton";
import CommentArea from "@/components/CommentArea";
import QuestionArea from "@/components/QuestionArea";
import { useState, useEffect } from "react";
import CommenSection from "@/components/CommenSection";

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

export default function Home() {
  // 오늘 날짜 가져오기
  let mainDate = new Date();
  // 시차 간격 가져오기
  const offset = mainDate.getTimezoneOffset();
  // 시차 적용
  mainDate = new Date(mainDate.getTime() - offset * 60 * 1000);
  const today = mainDate.toISOString().split("T")[0];
  const [searchDate, setSearchDate] = useState(today);
  const [isNickname, setIsNickname] = useState(true);
  const [qnaList, setQnaList] = useState<IQuestion[]>([]);
  const [nickname, setNickname] = useState("");

  async function getQnaData() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/qna/questions/?date=${today}`
      );
      const qnaData = await response.json();
      console.log(qnaData);
      setQnaList(qnaData.questions);
    } catch (error) {
      return "Please check your server";
    }
  }

  useEffect(() => {
    let n = localStorage.getItem("nickname");

    if (n) {
      setNickname(n);
      console.log(`page.tsx ${n}`);
      setIsNickname(false);
    }
    getQnaData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col p-24 gap-10">
      <div className="sticky top-0 bg-white z-50">
        <div className="flex flex-row gap-2 justify-between">
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
          {/* <Button color="primary" variant="ghost" isDisabled={isNickname}>
            질문하기
          </Button> */}
          <QuestionArea
            isNickname={isNickname}
            today={today}
            nickname={"test"}
          />
        </div>
      </div>

      <Accordion selectionMode="multiple">
        {qnaList.map((question) => (
          <AccordionItem
            key={question.question_id}
            aria-label="Question 1"
            title={
              <div className="flex flex-row justify-between">
                <p>{question.title}</p>
                <div>
                  <Chip>{question.author_nickname}</Chip>
                  <Chip>{question.upvotes}</Chip>
                </div>
              </div>
            }
          >
            <div className="flex flex-col gap-10">
              <VoteupButton
                voteNumber={question.upvotes}
                voteType="question"
                question_id={question.question_id}
                today={today}
              />
              <CommentArea
                disabled={isNickname}
                question_id={question.question_id}
                nickname={nickname}
                today={today}
              />
              <CommenSection
                answers={question.answers}
                question_id={question.question_id}
                today={today}
              />
            </div>
          </AccordionItem>
        ))}
      </Accordion>
    </main>
  );
}
