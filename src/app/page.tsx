"use client";
import {
  Accordion,
  AccordionItem,
  Textarea,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import { MdOutlineThumbUpAlt } from "react-icons/md";

const response = {
  date: "2024-03-30",
  questions: [
    {
      question_id: "q1",
      title: "Django와 MongoDB 연동 방법은?",
      author_nickname: "developer123",
      created_at: "2024-03-30T10:00:00Z",
      upvotes: 5,
      answers: [
        {
          answer_id: "a1",
          author_nickname: "expert456",
          created_at: "2024-03-30T11:00:00Z",
          content: "뭐라뭐라 솰라솰라",
          upvotes: 10,
        },
        {
          answer_id: "a2",
          author_nickname: "newbie789",
          created_at: "2024-03-30T12:00:00Z",
          content: "뭐라뭐라 솰라솰라",
          upvotes: 3,
        },
      ],
    },
  ],
};

export default function Home() {
  const defaultContent = "안녕하세요! 좋은 하루 보내세요!";
  let mainDate = new Date();

  return (
    <main className="flex min-h-screen flex-col p-24 gap-10">
      <div className="sticky top-0 bg-white z-50">
        <div className="flex flex-row gap-2 justify-between">
          <h1 className="text-4xl font-semibold">
            mainDate.toISOString().split('T')[0]
          </h1>
          <Button color="primary" variant="ghost" disabled>
            질문하기
          </Button>
        </div>
      </div>
      <Accordion selectionMode="multiple">
        <AccordionItem
          key="1"
          aria-label="Question 1"
          title={
            <div className="flex justify-between">
              Question 1. 안녕하세요 점심은 뭘 드셨나요?
              <Button
                color="primary"
                variant="bordered"
                startContent={<MdOutlineThumbUpAlt />}
                size="sm"
              >
                10
              </Button>
            </div>
          }
        >
          <div className="flex flex-col gap-10">
            <p>나는 뭘 잘못했을까? </p>
            <div>
              <Textarea
                label="답변"
                placeholder="답변을 입력하시려면 닉네임 설정을 하세요."
                disabled
              />
              <Button color="primary" variant="ghost" className="mt-3">
                답변 입력
              </Button>
            </div>
            <Card shadow="none" className="bg-slate-200 mb-5">
              <CardBody>
                <div className="flex flex-col gap-3 py-5 px-3">
                  <div className="flex flex-row items-center gap-3">
                    <p className="text-blue-600">마우스</p>
                    <Button
                      color="primary"
                      variant="bordered"
                      startContent={<MdOutlineThumbUpAlt />}
                      size="sm"
                    >
                      10
                    </Button>

                    <p>2024.03.27 17:21</p>
                  </div>

                  <p>혹시 구글에 검색해보셨나요?</p>
                  <div className="flex flex-row items-center gap-3">
                    <p className="text-blue-600">마우스</p>
                    <Button
                      color="primary"
                      variant="bordered"
                      startContent={<MdOutlineThumbUpAlt />}
                      size="sm"
                    >
                      10
                    </Button>

                    <p>2024.03.27 17:21</p>
                  </div>

                  <p>혹시 구글에 검색해보셨나요?</p>
                </div>
              </CardBody>
            </Card>
          </div>
        </AccordionItem>
        <AccordionItem key="2" aria-label="Question 2" title="Question 2">
          {defaultContent}
        </AccordionItem>
        <AccordionItem key="3" aria-label="Question 3" title="Question 3">
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </main>
  );
}
