import Link from "next/link";
import React from "react";
import PostCard from "../components/Intro/Card";
import { Mockdata } from "@/model/PostCard";
import Navigation from "../components/Navigation";
import Header from "../components/Mypage/Header";

export default function Introduction() {
  return (
    <div className="h-screen">
      <Navigation title="MeAR紹介" />
      <main className="flex-1 max-w-4xl w-full mx-auto px-8 pt-8">
        <Link href="/intro/post/">
          <PostCard {...Mockdata} />
        </Link>
      </main>
    </div>
  );
}
