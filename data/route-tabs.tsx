import { IconType } from "react-icons";
import { Key } from "react";
import { Url } from "next/dist/shared/lib/router/router";
import AnnouncementsSolidIcon from "@/icons/announcements-solid";
import ChatOutlineIcon from "@/icons/chat-outline";
import AssignmentOutlineIcon from "@/icons/assignment-outline";
import QuizOutlineIcon from "@/icons/quiz-outline";
import ResourceOutlineIcon from "@/icons/resource-outline";
import VideosOutlineIcon from "@/icons/video-outline";
import LeaderBoardOutlineIcon from "@/icons/leaderboard-outline";
import ChatSolidIcon from "@/icons/chat-solid";
import AnnouncementsOutlineIcon from "@/icons/announcements-outline";
import AssignmentSolidIcon from "@/icons/assignment-solid";
import ResourceSolidIcon from "@/icons/resource-solid";
import QuizSolidIcon from "@/icons/quiz-solid";
import VideosSolidIcon from "@/icons/video-solid";
import LeaderBoardSolidIcon from "@/icons/leaderboard-solid";

export interface tabsType {
  key: Key;
  name: String;
  url: Url;
  IconOutline: IconType;
  IconSolid: IconType;
}

export const routes: tabsType[] = [
  {
    key: 1,
    name: "Announcements",
    url: "/announcements",
    IconSolid: AnnouncementsSolidIcon,
    IconOutline: AnnouncementsOutlineIcon,
  },
  {
    key: 2,
    name: "Chat",
    url: "/chat",
    IconOutline: ChatOutlineIcon,
    IconSolid: ChatSolidIcon,
  },
  {
    key: 3,
    name: "Assignments",
    url: "/assignments",
    IconOutline: AssignmentOutlineIcon,
    IconSolid: AssignmentSolidIcon,
  },
  {
    key: 4,
    name: "Quizzes",
    url: "/quiz",
    IconOutline: QuizOutlineIcon,
    IconSolid: QuizSolidIcon,
  },
  {
    key: 5,
    name: "Resources",
    url: "/resource",
    IconOutline: ResourceOutlineIcon,
    IconSolid: ResourceSolidIcon,
  },
  {
    key: 6,
    name: "Videos",
    url: "/videos",
    IconOutline: VideosOutlineIcon,
    IconSolid: VideosSolidIcon,
  },
  {
    key: 7,
    name: "Leader Board",
    url: "/leaderboard",
    IconOutline: LeaderBoardOutlineIcon,
    IconSolid: LeaderBoardSolidIcon,
  },
];
