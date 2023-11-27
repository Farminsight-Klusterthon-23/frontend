"use client"

import AuthenticatedScreensLayout from "../_components/AppLayout";
import {ChatMessage } from "./Components";

export default function NewChatbox({ }) {
  return (
    <>
      <AuthenticatedScreensLayout pageTitle={'Home'} className="mx-2">
        <section className="w-full h-[calc(100dvh-150px)] flex justify-center">
          <ChatMessage />
        </section>
      </AuthenticatedScreensLayout>
    </>
  );
}
