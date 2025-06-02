"use client";

import { Form } from "@heroui/form";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";

export const RiskRoller = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log("Form submitted");
  }

  return (
    <Form className="w-full max-w-xs" onSubmit={handleSubmit}>
      <Input label="Attackers" type="number" defaultValue="3" min={1} color="danger" />
      <Input label="Defenders" type="number" defaultValue="2" min={1} color="primary" />
      <Button className="w-full" type="submit">Submit</Button>
    </Form>
  );
};
