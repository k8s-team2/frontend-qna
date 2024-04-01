"use client";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Chip,
  Link,
  Input,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

import React, { useState, useEffect, useContext } from "react";

// TODO: Remove sticky

const Navigation = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [nickname, setNickname] = useState("");

  const [isNickname, setIsNickname] = useState(false);

  useEffect(() => {
    let n = localStorage.getItem("nickname");
    if (n) {
      setNickname(n);
      setIsNickname(true);
    }
  }, []);

  function saveNickname() {
    if (nickname) {
      localStorage.setItem("nickname", nickname);
      setIsNickname(true);
      //console.log(`nickname ${nickname}`);
    }
  }

  return (
    <>
      <Navbar>
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-inherit">Cloud School Q&A</p>
          </Link>
        </NavbarBrand>
        {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/qna">
              Q&A Board
            </Link>
          </NavbarItem>
        </NavbarContent> */}
        <NavbarContent justify="end">
          <NavbarItem>
            {isNickname ? (
              <Chip size="lg" color="primary" variant="flat">
                닉네임 {nickname}
              </Chip>
            ) : (
              <Button onPress={onOpen} color="primary" href="#" variant="flat">
                시작하기
              </Button>
            )}

            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="top-center"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      접속하기
                    </ModalHeader>
                    <ModalBody>
                      <Input
                        autoFocus
                        label="Nickname"
                        placeholder="닉네임을 입력해주세요"
                        variant="bordered"
                        onChange={(e) => {
                          setNickname(e.target.value);
                        }}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="flat" onPress={onClose}>
                        Close
                      </Button>
                      <Button
                        color="primary"
                        onClick={() => saveNickname()}
                        onPress={onClose}
                      >
                        접속
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navigation;
