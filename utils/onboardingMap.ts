// utils/onboardingMap.ts
import Onboarding from "@/app/onboarding/[step]/page";
import Focus from "@/components/onboarding/Focus";
import Onboarding5 from "@/components/onboarding/Onboarding5";
import Onboarding6 from "@/components/onboarding/Onboarding6";
import Option from "@/components/onboarding/Options";
import Habit from "@/components/onboarding/Habit";
import { ComponentType } from "react";  // ComponentType'ı import edin
import CheckBox from "@/components/onboarding/CheckBox";
import LearningGoal from "@/components/onboarding/LearningGoal";
import ComitmentPact from "@/components/onboarding/CommitmentPact";
import GreatJob from "@/components/onboarding/GreatJob";
import OptionsImg from "@/components/onboarding/OptionsImg";
import Days from "@/components/onboarding/Days";
import Statement from "@/components/onboarding/Statement";

interface StepInfo {
  component: ComponentType<any>;  // Bileşen tipi
  title: string;
  options: string[];
}

const componentsMap: Record<string, StepInfo> = {
  "1": {
    component: Focus,
    title: "Step 1: Focus",
    options: ["Option 1", "Option 2", "Option 3"]
  },
  "2": {
    component: Option,
    title: "What is your focus right now?",
    options: ["Practice self-discipline & consistency", "Develop my career skills", "Broaden my knowledge","Understand myself & others better","I don’t relate to any of these"]
  },
  "3": {
    component: Option,
    title: "Select Your Gender",
    options: ["Male", "Female", "Other"]
  },
  "4": {
    component: Option,
    title: "What’s your age?",
    options: ["18-24", "25-34", "35-44","45-54","55+"]
  },
  "5": {
    component: Onboarding5,
    title: "What’s your age?",
    options: ["18-24", "25-34", "35-44","45-54","55+"]
  },
  "6": {
    component: Onboarding6,
    title: "",
    options: [""]
  },
  "7": {
    component: Onboarding6,
    title: "",
    options: [""]
  },
  "8": {
    component: CheckBox,
    title: "",
    options: [""]
  },
  "9": {
    component: Habit,
    title: "What habit you want to create?",
    options: ["learn one new idea or fact every day",
              "cut back on fast dopamine",
              "give constructive feedback at work",
              "start my day with an affirmation",
              "track my spending and savings regularly",
              "prioritize quality time with my child"
            ]
  },
  "10": {
    component: LearningGoal, //learinin goal 
    title: "Choose your weekly learning goal",
    options: ["a quick learner",
              "a more focused person",
              "a charismatic leader",
              "the life of the party",
              "a financially savvy investor",
              "a parent that can be trusted and relied on"
            ]
  },
  "11": {
    component: Habit,
    title: "What do you want to become?",
    options: ["a quick learner",
              "a more focused person",
              "a charismatic leader",
              "the life of the party",
              "a financially savvy investor",
              "a parent that can be trusted and relied on"
            ]
  },
  "12": {
    component: Option,
    title: "Commit to growing?",
    options: ["7 - day streak", "14 - day streak", "30 - day streak","50 - day streak"]
  },
  "13": {
    component: ComitmentPact,
    title: "Commit to growing?",
    options: [""]
  },
  "14": {
    component: GreatJob,
    title: "Great job",
    options: [""]
  },
  "15": {
    component: OptionsImg,
    title: "When do you like to find out new ideas?",
    options: [""]
  },
  "16": {
    component: Days,
    title: "When do you like to find out new ideas?",
    options: [""]
  },
  "17": {
    component: Statement,
    title: "I enjoy reading, but it’s hard for me to finish whole books.",
    options: [""]
  },
  "18": {
    component: Statement,
    title: "I value self-growth, but I may lack motivation to find time for it.",
    options: [""]
  },
  "19": {
    component: Statement,
    title: "I believe that personal growth should bring pleasure, not struggle.",
    options: [""]
  },
}

// Default olarak Option bileşenini döndürüyoruz
export default componentsMap;
