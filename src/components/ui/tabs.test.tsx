import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";
import { describe, it, expect } from "vitest";

describe("Tabs", () => {
  it("renders tab triggers and default active content", () => {
    render(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account content</TabsContent>
        <TabsContent value="password">Password content</TabsContent>
      </Tabs>
    );

    expect(screen.getByRole("tab", { name: "Account" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Password" })).toBeInTheDocument();
    expect(screen.getByText("Account content")).toBeInTheDocument();
    expect(screen.queryByText("Password content")).not.toBeInTheDocument();
  });

  it("switches tab content when trigger is clicked", async () => {
    const user = userEvent.setup();
    render(
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">Account content</TabsContent>
        <TabsContent value="password">Password content</TabsContent>
      </Tabs>
    );

    const passwordTab = screen.getByRole("tab", { name: "Password" });
    await user.click(passwordTab);

    expect(screen.getByText("Password content")).toBeInTheDocument();
    expect(screen.queryByText("Account content")).not.toBeInTheDocument();
  });
});
