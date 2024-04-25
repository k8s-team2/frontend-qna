import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button
} from "@nextui-org/react";
import NicknameButton from "./NicknameButton";

import React from "react";

const Navigation = () => {
  return (
    <>
      <Navbar position="static">
        <NavbarBrand className="flex flex-row gap-3">
          <Link href="/">
            <p className="font-bold text-inherit">Cloud School Q&A</p>
          </Link>
          <Button variant="bordered" color="primary">
            <Link href="/attend/">
            출석부
            </Link>
          </Button>
        </NavbarBrand>

        <NavbarContent justify="end">
          <NavbarItem>
            <NicknameButton />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Navigation;
