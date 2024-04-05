"use client";
import { Accordion, AccordionItem, Input, Chip } from "@nextui-org/react";

import VoteupButton from "@/components/VoteupButton";
import CommentArea from "@/components/CommentArea";
import QuestionArea from "@/components/QuestionArea";
import { useState, useEffect } from "react";
import CommenSection from "@/components/CommenSection";

export default function Home() {
  const [isNickname, setIsNickname] = useState(true);

  const [nickname, setNickname] = useState("");

  return (
    <main className="flex min-h-screen flex-col p-24 gap-10">
      <div className="sticky top-0 bg-white z-50">
        <div className="flex flex-row gap-2 justify-between">
          {/* <Button color="primary" variant="ghost" isDisabled={isNickname}>
            질문하기
          </Button> */}
          <QuestionArea />
        </div>
      </div>

      <Accordion selectionMode="multiple"></Accordion>
    </main>
  );
}
